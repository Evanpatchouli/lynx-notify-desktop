#pragma once

#include "TaskTypes.h"

#include <atomic>
#include <filesystem>
#include <mutex>
#include <string>
#include <thread>
#include <vector>

class TaskEngine {
 public:
  explicit TaskEngine(std::filesystem::path state_path);
  ~TaskEngine();

  bool Load();
  void Start();
  void Stop();

  std::string GetStateJson() const;
  std::string GetOverlayStateJson() const;
  std::string UpsertTaskJson(const std::string& task_json);
  bool DeleteTask(const std::string& id);
  bool SetTaskEnabled(const std::string& id, bool enabled);
  bool UpdateSettingsJson(const std::string& settings_json);
  bool PreviewNotificationJson(const std::string& payload_json);
  bool DismissNotification(const std::string& id);
  bool DismissNotificationAtPoint(int x, int y, int width, int height, double scale);
  bool IsNotificationClosePoint(int x, int y, int width, int height, double scale) const;

 private:
  std::filesystem::path state_path_;
  mutable std::mutex mutex_;
  CardSettings settings_;
  std::vector<NotificationTask> tasks_;
  std::vector<ActiveNotification> cards_;
  std::atomic<bool> running_{false};
  std::thread worker_;
  uint64_t sequence_ = 0;

  void WorkerLoop();
  bool TickLocked(int64_t now_ms);
  void PublishLocked(NotificationTask& task, int64_t now_ms, int run_number);
  void PublishPreviewLocked(const std::string& title, const std::string& body, int64_t now_ms);
  void ResetNextRunLocked(NotificationTask& task, int64_t now_ms, bool reset_runtime);
  int64_t ComputeNextIntervalMsLocked(const NotificationTask& task, int64_t now_ms, int64_t previous_run_ms) const;
  std::string NewIdLocked(const char* prefix, int64_t now_ms);
  void SaveLocked() const;
  mini_json::Value BuildStateJsonLocked() const;
  int FindNotificationCloseIndexLocked(int x, int y, int width, int height, double scale) const;
  static std::string GetString(const mini_json::Value& value, const char* key, const std::string& fallback = {});
};
