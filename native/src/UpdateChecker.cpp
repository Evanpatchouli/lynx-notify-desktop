#include "UpdateChecker.h"

#include "MiniJson.h"
#include "TimeUtils.h"

#include <array>
#include <charconv>
#include <optional>
#include <string_view>
#include <utility>

namespace {

using Version = std::array<unsigned, 3>;

std::optional<Version> StableVersion(std::string_view text) {
  if (!text.empty() && text.front() == 'v') text.remove_prefix(1);
  Version parts{};
  for (size_t index = 0; index < parts.size(); ++index) {
    const auto dot = text.find('.');
    const auto digits = text.substr(0, dot);
    if (digits.empty() || (digits.size() > 1 && digits.front() == '0')) return {};
    const auto end = digits.data() + digits.size();
    const auto result = std::from_chars(digits.data(), end, parts[index]);
    if (result.ec != std::errc{} || result.ptr != end) return {};
    if ((dot == text.npos) != (index + 1 == parts.size())) return {};
    if (dot != text.npos) text.remove_prefix(dot + 1);
  }
  return parts;
}

}  // namespace

UpdateState EvaluateRelease(const std::string& current_version, const ReleaseResponse& response) {
  if (response.status == 404) return {"no-release", {}, "项目暂未发布正式版本"};
  if (response.status == 403 || response.status == 429) return {"error", {}, "GitHub 暂时限制了请求，请稍后重试"};
  if (!response.status) return {"error", {}, "无法连接 GitHub，请检查网络后重试"};
  if (response.status != 200) return {"error", {}, "检查更新失败（HTTP " + std::to_string(response.status) + "）"};
  try {
    const auto release = mini_json::Parse(response.body);
    if (release.At("draft").AsBool() || release.At("prerelease").AsBool())
      return {"no-release", {}, "没有可用的正式版本"};
    const auto tag = release.At("tag_name").AsString();
    const auto latest = StableVersion(tag);
    const auto current = StableVersion(current_version);
    if (latest && current) {
      const auto version = tag.front() == 'v' ? tag : "v" + tag;
      if (*latest > *current) return {"available", version, "发现新版本 " + version};
      return {"current", version, "当前已是最新版本"};
    }
  } catch (const std::exception&) {
  }
  return {"error", {}, "GitHub 返回了无效的版本信息"};
}

UpdateChecker::UpdateChecker(std::string current_version, Fetch fetch, Notify notify, std::chrono::milliseconds interval)
    : current_version_(std::move(current_version)), fetch_(std::move(fetch)), notify_(std::move(notify)), interval_(interval) {}

UpdateChecker::~UpdateChecker() { Stop(); }

void UpdateChecker::Start() {
  std::lock_guard<std::mutex> lock(mutex_);
  if (worker_.joinable()) return;
  stopping_ = false;
  worker_ = std::thread(&UpdateChecker::Run, this);
}

void UpdateChecker::Stop() {
  {
    std::lock_guard<std::mutex> lock(mutex_);
    stopping_ = true;
  }
  wake_.notify_one();
  if (worker_.joinable()) worker_.join();
}

void UpdateChecker::CheckNow() {
  std::lock_guard<std::mutex> lock(mutex_);
  if (stopping_ || state_.status == "checking") return;
  pending_ = true;
  state_.status = "checking";
  wake_.notify_one();
}

UpdateState UpdateChecker::State() const {
  std::lock_guard<std::mutex> lock(mutex_);
  return state_;
}

void UpdateChecker::Run() {
  using Clock = std::chrono::steady_clock;
  auto next_auto = Clock::now();
  std::string notified_version;
  std::unique_lock<std::mutex> lock(mutex_);
  while (!stopping_) {
    wake_.wait_until(lock, next_auto, [this] { return stopping_ || pending_; });
    if (stopping_) break;
    const bool manual = pending_;
    pending_ = false;
    state_.status = "checking";
    lock.unlock();
    UpdateState result;
    try {
      result = EvaluateRelease(current_version_, fetch_());
    } catch (const std::exception&) {
      result = {"error", {}, "检查更新失败，请稍后重试"};
    }
    result.checked_at_ms = time_utils::NowMs();
    lock.lock();
    if (stopping_) break;
    if (Clock::now() >= next_auto) next_auto = Clock::now() + interval_;
    state_ = result;
    if (result.status == "available" && result.latest_version != notified_version) {
      notified_version = result.latest_version;
      if (!manual && notify_) {
        lock.unlock();
        notify_(result.latest_version);
        lock.lock();
      }
    }
  }
}
