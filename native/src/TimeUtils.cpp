#include "TimeUtils.h"

#include <chrono>
#include <ctime>
#include <iomanip>
#include <sstream>

namespace time_utils {

int64_t NowMs() {
  return std::chrono::duration_cast<std::chrono::milliseconds>(
             std::chrono::system_clock::now().time_since_epoch())
      .count();
}

static std::tm LocalTm(std::time_t time) {
  std::tm value{};
#ifdef _WIN32
  localtime_s(&value, &time);
#else
  localtime_r(&time, &value);
#endif
  return value;
}

std::string FormatLocal(int64_t ms, const char* format) {
  const std::time_t seconds = static_cast<std::time_t>(ms / 1000);
  const std::tm tm = LocalTm(seconds);
  std::ostringstream out;
  out << std::put_time(&tm, format);
  return out.str();
}

int64_t NextScheduledTime(int64_t after_ms, int hour, int minute, const std::vector<int>& weekdays, bool daily) {
  const std::time_t after_seconds = static_cast<std::time_t>(after_ms / 1000);
  const std::tm base = LocalTm(after_seconds);

  auto weekday_allowed = [&](int day) {
    if (daily) return true;
    for (int configured : weekdays) {
      if (configured == day) return true;
    }
    return false;
  };

  for (int offset = 0; offset <= 8; ++offset) {
    std::tm candidate = base;
    candidate.tm_mday += offset;
    candidate.tm_hour = hour;
    candidate.tm_min = minute;
    candidate.tm_sec = 0;
    candidate.tm_isdst = -1;
    const std::time_t value = std::mktime(&candidate);
    if (value == static_cast<std::time_t>(-1)) continue;
    const std::tm normalized = LocalTm(value);
    const int64_t candidate_ms = static_cast<int64_t>(value) * 1000;
    if (candidate_ms > after_ms && weekday_allowed(normalized.tm_wday)) return candidate_ms;
  }
  return 0;
}

}  // namespace time_utils
