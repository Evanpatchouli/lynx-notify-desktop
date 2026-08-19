#include "TemplateRenderer.h"

#include "TimeUtils.h"

#include <algorithm>
#include <cctype>

namespace template_renderer {

static std::string Trim(std::string value) {
  auto not_space = [](unsigned char c) { return !std::isspace(c); };
  value.erase(value.begin(), std::find_if(value.begin(), value.end(), not_space));
  value.erase(std::find_if(value.rbegin(), value.rend(), not_space).base(), value.end());
  return value;
}

std::string Render(
    const std::string& source,
    const std::map<std::string, std::string>& custom,
    const std::string& task_name,
    int run,
    int64_t now_ms) {
  std::map<std::string, std::string> values = custom;
  values["now"] = time_utils::FormatLocal(now_ms, "%Y-%m-%d %H:%M:%S");
  values["date"] = time_utils::FormatLocal(now_ms, "%Y-%m-%d");
  values["time"] = time_utils::FormatLocal(now_ms, "%H:%M:%S");
  values["task.name"] = task_name;
  values["run"] = std::to_string(run);

  std::string result;
  size_t cursor = 0;
  while (cursor < source.size()) {
    const size_t open = source.find("{{", cursor);
    if (open == std::string::npos) {
      result.append(source, cursor, std::string::npos);
      break;
    }
    result.append(source, cursor, open - cursor);
    const size_t close = source.find("}}", open + 2);
    if (close == std::string::npos) {
      result.append(source, open, std::string::npos);
      break;
    }
    const std::string key = Trim(source.substr(open + 2, close - open - 2));
    const auto found = values.find(key);
    if (found != values.end()) result += found->second;
    else result.append(source, open, close + 2 - open);
    cursor = close + 2;
  }
  return result;
}

}  // namespace template_renderer
