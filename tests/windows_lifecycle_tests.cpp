#include "AppController.h"
#include "MiniJson.h"
#include "TimeUtils.h"
#include "lynx_env.h"

#include <windows.h>
#include <psapi.h>

#include <atomic>
#include <chrono>
#include <filesystem>
#include <fstream>
#include <functional>
#include <iostream>
#include <stdexcept>
#include <thread>

namespace {

HWND FindOwnWindow(const wchar_t* title) {
  struct Search { const wchar_t* title; HWND result = nullptr; } search{title};
  EnumWindows([](HWND hwnd, LPARAM data) -> BOOL {
    auto& search = *reinterpret_cast<Search*>(data);
    DWORD process = 0;
    GetWindowThreadProcessId(hwnd, &process);
    wchar_t title[128]{};
    GetWindowTextW(hwnd, title, 128);
    if (process == GetCurrentProcessId() && wcscmp(title, search.title) == 0) {
      search.result = hwnd;
      return FALSE;
    }
    return TRUE;
  }, reinterpret_cast<LPARAM>(&search));
  return search.result;
}

void Check(bool condition, const char* message) {
  if (!condition) throw std::runtime_error(message);
}

void WaitFor(const std::function<bool()>& condition, const char* message) {
  const ULONGLONG deadline = GetTickCount64() + 10'000;
  while (GetTickCount64() < deadline) {
    if (condition()) return;
    std::this_thread::sleep_for(std::chrono::milliseconds(20));
  }
  Check(false, message);
}

void PrintMemory(std::ostream& report, const char* stage) {
  PROCESS_MEMORY_COUNTERS_EX memory{};
  memory.cb = sizeof(memory);
  if (GetProcessMemoryInfo(GetCurrentProcess(), reinterpret_cast<PROCESS_MEMORY_COUNTERS*>(&memory), sizeof(memory))) {
    report << stage << ": working set " << memory.WorkingSetSize / 1048576.0
           << " MiB, private commit " << memory.PrivateUsage / 1048576.0 << " MiB" << std::endl;
  }
}

}  // namespace

int main() {
  wchar_t executable[MAX_PATH]{};
  GetModuleFileNameW(nullptr, executable, MAX_PATH);
  std::ofstream report(std::filesystem::path(executable).parent_path() / "windows-lifecycle-results.txt");
  Check(report.good(), "cannot create test report");
  SetProcessDpiAwarenessContext(DPI_AWARENESS_CONTEXT_PER_MONITOR_AWARE_V2);
  const auto directory = std::filesystem::temp_directory_path() /
      ("lynx-notify-lifecycle-" + std::to_string(GetCurrentProcessId()));
  std::atomic<bool> passed{false};
  std::atomic<bool> finished{false};
  int exit_code = 0;
  {
    AppController app(directory / "state.json");
    std::thread checks([&] {
      try {
        HWND panel = nullptr;
        WaitFor([&] { panel = FindOwnWindow(L"Lynx Notify"); return panel && GetWindow(panel, GW_CHILD); }, "initial panel view missing");
        std::this_thread::sleep_for(std::chrono::seconds(1));
        Check(!lynx::pub::LynxEnv::GetInstance().IsDevtoolEnabled(), "production DevTool enabled");
        Check(!lynx::pub::LynxEnv::GetInstance().IsLogboxEnabled(), "production LogBox enabled");
        Check(!FindOwnWindow(L"Lynx Notify Overlay"), "idle overlay was created");
        PrintMemory(report, "panel open");

        for (int cycle = 0; cycle < 3; ++cycle) {
          app.WindowCommand("hide");
          WaitFor([&] { return !IsWindowVisible(panel) && !GetWindow(panel, GW_CHILD); }, "hidden panel retained view");
          Check(IsWindow(panel), "tray host was destroyed");
          app.WindowCommand("show");
          WaitFor([&] { return IsWindowVisible(panel) && GetWindow(panel, GW_CHILD); }, "panel did not rebuild");
        }
        app.WindowCommand("minimize");
        WaitFor([&] { return IsIconic(panel) && !GetWindow(panel, GW_CHILD); }, "minimized panel retained view");
        app.WindowCommand("show");
        WaitFor([&] { return !IsIconic(panel) && IsWindowVisible(panel) && GetWindow(panel, GW_CHILD); }, "minimized panel did not restore");
        report << "hide, reopen and minimize cycles passed" << std::endl;

        // The rebuilt Vue page initializes its home-page draft flag asynchronously.
        std::this_thread::sleep_for(std::chrono::seconds(1));
        app.WindowCommand("retain-panel-draft");
        app.WindowCommand("hide");
        WaitFor([&] { return !IsWindowVisible(panel); }, "draft panel did not hide");
        std::this_thread::sleep_for(std::chrono::milliseconds(300));
        Check(GetWindow(panel, GW_CHILD) != nullptr, "unsaved editor view was released");
        app.WindowCommand("release-panel-draft");
        WaitFor([&] { return !GetWindow(panel, GW_CHILD); }, "finished draft view was not released");
        report << "draft retention passed" << std::endl;

        Check(app.UpdateSettingsJson(R"({"durationSec":2})"), "test settings failed");
        for (int cycle = 0; cycle < 2; ++cycle) {
          Check(app.PreviewNotificationJson(R"({"title":"Lifecycle test","body":"temporary preview"})"), "preview failed");
          WaitFor([] { HWND overlay = FindOwnWindow(L"Lynx Notify Overlay"); return overlay && IsWindowVisible(overlay) && GetWindow(overlay, GW_CHILD); }, "notification overlay not created");
          Check(!GetWindow(panel, GW_CHILD), "notification recreated hidden panel");
          WaitFor([] { return !FindOwnWindow(L"Lynx Notify Overlay"); }, "expired overlay was not destroyed");
          report << "preview overlay cycle " << cycle << " passed" << std::endl;
        }

        NotificationTask scheduled;
        scheduled.type = "once";
        scheduled.once.at_ms = time_utils::NowMs() + 1000;
        const auto saved = TaskFromJson(mini_json::Parse(app.UpsertTaskJson(mini_json::Dump(ToJson(scheduled)))));
        Check(!saved.id.empty(), "background task was not saved");
        WaitFor([&] {
          const auto state = mini_json::Parse(app.GetOverlayStateJson());
          for (const auto& card : state.At("cards").AsArray()) {
            if (card.At("taskId").AsString() == saved.id) return true;
          }
          return false;
        }, "scheduler stopped while both views were released");
        WaitFor([] { return FindOwnWindow(L"Lynx Notify Overlay") != nullptr; }, "scheduled notification had no overlay");
        WaitFor([] { return !FindOwnWindow(L"Lynx Notify Overlay"); }, "scheduled overlay was not destroyed");
        PrintMemory(report, "idle after repeated view cycles");
        passed = true;
      } catch (const std::exception& error) {
        std::cerr << "lifecycle test failed: " << error.what() << '\n';
        report << "lifecycle test failed: " << error.what() << std::endl;
      }
      finished = true;
      app.WindowCommand("quit");
    });
    exit_code = app.Run(GetModuleHandleW(nullptr), SW_SHOWNORMAL);
    // Startup failure must not leave the test worker waiting on a dead app.
    checks.join();
  }
  std::error_code error;
  std::filesystem::remove(directory / "state.json", error);
  std::filesystem::remove(directory / "state.json.tmp", error);
  std::filesystem::remove(directory, error);
  if (exit_code != 0 || !finished || !passed) return 1;
  report << "Windows lifecycle tests passed" << std::endl;
  std::cout << "Windows lifecycle tests passed\n";
  return 0;
}
