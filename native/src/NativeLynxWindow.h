#pragma once

#ifdef _WIN32

#include <windows.h>

#include "lynx_view.h"

#include <filesystem>
#include <functional>
#include <memory>
#include <optional>
#include <utility>

class NativeLynxWindow {
 public:
  enum class Kind { Panel, Overlay };
  using MessageHook = std::function<std::optional<LRESULT>(HWND, UINT, WPARAM, LPARAM)>;
  using HitTestHook = std::function<bool(HWND, POINT)>;
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
      HitTestHook hit_test = {});
  bool LoadBundle(const std::filesystem::path& bundle_path);
  void Show(int command = SW_SHOWNORMAL);
  void Hide();
  void Destroy();

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

  HWND hwnd_ = nullptr;
  HWND lynx_hwnd_ = nullptr;
  Kind kind_ = Kind::Panel;
  MessageHook message_hook_;
  HitTestHook hit_test_hook_;
  LynxViewPtr lynx_view_{};
};

#endif
