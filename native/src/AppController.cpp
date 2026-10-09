#include "AppController.h"

#ifdef _WIN32

#include "NativeModule.h"
#include "resource.h"
#include "Storage.h"
#include "lynx_env.h"

#include <shellapi.h>

#include <algorithm>
#include <array>
#include <vector>

AppController::AppController() : AppController(storage::DefaultStatePath()) {}

AppController::AppController(std::filesystem::path state_path) : engine_(std::move(state_path)) {}

AppController::~AppController() {
  if (panel_.hwnd()) KillTimer(panel_.hwnd(), kOverlayTimerId);
  RemoveTrayIcon();
  engine_.Stop();
  overlay_.Destroy();
  panel_.Destroy();
}

int AppController::Run(HINSTANCE instance, int show_command) {
  instance_ = instance;
  engine_.Load();

  auto& lynx_env = lynx::pub::LynxEnv::GetInstance();
#ifdef LYNX_NOTIFY_DEVTOOLS
  lynx_env.SetDevtoolEnabled(true);
  lynx_env.SetLogboxEnabled(true);
#else
  lynx_env.SetDevtoolEnabled(false);
  lynx_env.SetLogboxEnabled(false);
#endif
  lynx_env.SetDevtoolAppInfo("App", "LynxNotify");
  lynx_env.SetDevtoolAppInfo("AppVersion", "0.1.0");
  lynx_env.RegisterNativeModule("NotifyHost", NotifyHostModuleCreator, this);

  if (!CreateWindows(instance, show_command)) return 2;
  AddTrayIcon();
  engine_.Start();

  MSG message{};
  while (GetMessageW(&message, nullptr, 0, 0) > 0) {
    TranslateMessage(&message);
    DispatchMessageW(&message);
  }
  engine_.Stop();
  RemoveTrayIcon();
  return static_cast<int>(message.wParam);
}

std::filesystem::path AppController::ExecutableDir() const {
  std::array<wchar_t, 32768> buffer{};
  const DWORD length = GetModuleFileNameW(nullptr, buffer.data(), static_cast<DWORD>(buffer.size()));
  if (!length) return std::filesystem::current_path();
  return std::filesystem::path(std::wstring(buffer.data(), length)).parent_path();
}

bool AppController::CreateWindows(HINSTANCE instance, int show_command) {
  constexpr int panel_width = 430;
  constexpr int panel_height = 760;
  RECT work{};
  SystemParametersInfoW(SPI_GETWORKAREA, 0, &work, 0);
  const int panel_x = std::max(work.left + 12, work.right - panel_width - 28);
  const int panel_y = std::max(work.top + 12, work.top + 28);

  if (!panel_.Create(
          instance,
          NativeLynxWindow::Kind::Panel,
          panel_x,
          panel_y,
          panel_width,
          panel_height,
          [this](HWND hwnd, UINT message, WPARAM w, LPARAM l) { return HandlePanelMessage(hwnd, message, w, l); })) {
    return false;
  }

  if (!panel_.LoadBundle(ExecutableDir() / L"bundles" / L"panel.lynx.bundle")) return false;
  if (!SetTimer(panel_.hwnd(), kOverlayTimerId, 120, nullptr)) return false;
  panel_.Show(show_command == SW_HIDE ? SW_SHOWNORMAL : show_command);
  return true;
}

bool AppController::EnsurePanelView() {
  if (panel_.HasView()) return true;
  if (!panel_.EnsureView()) return false;
  if (panel_.LoadBundle(ExecutableDir() / L"bundles" / L"panel.lynx.bundle")) return true;
  panel_.ReleaseView();
  return false;
}

bool AppController::ShowPanel() {
  if (IsIconic(panel_.hwnd())) panel_.Show(SW_RESTORE);
  if (!EnsurePanelView()) return false;
  panel_.Show(SW_SHOWNORMAL);
  return true;
}

void AppController::HidePanel() {
  panel_.Hide();
  PostMessageW(panel_.hwnd(), kReleasePanelViewMessage, 0, 0);
}

bool AppController::CreateOverlay() {
  const int virtual_x = GetSystemMetrics(SM_XVIRTUALSCREEN);
  const int virtual_y = GetSystemMetrics(SM_YVIRTUALSCREEN);
  const int virtual_width = GetSystemMetrics(SM_CXVIRTUALSCREEN);
  const int virtual_height = GetSystemMetrics(SM_CYVIRTUALSCREEN);
  if (!overlay_.Create(
          instance_,
          NativeLynxWindow::Kind::Overlay,
          virtual_x,
          virtual_y,
          virtual_width,
          virtual_height,
          {},
          [this](HWND hwnd, POINT point) { return IsOverlayInteractivePoint(hwnd, point); },
          [this](HWND hwnd, POINT point) { return DismissOverlayPoint(hwnd, point); })) {
    return false;
  }

  if (!overlay_.LoadBundle(ExecutableDir() / L"bundles" / L"overlay.lynx.bundle")) {
    overlay_.Destroy();
    return false;
  }

  UpdateOverlayRegion();
  overlay_.Show(SW_SHOWNOACTIVATE);
  return true;
}

void AppController::UpdateOverlay() {
  if (engine_.HasActiveNotifications()) {
    overlay_empty_since_ = 0;
    if (!overlay_.hwnd() && !CreateOverlay()) {
      overlay_.Destroy();
      return;
    }
    UpdateOverlayRegion();
  } else if (overlay_.hwnd()) {
    const ULONGLONG now = GetTickCount64();
    if (!overlay_empty_since_) overlay_empty_since_ = now;
    // Allow the 160 ms frontend poll and 140 ms exit animation to finish.
    if (now - overlay_empty_since_ >= 500) {
      overlay_.Destroy();
      overlay_empty_since_ = 0;
    }
  }
}

void AppController::UpdateOverlayRegion() {
  if (!overlay_.hwnd()) return;

  RECT client{};
  if (!GetClientRect(overlay_.hwnd(), &client)) return;
  const int width = client.right - client.left;
  const int height = client.bottom - client.top;
  const UINT dpi = GetDpiForWindow(overlay_.hwnd());
  const double scale = dpi > 0 ? static_cast<double>(dpi) / 96.0 : 1.0;
  const int shadow_margin = std::max(1, MulDiv(28, static_cast<int>(dpi), 96));

  const auto card_rects = engine_.GetNotificationCardRects(width, height, scale);
  std::vector<RECT> region_rects;
  region_rects.reserve(card_rects.size());
  for (const auto& card : card_rects) {
    region_rects.push_back({
        card.left - shadow_margin,
        card.top - shadow_margin,
        card.right + shadow_margin,
        card.bottom + shadow_margin,
    });
  }
  overlay_.SetInteractiveRegion(region_rects);
}

bool AppController::IsOverlayInteractivePoint(HWND hwnd, POINT point) const {
  RECT client{};
  if (!GetClientRect(hwnd, &client)) return false;
  const UINT dpi = GetDpiForWindow(hwnd);
  const double scale = dpi > 0 ? static_cast<double>(dpi) / 96.0 : 1.0;
  return engine_.IsNotificationClosePoint(point.x, point.y, client.right, client.bottom, scale);
}

bool AppController::DismissOverlayPoint(HWND hwnd, POINT point) {
  RECT client{};
  if (!GetClientRect(hwnd, &client)) return false;
  const UINT dpi = GetDpiForWindow(hwnd);
  const double scale = dpi > 0 ? static_cast<double>(dpi) / 96.0 : 1.0;
  return engine_.DismissNotificationAtPoint(point.x, point.y, client.right, client.bottom, scale);
}

void AppController::WindowCommand(const std::string& command) {
  if (command == "retain-panel-draft") {
    panel_has_draft_.store(true);
    return;
  }
  if (command == "release-panel-draft") {
    panel_has_draft_.store(false);
    PostMessageW(panel_.hwnd(), kReleasePanelViewMessage, 0, 0);
    return;
  }
  WindowAction action;
  if (command == "drag") action = WindowAction::Drag;
  else if (command == "minimize") action = WindowAction::Minimize;
  else if (command == "hide") action = WindowAction::Hide;
  else if (command == "quit") action = WindowAction::Quit;
  else if (command == "show") action = WindowAction::Show;
  else return;
  // NativeModule calls can originate on Lynx's JS thread. Window and view
  // lifetime changes must happen on the Win32 message thread after the call.
  PostMessageW(panel_.hwnd(), kWindowCommandMessage, static_cast<WPARAM>(action), 0);
}

void AppController::HandleWindowAction(WindowAction action) {
  if (action == WindowAction::Drag) {
    if (panel_.hwnd()) {
      ReleaseCapture();
      SendMessageW(panel_.hwnd(), WM_NCLBUTTONDOWN, HTCAPTION, 0);
    }
  } else if (action == WindowAction::Minimize) {
    if (panel_.hwnd()) ShowWindow(panel_.hwnd(), SW_MINIMIZE);
  } else if (action == WindowAction::Hide) {
    HidePanel();
  } else if (action == WindowAction::Quit) {
    PostQuitMessage(0);
  } else if (action == WindowAction::Show) {
    ShowPanel();
  }
}

void AppController::AddTrayIcon() {
  if (!panel_.hwnd() || tray_added_) return;
  tray_ = {};
  tray_.cbSize = sizeof(tray_);
  tray_.hWnd = panel_.hwnd();
  tray_.uID = kTrayId;
  tray_.uFlags = NIF_MESSAGE | NIF_ICON | NIF_TIP;
  tray_.uCallbackMessage = kTrayMessage;
  tray_.hIcon = LoadIconW(GetModuleHandleW(nullptr), MAKEINTRESOURCEW(IDI_LYNX_NOTIFY));
  wcscpy_s(tray_.szTip, L"Lynx Notify — 定时通知");
  tray_added_ = Shell_NotifyIconW(NIM_ADD, &tray_) != FALSE;
}

void AppController::RemoveTrayIcon() {
  if (!tray_added_) return;
  Shell_NotifyIconW(NIM_DELETE, &tray_);
  tray_added_ = false;
}

std::optional<LRESULT> AppController::HandlePanelMessage(
    HWND hwnd, UINT message, WPARAM w_param, LPARAM l_param) {
  if (message == WM_TIMER && w_param == kOverlayTimerId) {
    UpdateOverlay();
    return 0;
  }
  if (message == kWindowCommandMessage) {
    HandleWindowAction(static_cast<WindowAction>(w_param));
    return 0;
  }
  if (message == kReleasePanelViewMessage) {
    if ((!IsWindowVisible(hwnd) || IsIconic(hwnd)) && !panel_has_draft_.load()) panel_.ReleaseView();
    return 0;
  }
  if (message == WM_CLOSE) {
    HidePanel();
    return 0;
  }
  if (message == WM_SIZE) {
    if (w_param == SIZE_MINIMIZED) PostMessageW(hwnd, kReleasePanelViewMessage, 0, 0);
    else if (IsWindowVisible(hwnd)) EnsurePanelView();
  }
  if (message != kTrayMessage) return std::nullopt;

  const UINT mouse_message = LOWORD(l_param);
  if (mouse_message == WM_LBUTTONUP || mouse_message == WM_LBUTTONDBLCLK) {
    ShowPanel();
  } else if (mouse_message == WM_RBUTTONUP || mouse_message == WM_CONTEXTMENU) {
    ShowTrayMenu(hwnd);
  }
  return 0;
}

void AppController::ShowTrayMenu(HWND hwnd) {
  POINT point{};
  GetCursorPos(&point);
  HMENU menu = CreatePopupMenu();
  if (!menu) return;
  AppendMenuW(menu, MF_STRING, 1001, L"打开 Lynx Notify");
  AppendMenuW(menu, MF_SEPARATOR, 0, nullptr);
  AppendMenuW(menu, MF_STRING, 1002, L"退出");
  SetForegroundWindow(hwnd);
  const UINT selected = TrackPopupMenu(menu, TPM_RETURNCMD | TPM_RIGHTBUTTON, point.x, point.y, 0, hwnd, nullptr);
  DestroyMenu(menu);
  if (selected == 1001) ShowPanel();
  else if (selected == 1002) PostQuitMessage(0);
}

#endif
