#include "NativeLynxWindow.h"

#ifdef _WIN32

#include <commctrl.h>
#include <dwmapi.h>
#include <windowsx.h>

#include "resource.h"

#include <string>

#pragma comment(lib, "dwmapi.lib")
#pragma comment(lib, "comctl32.lib")

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
  wc.hIcon = LoadIconW(instance, MAKEINTRESOURCEW(IDI_LYNX_NOTIFY));
  wc.hIconSm = wc.hIcon;
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
    MessageHook hook,
    HitTestHook hit_test) {
  kind_ = kind;
  message_hook_ = std::move(hook);
  hit_test_hook_ = std::move(hit_test);
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
  if (!lynx_view_) return false;

  lynx_hwnd_ = reinterpret_cast<HWND>(lynx_view_->GetNativeWindow());
  if (!lynx_hwnd_ || !IsWindow(lynx_hwnd_)) return false;
  if (!SetWindowSubclass(
          lynx_hwnd_,
          &NativeLynxWindow::LynxWindowProc,
          kLynxSubclassId,
          reinterpret_cast<DWORD_PTR>(this))) {
    lynx_hwnd_ = nullptr;
    return false;
  }
  return true;
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
  if (lynx_hwnd_ && IsWindow(lynx_hwnd_)) {
    RemoveWindowSubclass(lynx_hwnd_, &NativeLynxWindow::LynxWindowProc, kLynxSubclassId);
  }
  lynx_hwnd_ = nullptr;
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

  if (kind_ == Kind::Panel) {
    if (message == WM_NCHITTEST) {
      POINT point{GET_X_LPARAM(l_param), GET_Y_LPARAM(l_param)};
      ScreenToClient(hwnd_, &point);

      RECT client{};
      GetClientRect(hwnd_, &client);
      const UINT dpi = GetDpiForWindow(hwnd_);
      const int titlebar_height = MulDiv(46, static_cast<int>(dpi), 96);
      const int action_width = MulDiv(92, static_cast<int>(dpi), 96);

      // The title bar is rendered by Lynx, so expose its background as the
      // native caption while leaving the minimize/close buttons clickable.
      if (point.y >= 0 && point.y < titlebar_height && point.x >= 0 &&
          point.x < client.right - action_width) {
        return HTCAPTION;
      }
    } else if (message == WM_SETCURSOR && LOWORD(l_param) == HTCAPTION) {
      SetCursor(LoadCursorW(nullptr, IDC_SIZEALL));
      return TRUE;
    }
  } else if (kind_ == Kind::Overlay) {
    switch (message) {
      case WM_NCHITTEST:
        if (hit_test_hook_) {
          POINT point{GET_X_LPARAM(l_param), GET_Y_LPARAM(l_param)};
          ScreenToClient(hwnd_, &point);
          if (hit_test_hook_(hwnd_, point)) return HTCLIENT;
        }
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

LRESULT CALLBACK NativeLynxWindow::LynxWindowProc(
    HWND hwnd,
    UINT message,
    WPARAM w_param,
    LPARAM l_param,
    UINT_PTR subclass_id,
    DWORD_PTR ref_data) {
  auto* self = reinterpret_cast<NativeLynxWindow*>(ref_data);
  if (self && subclass_id == kLynxSubclassId) {
    if (auto result = self->HandleLynxMessage(hwnd, message, w_param, l_param); result.has_value()) {
      return *result;
    }
  }

  const LRESULT result = DefSubclassProc(hwnd, message, w_param, l_param);
  if (message == WM_NCDESTROY) {
    RemoveWindowSubclass(hwnd, &NativeLynxWindow::LynxWindowProc, subclass_id);
    if (self && self->lynx_hwnd_ == hwnd) self->lynx_hwnd_ = nullptr;
  }
  return result;
}

bool NativeLynxWindow::ToParentClientPoint(HWND child, LPARAM l_param, POINT* point) const {
  if (!point || !hwnd_) return false;
  point->x = GET_X_LPARAM(l_param);
  point->y = GET_Y_LPARAM(l_param);
  if (!ClientToScreen(child, point)) return false;
  return ScreenToClient(hwnd_, point) != FALSE;
}

bool NativeLynxWindow::IsPanelTitleBarPoint(POINT point) const {
  if (kind_ != Kind::Panel || !hwnd_) return false;

  RECT client{};
  if (!GetClientRect(hwnd_, &client)) return false;
  const UINT dpi = GetDpiForWindow(hwnd_);
  const int titlebar_height = MulDiv(46, static_cast<int>(dpi), 96);
  const int action_width = MulDiv(92, static_cast<int>(dpi), 96);
  return point.y >= 0 && point.y < titlebar_height && point.x >= 0 &&
         point.x < client.right - action_width;
}

std::optional<LRESULT> NativeLynxWindow::HandleLynxMessage(
    HWND hwnd, UINT message, WPARAM /*w_param*/, LPARAM l_param) {
  if (kind_ == Kind::Panel) {
    if (message == WM_LBUTTONDOWN || message == WM_LBUTTONDBLCLK) {
      POINT point{};
      if (ToParentClientPoint(hwnd, l_param, &point) && IsPanelTitleBarPoint(point)) {
        // The Lynx view is the actual mouse target. Forward the caption gesture
        // to the host window so Windows moves the panel instead of the child.
        ReleaseCapture();
        SendMessageW(hwnd_, WM_NCLBUTTONDOWN, HTCAPTION, 0);
        return 0;
      }
    } else if (message == WM_SETCURSOR) {
      POINT point{};
      if (GetCursorPos(&point) && ScreenToClient(hwnd, &point) && IsPanelTitleBarPoint(point)) {
        SetCursor(LoadCursorW(nullptr, IDC_SIZEALL));
        return TRUE;
      }
    }
  } else if (kind_ == Kind::Overlay) {
    if (message == WM_NCHITTEST) {
      POINT point{};
      if (ToParentClientPoint(hwnd, l_param, &point) && hit_test_hook_ &&
          hit_test_hook_(hwnd_, point)) {
        return HTCLIENT;
      }
      return HTTRANSPARENT;
    }
    if (message == WM_MOUSEACTIVATE) return MA_NOACTIVATE;
  }
  return std::nullopt;
}

#endif
