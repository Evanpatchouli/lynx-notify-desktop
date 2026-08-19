#pragma once

#include <filesystem>
#include <string>

namespace storage {

std::filesystem::path DefaultStatePath();
bool ReadText(const std::filesystem::path& path, std::string* output);
bool WriteTextAtomic(const std::filesystem::path& path, const std::string& text);

}  // namespace storage
