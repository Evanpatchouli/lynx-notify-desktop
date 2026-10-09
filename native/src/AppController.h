#pragma once

#ifdef _WIN32

#include "NativeLynxWindow.h"
#include "TaskEngine.h"

#include <optional>
#include <atomic>
#include <windows.h>
#include <shellapi.h>

#include <filesystem>
#include <string>

class AppController {
 public:
  AppController();
  explicit AppController(std::filesystem::path state_path);
  ~AppController();

  int Run(HINSTANCE instance, int show_command);

  std::string GetStateJson() const { return engine_.GetStateJson(); }
  std::string GetOverlayStateJson() const { return engine_.GetOverlayStateJson(); }
  std::string UpsertTaskJson(const std::string& json) { return engine_.UpsertTaskJson(json); }
  bool DeleteTask(const std::string& id) { return engine_.DeleteTask(id); }
  bool SetTaskEnabled(const std::string& id, bool enabled) { return engine_.SetTaskEnabled(id, enabled); }
  bool UpdateSettingsJson(const std::string& json) { return engine_.UpdateSettingsJson(json); }
  bool PreviewNotificationJson(const std::string& json) { return engine_.PreviewNotificationJson(json); }
  bool DismissNotification(const std::string& id) { return engine_.DismissNotification(id); }
  void WindowCommand(const std::string& command);

 private:
  static constexpr UINT kTrayMessage = WM_APP + 41;
  static constexpr UINT kTrayId = 1;
  static constexpr UINT kWindowCommandMessage = WM_APP + 42;
  static constexpr UINT kReleasePanelViewMessage = WM_APP + 43;
  static constexpr UINT_PTR kOverlayTimerId = 1;
  enum class WindowAction { Drag, Minimize, Hide, Quit, Show };

  TaskEngine engine_;
  NativeLynxWindow panel_;
  NativeLynxWindow overlay_;
  NOTIFYICONDATAW tray_{};
  bool tray_added_ = false;
  HINSTANCE instance_ = nullptr;
  std::atomic<bool> panel_has_draft_{false};
  ULONGLONG overlay_empty_since_ = 0;

  std::filesystem::path ExecutableDir() const;
  bool CreateWindows(HINSTANCE instance, int show_command);
  bool EnsurePanelView();
  bool ShowPanel();
  bool CreateOverlay();
  void UpdateOverlay();
  void HidePanel();
  void HandleWindowAction(WindowAction action);
  void AddTrayIcon();
  void RemoveTrayIcon();
  std::optional<LRESULT> HandlePanelMessage(HWND hwnd, UINT message, WPARAM w_param, LPARAM l_param);
  void UpdateOverlayRegion();
  bool IsOverlayInteractivePoint(HWND hwnd, POINT point) const;
  bool DismissOverlayPoint(HWND hwnd, POINT point);
  void ShowTrayMenu(HWND hwnd);
};

#endif
