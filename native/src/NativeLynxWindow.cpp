#include "NativeLynxWindow.h"

#ifdef _WIN32

#include <dwmapi.h>

#include <string>

#pragma comment(lib, "dwmapi.lib")

constexpr wchar_t NativeLynxWindow::kClassName[];

NativeLynxWindow::~NativeLynxWindow() { Destroy(); }

bool NativeLynxWindow::EnsureClass(HINSTANCE instance) {
  static bool registered = false;
  if (registered) return true;

  WNDCLASSEXW wc{};
  wc.cbSize = sizeof(wc);
  wc.style = CS_HREDRAW | CS_VREDRAW | CS_DBLCLKS;
  wc.lpfnWndProc = &NativeLynxWindow::WindowProc;
  wc.hInstance = instance;
  wc.hCursor = LoadCursorW(nullptr, IDC_ARROW);
  wc.hbrBackground = nullptr;
  wc.lpszClassName = kClassName;
  if (!RegisterClassExW(&wc) && GetLastError() != ERROR_CLASS_ALREADY_EXISTS) return false;
  registered = true;
  return true;
}

bool NativeLynxWindow::Create(
    HINSTANCE instance,
    Kind kind,
    int x,
    int y,
    int width,
    int height,
    MessageHook hook) {
  kind_ = kind;
  message_hook_ = std::move(hook);
  if (!EnsureClass(instance)) return false;

  DWORD ex_style = WS_EX_APPWINDOW;
  DWORD style = WS_POPUP;
  if (kind == Kind::Overlay) {
    ex_style = WS_EX_TOOLWINDOW | WS_EX_TOPMOST | WS_EX_NOACTIVATE | WS_EX_LAYERED | WS_EX_TRANSPARENT;
  }

  hwnd_ = CreateWindowExW(
      ex_style,
      kClassName,
      kind == Kind::Panel ? L"Lynx Notify" : L"Lynx Notify Overlay",
      style,
      x,
      y,
      width,
      height,
      nullptr,
      nullptr,
      instance,
      this);
  if (!hwnd_) return false;

  if (kind == Kind::Overlay) {
    SetLayeredWindowAttributes(hwnd_, 0, 255, LWA_ALPHA);
    MARGINS margins{-1};
    DwmExtendFrameIntoClientArea(hwnd_, &margins);
    SetWindowPos(hwnd_, HWND_TOPMOST, x, y, width, height, SWP_NOACTIVATE | SWP_SHOWWINDOW);
  }

  const float scale = static_cast<float>(GetDpiForWindow(hwnd_)) / 96.0f;
  lynx::pub::LynxView::Builder builder;
  builder.SetScreenSize(width, height, scale).SetFrame(0, 0, width, height).SetParent(hwnd_);
  lynx_view_ = builder.Build();
  return static_cast<bool>(lynx_view_);
}

bool NativeLynxWindow::LoadBundle(const std::filesystem::path& bundle_path) {
  if (!lynx_view_ || !std::filesystem::exists(bundle_path)) return false;
  auto meta = std::make_shared<lynx::pub::LynxLoadMeta>();
  const std::string url = std::string("file://") + std::filesystem::absolute(bundle_path).string();
  meta->SetUrl(url.c_str());
  lynx_view_->LoadTemplate(meta);
  return true;
}

void NativeLynxWindow::Show(int command) {
  if (!hwnd_) return;
  ShowWindow(hwnd_, command);
  if (kind_ == Kind::Panel) {
    SetForegroundWindow(hwnd_);
  }
}

void NativeLynxWindow::Hide() {
  if (hwnd_) ShowWindow(hwnd_, SW_HIDE);
}

void NativeLynxWindow::Destroy() {
  lynx_view_ = {};
  if (hwnd_) {
    DestroyWindow(hwnd_);
    hwnd_ = nullptr;
  }
}

LRESULT CALLBACK NativeLynxWindow::WindowProc(HWND hwnd, UINT message, WPARAM w_param, LPARAM l_param) {
  NativeLynxWindow* self = reinterpret_cast<NativeLynxWindow*>(GetWindowLongPtrW(hwnd, GWLP_USERDATA));
  if (message == WM_NCCREATE) {
    const auto* create = reinterpret_cast<CREATESTRUCTW*>(l_param);
    self = static_cast<NativeLynxWindow*>(create->lpCreateParams);
    SetWindowLongPtrW(hwnd, GWLP_USERDATA, reinterpret_cast<LONG_PTR>(self));
    self->hwnd_ = hwnd;
  }
  if (self) return self->HandleMessage(message, w_param, l_param);
  return DefWindowProcW(hwnd, message, w_param, l_param);
}

LRESULT NativeLynxWindow::HandleMessage(UINT message, WPARAM w_param, LPARAM l_param) {
  if (message_hook_) {
    if (auto result = message_hook_(hwnd_, message, w_param, l_param); result.has_value()) return *result;
  }

  if (kind_ == Kind::Overlay) {
    switch (message) {
      case WM_NCHITTEST:
        return HTTRANSPARENT;
      case WM_MOUSEACTIVATE:
        return MA_NOACTIVATE;
      case WM_ERASEBKGND:
        return 1;
      case WM_CLOSE:
        return 0;
      default:
        break;
    }
  } else if (message == WM_CLOSE) {
    Hide();
    return 0;
  }

  if (message == WM_NCDESTROY) {
    SetWindowLongPtrW(hwnd_, GWLP_USERDATA, 0);
  }
  return DefWindowProcW(hwnd_, message, w_param, l_param);
}

#endif
