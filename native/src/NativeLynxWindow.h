#pragma once

#ifdef _WIN32

#include <windows.h>

#include "lynx_view.h"

#include <filesystem>
#include <functional>
#include <memory>
#include <optional>
#include <utility>
#include <vector>

class NativeLynxWindow {
 public:
  enum class Kind { Panel, Overlay };
  using MessageHook = std::function<std::optional<LRESULT>(HWND, UINT, WPARAM, LPARAM)>;
  using HitTestHook = std::function<bool(HWND, POINT)>;
  using ClickHook = std::function<bool(HWND, POINT)>;
  using LynxViewPtr = decltype(std::declval<lynx::pub::LynxView::Builder>().Build());

  NativeLynxWindow() = default;
  ~NativeLynxWindow();

  NativeLynxWindow(const NativeLynxWindow&) = delete;
  NativeLynxWindow& operator=(const NativeLynxWindow&) = delete;

  bool Create(
      HINSTANCE instance,
      Kind kind,
      int x,
      int y,
      int width,
      int height,
      MessageHook hook = {},
      HitTestHook hit_test = {},
      ClickHook click = {});
  bool LoadBundle(const std::filesystem::path& bundle_path);
  bool EnsureView();
  void ReleaseView();
  bool HasView() const { return lynx_view_ != nullptr; }
  void Show(int command = SW_SHOWNORMAL);
  void Hide();
  void Destroy();

  // Restrict overlay hit testing and painting to the supplied client regions.
  void SetInteractiveRegion(const std::vector<RECT>& rectangles);

  HWND hwnd() const { return hwnd_; }
  Kind kind() const { return kind_; }

 private:
  static constexpr wchar_t kClassName[] = L"LynxNotifyHostWindow";
  static constexpr UINT_PTR kLynxSubclassId = 1;
  static LRESULT CALLBACK WindowProc(HWND hwnd, UINT message, WPARAM w_param, LPARAM l_param);
  static LRESULT CALLBACK LynxWindowProc(
      HWND hwnd,
      UINT message,
      WPARAM w_param,
      LPARAM l_param,
      UINT_PTR subclass_id,
      DWORD_PTR ref_data);
  static bool EnsureClass(HINSTANCE instance);
  LRESULT HandleMessage(UINT message, WPARAM w_param, LPARAM l_param);
  std::optional<LRESULT> HandleLynxMessage(HWND hwnd, UINT message, WPARAM w_param, LPARAM l_param);
  bool IsPanelTitleBarPoint(POINT point) const;
  bool ToParentClientPoint(HWND child, LPARAM l_param, POINT* point) const;
  bool ToParentClientPointFromScreen(LPARAM l_param, POINT* point) const;

  HWND hwnd_ = nullptr;
  HWND lynx_hwnd_ = nullptr;
  bool dragging_ = false;
  POINT drag_start_screen_{};
  RECT drag_start_window_{};
  Kind kind_ = Kind::Panel;
  MessageHook message_hook_;
  HitTestHook hit_test_hook_;
  ClickHook click_hook_;
  std::vector<RECT> interactive_region_rects_;
  bool interactive_region_initialized_ = false;
  int interactive_region_width_ = 0;
  int interactive_region_height_ = 0;
  LynxViewPtr lynx_view_{};
};

#endif
