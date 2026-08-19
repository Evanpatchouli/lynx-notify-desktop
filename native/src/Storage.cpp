#include "Storage.h"

#include <fstream>

#ifdef _WIN32
#include <ShlObj.h>
#include <windows.h>
#endif

namespace storage {

std::filesystem::path DefaultStatePath() {
#ifdef _WIN32
  PWSTR raw = nullptr;
  if (SUCCEEDED(SHGetKnownFolderPath(FOLDERID_LocalAppData, KF_FLAG_DEFAULT, nullptr, &raw)) && raw) {
    std::filesystem::path path(raw);
    CoTaskMemFree(raw);
    return path / L"LynxNotify" / L"state.json";
  }
  if (raw) CoTaskMemFree(raw);
#endif
  return std::filesystem::current_path() / "state.json";
}

bool ReadText(const std::filesystem::path& path, std::string* output) {
  if (!output) return false;
  std::ifstream input(path, std::ios::binary);
  if (!input) return false;
  output->assign(std::istreambuf_iterator<char>(input), std::istreambuf_iterator<char>());
  return true;
}

bool WriteTextAtomic(const std::filesystem::path& path, const std::string& text) {
  std::error_code ec;
  std::filesystem::create_directories(path.parent_path(), ec);
  const auto temporary = path.string() + ".tmp";
  {
    std::ofstream output(temporary, std::ios::binary | std::ios::trunc);
    if (!output) return false;
    output.write(text.data(), static_cast<std::streamsize>(text.size()));
    output.flush();
    if (!output.good()) return false;
  }
  std::filesystem::remove(path, ec);
  ec.clear();
  std::filesystem::rename(temporary, path, ec);
  if (ec) {
    std::filesystem::remove(temporary, ec);
    return false;
  }
  return true;
}

}  // namespace storage
