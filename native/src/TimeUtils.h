#pragma once

#include <cstdint>
#include <string>
#include <vector>

namespace time_utils {

int64_t NowMs();
std::string FormatLocal(int64_t ms, const char* format);
int64_t NextScheduledTime(int64_t after_ms, int hour, int minute, const std::vector<int>& weekdays, bool daily);

}  // namespace time_utils
