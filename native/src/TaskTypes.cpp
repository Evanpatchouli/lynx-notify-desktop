#include "TaskTypes.h"

#include <algorithm>

namespace {

const mini_json::Value* Find(const mini_json::Value& value, const char* key) {
  return value.Find(key);
}

std::string String(const mini_json::Value& value, const char* key, const std::string& fallback = {}) {
  const auto* found = Find(value, key);
  return found ? found->AsString(fallback) : fallback;
}

bool Bool(const mini_json::Value& value, const char* key, bool fallback = false) {
  const auto* found = Find(value, key);
  return found ? found->AsBool(fallback) : fallback;
}

double Number(const mini_json::Value& value, const char* key, double fallback = 0) {
  const auto* found = Find(value, key);
  return found ? found->AsNumber(fallback) : fallback;
}

int64_t Int64(const mini_json::Value& value, const char* key, int64_t fallback = 0) {
  const auto* found = Find(value, key);
  return found ? found->AsInt64(fallback) : fallback;
}

int Integer(const mini_json::Value& value, const char* key, int fallback = 0) {
  return static_cast<int>(Int64(value, key, fallback));
}

}  // namespace

mini_json::Value ToJson(const CardSettings& settings) {
  mini_json::Value::Object object;
  object["position"] = settings.position;
  object["style"] = settings.style;
  object["opacity"] = settings.opacity;
  object["durationSec"] = settings.duration_sec;
  object["gap"] = settings.gap;
  object["cardWidth"] = settings.card_width;
  return object;
}

mini_json::Value ToJson(const NotificationTask& task) {
  mini_json::Value::Object object;
  object["id"] = task.id;
  object["name"] = task.name;
  object["type"] = task.type;
  object["enabled"] = task.enabled;
  object["titleTemplate"] = task.title_template;
  object["bodyTemplate"] = task.body_template;
  object["createdAtMs"] = static_cast<double>(task.created_at_ms);
  object["lastRunAtMs"] = static_cast<double>(task.last_run_at_ms);
  object["nextRunAtMs"] = static_cast<double>(task.next_run_at_ms);
  object["runCount"] = task.run_count;

  mini_json::Value::Object variables;
  for (const auto& [key, value] : task.variables) variables[key] = value;
  object["variables"] = std::move(variables);

  mini_json::Value::Object once;
  once["atMs"] = static_cast<double>(task.once.at_ms);
  object["once"] = std::move(once);

  mini_json::Value::Object interval;
  interval["mode"] = task.interval.mode;
  interval["fixedSec"] = task.interval.fixed_sec;
  interval["expression"] = task.interval.expression;
  interval["startAtMs"] = static_cast<double>(task.interval.start_at_ms);
  interval["endAtMs"] = static_cast<double>(task.interval.end_at_ms);
  interval["maxRuns"] = task.interval.max_runs;
  object["interval"] = std::move(interval);

  mini_json::Value::Object schedule;
  schedule["mode"] = task.schedule.mode;
  schedule["hour"] = task.schedule.hour;
  schedule["minute"] = task.schedule.minute;
  mini_json::Value::Array weekdays;
  for (int day : task.schedule.weekdays) weekdays.emplace_back(day);
  schedule["weekdays"] = std::move(weekdays);
  object["schedule"] = std::move(schedule);

  return object;
}

mini_json::Value ToJson(const ActiveNotification& card) {
  mini_json::Value::Object object;
  object["id"] = card.id;
  object["taskId"] = card.task_id;
  object["title"] = card.title;
  object["body"] = card.body;
  object["createdAtMs"] = static_cast<double>(card.created_at_ms);
  object["expiresAtMs"] = static_cast<double>(card.expires_at_ms);
  return object;
}

CardSettings CardSettingsFromJson(const mini_json::Value& json, const CardSettings& fallback) {
  CardSettings settings = fallback;
  settings.position = String(json, "position", settings.position);
  settings.style = String(json, "style", settings.style);
  settings.opacity = std::clamp(Number(json, "opacity", settings.opacity), 0.3, 1.0);
  settings.duration_sec = std::clamp(Integer(json, "durationSec", settings.duration_sec), 2, 60);
  settings.gap = std::clamp(Integer(json, "gap", settings.gap), 0, 48);
  settings.card_width = std::clamp(Integer(json, "cardWidth", settings.card_width), 240, 520);
  return settings;
}

NotificationTask TaskFromJson(const mini_json::Value& json) {
  NotificationTask task;
  task.id = String(json, "id");
  task.name = String(json, "name", "新的通知");
  task.type = String(json, "type", "once");
  task.enabled = Bool(json, "enabled", true);
  task.title_template = String(json, "titleTemplate", "提醒");
  task.body_template = String(json, "bodyTemplate", "现在是 {{time}}");
  task.created_at_ms = Int64(json, "createdAtMs");
  task.last_run_at_ms = Int64(json, "lastRunAtMs");
  task.next_run_at_ms = Int64(json, "nextRunAtMs");
  task.run_count = std::max(0, Integer(json, "runCount"));

  if (const auto* variables = Find(json, "variables"); variables && variables->IsObject()) {
    for (const auto& [key, value] : variables->AsObject()) {
      if (value.IsString()) task.variables[key] = value.AsString();
    }
  }

  if (const auto* once = Find(json, "once"); once && once->IsObject()) {
    task.once.at_ms = Int64(*once, "atMs");
  }

  if (const auto* interval = Find(json, "interval"); interval && interval->IsObject()) {
    task.interval.mode = String(*interval, "mode", "fixed");
    task.interval.fixed_sec = std::max(0.1, Number(*interval, "fixedSec", 3600));
    task.interval.expression = String(*interval, "expression", "60");
    task.interval.start_at_ms = Int64(*interval, "startAtMs");
    task.interval.end_at_ms = Int64(*interval, "endAtMs");
    task.interval.max_runs = std::max(0, Integer(*interval, "maxRuns"));
  }

  if (const auto* schedule = Find(json, "schedule"); schedule && schedule->IsObject()) {
    task.schedule.mode = String(*schedule, "mode", "daily");
    task.schedule.hour = std::clamp(Integer(*schedule, "hour", 13), 0, 23);
    task.schedule.minute = std::clamp(Integer(*schedule, "minute", 0), 0, 59);
    if (const auto* days = Find(*schedule, "weekdays"); days && days->IsArray()) {
      for (const auto& day : days->AsArray()) {
        if (day.IsNumber()) {
          const int value = static_cast<int>(day.AsInt64());
          if (value >= 0 && value <= 6 &&
              std::find(task.schedule.weekdays.begin(), task.schedule.weekdays.end(), value) == task.schedule.weekdays.end()) {
            task.schedule.weekdays.push_back(value);
          }
        }
      }
    }
  }

  if (task.type != "once" && task.type != "interval" && task.type != "schedule") task.type = "once";
  if (task.interval.mode != "fixed" && task.interval.mode != "expression") task.interval.mode = "fixed";
  if (task.schedule.mode != "daily" && task.schedule.mode != "weekly") task.schedule.mode = "daily";
  return task;
}
