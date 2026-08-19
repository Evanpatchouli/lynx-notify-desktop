#pragma once

#include <cstdint>
#include <map>
#include <string>

namespace template_renderer {

std::string Render(
    const std::string& source,
    const std::map<std::string, std::string>& custom,
    const std::string& task_name,
    int run,
    int64_t now_ms);

}  // namespace template_renderer
