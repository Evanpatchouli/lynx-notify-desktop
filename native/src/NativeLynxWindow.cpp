#include "NativeLynxWindow.h"

#ifdef _WIN32

#include <commctrl.h>
#include <dwmapi.h>
#include <windowsx.h>

#include "resource.h"

#include <algorithm>
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
    HitTestHook hit_test,
    ClickHook click) {
  kind_ = kind;
  message_hook_ = std::move(hook);
  hit_test_hook_ = std::move(hit_test);
  click_hook_ = std::move(click);
  if (!EnsureClass(instance)) return false;

  DWORD ex_style = WS_EX_APPWINDOW;
  DWORD style = WS_POPUP;
  if (kind == Kind::Overlay) {
    // Keep the overlay in hit testing so the close regions can be interactive.
    // Non-card regions return HTTRANSPARENT from the parent/child procedures.
    ex_style = WS_EX_TOOLWINDOW | WS_EX_TOPMOST | WS_EX_NOACTIVATE | WS_EX_LAYERED;
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

  if (kind == Kind::Panel) {
    // Prefer DWM's compositor-rounded corners on Windows 11. SetWindowRgn is
    // a binary mask, so keep it only as a compatibility fallback for older systems.
    DWM_WINDOW_CORNER_PREFERENCE preference = DWMWCP_ROUND;
    if (FAILED(DwmSetWindowAttribute(
            hwnd_,
            DWMWA_WINDOW_CORNER_PREFERENCE,
            &preference,
            sizeof(preference)))) {
      const UINT dpi = GetDpiForWindow(hwnd_);
      const int corner_diameter = MulDiv(30, static_cast<int>(dpi), 96);
      HRGN region =
          CreateRoundRectRgn(0, 0, width + 1, height + 1, corner_diameter, corner_diameter);
      if (region && !SetWindowRgn(hwnd_, region, TRUE)) {
        DeleteObject(region);
      }
    }
  }

  if (kind == Kind::Overlay) {
    SetLayeredWindowAttributes(hwnd_, 0, 255, LWA_ALPHA);
    MARGINS margins{-1};
    DwmExtendFrameIntoClientArea(hwnd_, &margins);
    SetWindowPos(hwnd_, HWND_TOPMOST, x, y, width, height, SWP_NOACTIVATE);
  }

  return EnsureView();
}

bool NativeLynxWindow::EnsureView() {
  if (lynx_view_) return true;
  if (!hwnd_) return false;
  RECT client{};
  if (!GetClientRect(hwnd_, &client)) return false;
  const int width = client.right - client.left;
  const int height = client.bottom - client.top;
  const float scale = static_cast<float>(GetDpiForWindow(hwnd_)) / 96.0f;
  lynx::pub::LynxView::Builder builder;
  builder.SetScreenSize(width, height, scale).SetFrame(0, 0, width, height).SetParent(hwnd_);
  lynx_view_ = builder.Build();
  if (!lynx_view_) return false;

  lynx_hwnd_ = reinterpret_cast<HWND>(lynx_view_->GetNativeWindow());
  if (!lynx_hwnd_ || !IsWindow(lynx_hwnd_)) {
    ReleaseView();
    return false;
  }
  if (!SetWindowSubclass(
          lynx_hwnd_,
          &NativeLynxWindow::LynxWindowProc,
          kLynxSubclassId,
          reinterpret_cast<DWORD_PTR>(this))) {
    ReleaseView();
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

void NativeLynxWindow::SetInteractiveRegion(const std::vector<RECT>& rectangles) {
  if (!hwnd_ || kind_ != Kind::Overlay) return;

  RECT client{};
  if (!GetClientRect(hwnd_, &client)) return;
  const int client_width = client.right - client.left;
  const int client_height = client.bottom - client.top;
  const auto same_rectangles = [&]() {
    if (!interactive_region_initialized_ || interactive_region_width_ != client_width ||
        interactive_region_height_ != client_height) {
      return false;
    }
    if (interactive_region_rects_.size() != rectangles.size()) return false;
    for (size_t index = 0; index < rectangles.size(); ++index) {
      const RECT& current = interactive_region_rects_[index];
      const RECT& next = rectangles[index];
      if (current.left != next.left || current.top != next.top || current.right != next.right ||
          current.bottom != next.bottom) {
        return false;
      }
    }
    return true;
  };
  if (same_rectangles()) return;

  HRGN region = CreateRectRgn(0, 0, 0, 0);
  if (!region) return;

  for (const RECT& source : rectangles) {
    RECT clipped{
        std::max(client.left, std::min(source.left, client.right)),
        std::max(client.top, std::min(source.top, client.bottom)),
        std::max(client.left, std::min(source.right, client.right)),
        std::max(client.top, std::min(source.bottom, client.bottom)),
    };
    if (clipped.right <= clipped.left || clipped.bottom <= clipped.top) continue;

    HRGN part = CreateRectRgn(clipped.left, clipped.top, clipped.right, clipped.bottom);
    if (!part) continue;
    const int combine_result = CombineRgn(region, region, part, RGN_OR);
    DeleteObject(part);
    if (combine_result == ERROR) {
      DeleteObject(region);
      return;
    }
  }

  if (!SetWindowRgn(hwnd_, region, TRUE)) {
    DeleteObject(region);
    return;
  }
  interactive_region_rects_ = rectangles;
  interactive_region_initialized_ = true;
  interactive_region_width_ = client_width;
  interactive_region_height_ = client_height;
}

void NativeLynxWindow::ReleaseView() {
  if (lynx_hwnd_ && IsWindow(lynx_hwnd_)) {
    RemoveWindowSubclass(lynx_hwnd_, &NativeLynxWindow::LynxWindowProc, kLynxSubclassId);
  }
  lynx_hwnd_ = nullptr;
  lynx_view_ = {};
  dragging_ = false;
}

void NativeLynxWindow::Destroy() {
  ReleaseView();
  interactive_region_rects_.clear();
  interactive_region_initialized_ = false;
  interactive_region_width_ = 0;
  interactive_region_height_ = 0;
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
      case WM_LBUTTONUP:
        if (click_hook_) {
          POINT point{GET_X_LPARAM(l_param), GET_Y_LPARAM(l_param)};
          if (click_hook_(hwnd_, point)) return 0;
        }
        break;
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

bool NativeLynxWindow::ToParentClientPointFromScreen(LPARAM l_param, POINT* point) const {
  if (!point || !hwnd_) return false;
  point->x = GET_X_LPARAM(l_param);
  point->y = GET_Y_LPARAM(l_param);
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
    HWND hwnd, UINT message, WPARAM w_param, LPARAM l_param) {
  if (kind_ == Kind::Panel) {
    if (message == WM_LBUTTONDOWN || message == WM_LBUTTONDBLCLK) {
      POINT point{};
      if (ToParentClientPoint(hwnd, l_param, &point) && IsPanelTitleBarPoint(point)) {
        GetCursorPos(&drag_start_screen_);
        if (GetWindowRect(hwnd_, &drag_start_window_)) {
          dragging_ = true;
          SetCapture(hwnd);
        }
        return 0;
      }
    } else if (message == WM_MOUSEMOVE && dragging_ && (w_param & MK_LBUTTON)) {
      POINT point{};
      if (GetCursorPos(&point)) {
        const int x = drag_start_window_.left + point.x - drag_start_screen_.x;
        const int y = drag_start_window_.top + point.y - drag_start_screen_.y;
        SetWindowPos(
            hwnd_,
            nullptr,
            x,
            y,
            0,
            0,
            SWP_NOSIZE | SWP_NOZORDER | SWP_NOACTIVATE);
      }
      return 0;
    } else if (message == WM_LBUTTONUP && dragging_) {
      dragging_ = false;
      ReleaseCapture();
      return 0;
    } else if (message == WM_CAPTURECHANGED) {
      dragging_ = false;
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
      if (ToParentClientPointFromScreen(l_param, &point) && hit_test_hook_ &&
          hit_test_hook_(hwnd_, point)) {
        return HTCLIENT;
      }
      return HTTRANSPARENT;
    }
    if (message == WM_MOUSEACTIVATE) return MA_NOACTIVATE;
    if (message == WM_LBUTTONUP && click_hook_) {
      POINT point{};
      if (ToParentClientPoint(hwnd, l_param, &point) && click_hook_(hwnd_, point)) return 0;
    }
  }
  return std::nullopt;
}

#endif
