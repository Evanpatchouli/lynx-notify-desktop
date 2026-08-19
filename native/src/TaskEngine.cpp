#include "TaskEngine.h"

#include "ExpressionEvaluator.h"
#include "MiniJson.h"
#include "Storage.h"
#include "TemplateRenderer.h"
#include "TimeUtils.h"

#include <algorithm>
#include <chrono>
#include <cmath>
#include <unordered_map>

namespace {

constexpr int kNotificationCardHeight = 104;
constexpr int kNotificationStackOffset = 16;

}  // namespace

TaskEngine::TaskEngine(std::filesystem::path state_path) : state_path_(std::move(state_path)) {}

TaskEngine::~TaskEngine() { Stop(); }

bool TaskEngine::Load() {
  std::lock_guard<std::mutex> lock(mutex_);
  std::string source;
  if (!storage::ReadText(state_path_, &source)) return true;
  try {
    const auto root = mini_json::Parse(source);
    if (const auto* settings = root.Find("settings")) settings_ = CardSettingsFromJson(*settings, settings_);
    tasks_.clear();
    if (const auto* tasks = root.Find("tasks"); tasks && tasks->IsArray()) {
      for (const auto& json : tasks->AsArray()) {
        if (json.IsObject()) tasks_.push_back(TaskFromJson(json));
      }
    }
    const int64_t now = time_utils::NowMs();
    for (auto& task : tasks_) ResetNextRunLocked(task, now, false);
    return true;
  } catch (...) {
    return false;
  }
}

void TaskEngine::Start() {
  bool expected = false;
  if (!running_.compare_exchange_strong(expected, true)) return;
  worker_ = std::thread([this] { WorkerLoop(); });
}

void TaskEngine::Stop() {
  if (!running_.exchange(false)) return;
  if (worker_.joinable()) worker_.join();
}

std::string TaskEngine::GetStateJson() const {
  std::lock_guard<std::mutex> lock(mutex_);
  return mini_json::Dump(BuildStateJsonLocked());
}

std::string TaskEngine::GetOverlayStateJson() const {
  std::lock_guard<std::mutex> lock(mutex_);
  mini_json::Value::Object root;
  root["settings"] = ToJson(settings_);
  mini_json::Value::Array cards;
  cards.reserve(cards_.size());
  for (const auto& card : cards_) cards.push_back(ToJson(card));
  root["cards"] = std::move(cards);
  return mini_json::Dump(root);
}

std::string TaskEngine::UpsertTaskJson(const std::string& task_json) {
  std::lock_guard<std::mutex> lock(mutex_);
  try {
    NotificationTask incoming = TaskFromJson(mini_json::Parse(task_json));
    const int64_t now = time_utils::NowMs();
    if (incoming.id.empty()) incoming.id = NewIdLocked("task", now);
    if (incoming.created_at_ms <= 0) incoming.created_at_ms = now;

    auto found = std::find_if(tasks_.begin(), tasks_.end(), [&](const auto& item) { return item.id == incoming.id; });
    if (found != tasks_.end()) {
      incoming.run_count = std::max(0, incoming.run_count);
      ResetNextRunLocked(incoming, now, true);
      *found = incoming;
    } else {
      incoming.run_count = 0;
      incoming.last_run_at_ms = 0;
      ResetNextRunLocked(incoming, now, true);
      tasks_.insert(tasks_.begin(), incoming);
    }
    SaveLocked();
    return mini_json::Dump(ToJson(incoming));
  } catch (...) {
    return "{}";
  }
}

bool TaskEngine::DeleteTask(const std::string& id) {
  std::lock_guard<std::mutex> lock(mutex_);
  const auto before = tasks_.size();
  tasks_.erase(std::remove_if(tasks_.begin(), tasks_.end(), [&](const auto& task) { return task.id == id; }), tasks_.end());
  if (tasks_.size() == before) return false;
  SaveLocked();
  return true;
}

bool TaskEngine::SetTaskEnabled(const std::string& id, bool enabled) {
  std::lock_guard<std::mutex> lock(mutex_);
  auto found = std::find_if(tasks_.begin(), tasks_.end(), [&](const auto& task) { return task.id == id; });
  if (found == tasks_.end()) return false;
  found->enabled = enabled;
  if (enabled) ResetNextRunLocked(*found, time_utils::NowMs(), false);
  SaveLocked();
  return true;
}

bool TaskEngine::UpdateSettingsJson(const std::string& settings_json) {
  std::lock_guard<std::mutex> lock(mutex_);
  try {
    settings_ = CardSettingsFromJson(mini_json::Parse(settings_json), settings_);
    SaveLocked();
    return true;
  } catch (...) {
    return false;
  }
}

bool TaskEngine::PreviewNotificationJson(const std::string& payload_json) {
  std::lock_guard<std::mutex> lock(mutex_);
  try {
    const auto json = mini_json::Parse(payload_json);
    PublishPreviewLocked(GetString(json, "title", "通知卡片预览"), GetString(json, "body", "Lynx Notify"), time_utils::NowMs());
    return true;
  } catch (...) {
    return false;
  }
}

bool TaskEngine::DismissNotification(const std::string& id) {
  std::lock_guard<std::mutex> lock(mutex_);
  const auto before = cards_.size();
  cards_.erase(std::remove_if(cards_.begin(), cards_.end(), [&](const auto& card) { return card.id == id; }), cards_.end());
  return cards_.size() != before;
}

bool TaskEngine::DismissNotificationAtPoint(int x, int y, int width, int height, double scale) {
  std::lock_guard<std::mutex> lock(mutex_);
  const int index = FindNotificationCloseIndexLocked(x, y, width, height, scale);
  if (index < 0) return false;
  cards_.erase(cards_.begin() + index);
  return true;
}

bool TaskEngine::IsNotificationClosePoint(int x, int y, int width, int height, double scale) const {
  std::lock_guard<std::mutex> lock(mutex_);
  return FindNotificationCloseIndexLocked(x, y, width, height, scale) >= 0;
}

std::vector<NotificationCardRect> TaskEngine::GetNotificationCardRects(
    int width, int height, double scale) const {
  std::lock_guard<std::mutex> lock(mutex_);
  return BuildNotificationCardRectsLocked(width, height, scale);
}

std::vector<NotificationCardRect> TaskEngine::BuildNotificationCardRectsLocked(
    int width, int height, double scale) const {
  if (width <= 0 || height <= 0 || cards_.empty()) return {};

  scale = scale > 0 ? scale : 1.0;
  const auto pixels = [scale](double value) {
    return std::max(1, static_cast<int>(std::lround(value * scale)));
  };
  const int padding = pixels(26);
  const int card_height = pixels(kNotificationCardHeight);
  const int card_width = pixels(settings_.card_width);
  const int stack_offset = pixels(kNotificationStackOffset);
  const int stack_height = card_height + static_cast<int>(cards_.size() - 1) * stack_offset;
  const bool bottom = settings_.position.rfind("bottom-", 0) == 0;
  const bool right = settings_.position == "top-right" || settings_.position == "bottom-right";
  const bool center = settings_.position == "center";

  int card_left = padding;
  if (center) {
    card_left = (width - card_width) / 2;
  } else if (right) {
    card_left = width - padding - card_width;
  }

  std::vector<NotificationCardRect> rects;
  rects.reserve(cards_.size());
  for (size_t index = 0; index < cards_.size(); ++index) {
    int card_top = padding + static_cast<int>(index) * stack_offset;
    if (bottom) {
      card_top = height - padding - card_height - static_cast<int>(index) * stack_offset;
    } else if (center) {
      card_top = (height - stack_height) / 2 + static_cast<int>(index) * stack_offset;
    }
    rects.push_back({card_left, card_top, card_left + card_width, card_top + card_height});
  }
  return rects;
}

int TaskEngine::FindNotificationCloseIndexLocked(
    int x, int y, int width, int height, double scale) const {
  scale = scale > 0 ? scale : 1.0;
  const auto pixels = [scale](double value) {
    return std::max(1, static_cast<int>(std::lround(value * scale)));
  };
  const auto card_rects = BuildNotificationCardRectsLocked(width, height, scale);
  for (size_t index = 0; index < card_rects.size(); ++index) {
    const auto& card = card_rects[index];

    // Match the close button's top-right area while keeping the rest of the
    // virtual-screen overlay click-through.
    const int close_left = card.right - pixels(56);
    const int close_right = card.right - pixels(2);
    const int close_top = card.top + pixels(4);
    const int close_bottom = card.top + pixels(50);
    if (x >= close_left && x <= close_right && y >= close_top && y <= close_bottom) {
      return static_cast<int>(index);
    }
  }
  return -1;
}

void TaskEngine::WorkerLoop() {
  while (running_.load()) {
    const int64_t now = time_utils::NowMs();
    bool changed = false;
    {
      std::lock_guard<std::mutex> lock(mutex_);
      changed = TickLocked(now);
      if (changed) SaveLocked();
    }
    std::this_thread::sleep_for(std::chrono::milliseconds(120));
  }
}

bool TaskEngine::TickLocked(int64_t now_ms) {
  bool changed = false;
  const auto previous_size = cards_.size();
  cards_.erase(std::remove_if(cards_.begin(), cards_.end(), [&](const auto& card) {
                 return card.expires_at_ms > 0 && card.expires_at_ms <= now_ms;
               }),
               cards_.end());
  if (cards_.size() != previous_size) changed = true;

  for (auto& task : tasks_) {
    if (!task.enabled) continue;

    if (task.type == "interval") {
      if ((task.interval.max_runs > 0 && task.run_count >= task.interval.max_runs) ||
          (task.interval.end_at_ms > 0 && now_ms >= task.interval.end_at_ms)) {
        task.enabled = false;
        task.next_run_at_ms = 0;
        changed = true;
        continue;
      }
    }

    if (task.next_run_at_ms <= 0) {
      ResetNextRunLocked(task, now_ms, false);
      changed = true;
    }
    if (!task.enabled || task.next_run_at_ms <= 0 || now_ms < task.next_run_at_ms) continue;

    const int next_run_number = task.run_count + 1;
    const int64_t previous_run_ms = task.last_run_at_ms;
    PublishLocked(task, now_ms, next_run_number);
    task.run_count = next_run_number;
    task.last_run_at_ms = now_ms;
    changed = true;

    if (task.type == "once") {
      task.enabled = false;
      task.next_run_at_ms = 0;
      continue;
    }

    if (task.type == "interval") {
      if ((task.interval.max_runs > 0 && task.run_count >= task.interval.max_runs) ||
          (task.interval.end_at_ms > 0 && now_ms >= task.interval.end_at_ms)) {
        task.enabled = false;
        task.next_run_at_ms = 0;
        continue;
      }
      task.next_run_at_ms = ComputeNextIntervalMsLocked(task, now_ms, previous_run_ms);
      if (task.interval.end_at_ms > 0 && task.next_run_at_ms > task.interval.end_at_ms) {
        task.enabled = false;
        task.next_run_at_ms = 0;
      }
      continue;
    }

    const bool daily = task.schedule.mode == "daily";
    task.next_run_at_ms = time_utils::NextScheduledTime(now_ms + 500, task.schedule.hour, task.schedule.minute, task.schedule.weekdays, daily);
  }
  return changed;
}

void TaskEngine::PublishLocked(NotificationTask& task, int64_t now_ms, int run_number) {
  ActiveNotification card;
  card.id = NewIdLocked("card", now_ms);
  card.task_id = task.id;
  card.created_at_ms = now_ms;
  card.expires_at_ms = now_ms + static_cast<int64_t>(settings_.duration_sec) * 1000;
  card.title = template_renderer::Render(task.title_template, task.variables, task.name, run_number, now_ms);
  card.body = template_renderer::Render(task.body_template, task.variables, task.name, run_number, now_ms);
  cards_.insert(cards_.begin(), std::move(card));
  if (cards_.size() > 12) cards_.resize(12);
}

void TaskEngine::PublishPreviewLocked(const std::string& title, const std::string& body, int64_t now_ms) {
  ActiveNotification card;
  card.id = NewIdLocked("preview", now_ms);
  card.created_at_ms = now_ms;
  card.expires_at_ms = now_ms + static_cast<int64_t>(settings_.duration_sec) * 1000;
  card.title = title;
  card.body = body;
  cards_.insert(cards_.begin(), std::move(card));
  if (cards_.size() > 12) cards_.resize(12);
}

void TaskEngine::ResetNextRunLocked(NotificationTask& task, int64_t now_ms, bool reset_runtime) {
  if (reset_runtime) {
    task.next_run_at_ms = 0;
    if (task.type != "once") {
      task.run_count = 0;
      task.last_run_at_ms = 0;
    }
  }

  if (task.type == "once") {
    task.next_run_at_ms = task.once.at_ms;
    return;
  }

  if (task.type == "interval") {
    if (task.interval.max_runs > 0 && task.run_count >= task.interval.max_runs) {
      task.enabled = false;
      task.next_run_at_ms = 0;
      return;
    }
    if (task.interval.end_at_ms > 0 && now_ms >= task.interval.end_at_ms) {
      task.enabled = false;
      task.next_run_at_ms = 0;
      return;
    }
    if (reset_runtime || task.next_run_at_ms <= 0) {
      task.next_run_at_ms = task.interval.start_at_ms > 0 ? task.interval.start_at_ms : now_ms;
    }
    return;
  }

  const bool daily = task.schedule.mode == "daily";
  task.next_run_at_ms = time_utils::NextScheduledTime(now_ms - 1000, task.schedule.hour, task.schedule.minute, task.schedule.weekdays, daily);
}

int64_t TaskEngine::ComputeNextIntervalMsLocked(
    const NotificationTask& task, int64_t now_ms, int64_t previous_run_ms) const {
  double seconds = task.interval.fixed_sec;
  if (task.interval.mode == "expression") {
    const double last_ms = previous_run_ms > 0 ? static_cast<double>(now_ms - previous_run_ms)
                                               : std::max(100.0, task.interval.fixed_sec * 1000.0);
    std::unordered_map<std::string, double> variables = {
        {"run", static_cast<double>(task.run_count)},
        {"last", last_ms},
    };
    std::string error;
    const auto evaluated = ExpressionEvaluator::Evaluate(task.interval.expression, variables, &error);
    if (evaluated && std::isfinite(*evaluated)) seconds = *evaluated;
    else seconds = 60.0;
  }
  seconds = std::clamp(seconds, 0.1, 31'536'000.0);
  return now_ms + static_cast<int64_t>(std::llround(seconds * 1000.0));
}

std::string TaskEngine::NewIdLocked(const char* prefix, int64_t now_ms) {
  ++sequence_;
  return std::string(prefix) + "-" + std::to_string(now_ms) + "-" + std::to_string(sequence_);
}

void TaskEngine::SaveLocked() const {
  storage::WriteTextAtomic(state_path_, mini_json::Dump(BuildStateJsonLocked(), true, 2));
}

mini_json::Value TaskEngine::BuildStateJsonLocked() const {
  mini_json::Value::Object root;
  root["settings"] = ToJson(settings_);
  mini_json::Value::Array tasks;
  tasks.reserve(tasks_.size());
  for (const auto& task : tasks_) tasks.push_back(ToJson(task));
  root["tasks"] = std::move(tasks);
  return root;
}

std::string TaskEngine::GetString(const mini_json::Value& value, const char* key, const std::string& fallback) {
  if (const auto* found = value.Find(key)) return found->AsString(fallback);
  return fallback;
}
