#include "AppController.h"

#ifdef _WIN32

#include "NativeModule.h"
#include "resource.h"
#include "Storage.h"
#include "lynx_env.h"

#include <shellapi.h>

#include <algorithm>
#include <array>

AppController::AppController() : engine_(storage::DefaultStatePath()) {}

AppController::~AppController() {
  RemoveTrayIcon();
  engine_.Stop();
}

int AppController::Run(HINSTANCE instance, int show_command) {
  engine_.Load();

  auto& lynx_env = lynx::pub::LynxEnv::GetInstance();
  lynx_env.SetDevtoolEnabled(true);
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

  const int virtual_x = GetSystemMetrics(SM_XVIRTUALSCREEN);
  const int virtual_y = GetSystemMetrics(SM_YVIRTUALSCREEN);
  const int virtual_width = GetSystemMetrics(SM_CXVIRTUALSCREEN);
  const int virtual_height = GetSystemMetrics(SM_CYVIRTUALSCREEN);
  if (!overlay_.Create(
          instance,
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

  const auto bundles = ExecutableDir() / L"bundles";
  if (!panel_.LoadBundle(bundles / L"panel.lynx.bundle")) return false;
  if (!overlay_.LoadBundle(bundles / L"overlay.lynx.bundle")) return false;

  overlay_.Show(SW_SHOWNOACTIVATE);
  panel_.Show(show_command == SW_HIDE ? SW_SHOWNORMAL : show_command);
  return true;
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
  if (command == "drag") {
    if (panel_.hwnd()) {
      ReleaseCapture();
      SendMessageW(panel_.hwnd(), WM_NCLBUTTONDOWN, HTCAPTION, 0);
    }
  } else if (command == "minimize") {
    if (panel_.hwnd()) ShowWindow(panel_.hwnd(), SW_MINIMIZE);
  } else if (command == "hide") {
    panel_.Hide();
  } else if (command == "quit") {
    PostQuitMessage(0);
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
    HWND hwnd, UINT message, WPARAM, LPARAM l_param) {
  if (message != kTrayMessage) return std::nullopt;

  const UINT mouse_message = LOWORD(l_param);
  if (mouse_message == WM_LBUTTONUP || mouse_message == WM_LBUTTONDBLCLK) {
    panel_.Show(SW_SHOWNORMAL);
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
  if (selected == 1001) panel_.Show(SW_SHOWNORMAL);
  else if (selected == 1002) PostQuitMessage(0);
}

#endif
