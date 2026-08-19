#pragma once

#include "MiniJson.h"

#include <cstdint>
#include <map>
#include <string>
#include <vector>

struct CardSettings {
  std::string position = "top-right";
  std::string style = "glass";
  double opacity = 0.92;
  int duration_sec = 8;
  int gap = 12;
  int card_width = 340;
};

struct OnceConfig {
  int64_t at_ms = 0;
};

struct IntervalConfig {
  std::string mode = "fixed";
  double fixed_sec = 3600;
  std::string expression = "60";
  int64_t start_at_ms = 0;
  int64_t end_at_ms = 0;
  int max_runs = 0;
};

struct ScheduleConfig {
  std::string mode = "daily";
  int hour = 13;
  int minute = 0;
  std::vector<int> weekdays;
};

struct NotificationTask {
  std::string id;
  std::string name;
  std::string type = "once";
  bool enabled = true;
  std::string title_template = "提醒";
  std::string body_template = "现在是 {{time}}";
  std::map<std::string, std::string> variables;
  int64_t created_at_ms = 0;
  int64_t last_run_at_ms = 0;
  int64_t next_run_at_ms = 0;
  int run_count = 0;
  OnceConfig once;
  IntervalConfig interval;
  ScheduleConfig schedule;
};

struct ActiveNotification {
  std::string id;
  std::string task_id;
  std::string title;
  std::string body;
  int64_t created_at_ms = 0;
  int64_t expires_at_ms = 0;
};

mini_json::Value ToJson(const CardSettings& settings);
mini_json::Value ToJson(const NotificationTask& task);
mini_json::Value ToJson(const ActiveNotification& card);
CardSettings CardSettingsFromJson(const mini_json::Value& json, const CardSettings& fallback = {});
NotificationTask TaskFromJson(const mini_json::Value& json);
