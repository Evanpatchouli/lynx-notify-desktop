#include "GitHubRelease.h"

#include "AppVersion.h"

#include <windows.h>
#include <shellapi.h>
#include <winhttp.h>

#include <array>
#include <memory>

namespace {

using HttpHandle = std::unique_ptr<void, decltype(&WinHttpCloseHandle)>;
constexpr wchar_t kLatestPath[] = L"/repos/Evanpatchouli/lynx-notify-desktop/releases/latest";
constexpr wchar_t kReleasePage[] = L"https://github.com/Evanpatchouli/lynx-notify-desktop/releases/latest";

}  // namespace

ReleaseResponse FetchLatestRelease() {
  const std::wstring agent = L"LynxNotify/" LYNX_NOTIFY_VERSION_W;
  HttpHandle session(WinHttpOpen(agent.c_str(), WINHTTP_ACCESS_TYPE_AUTOMATIC_PROXY, WINHTTP_NO_PROXY_NAME,
                                 WINHTTP_NO_PROXY_BYPASS, 0), WinHttpCloseHandle);
  if (!session || !WinHttpSetTimeouts(session.get(), 4000, 5000, 5000, 5000)) return {};
  HttpHandle connection(WinHttpConnect(session.get(), L"api.github.com", INTERNET_DEFAULT_HTTPS_PORT, 0), WinHttpCloseHandle);
  if (!connection) return {};
  HttpHandle request(WinHttpOpenRequest(connection.get(), L"GET", kLatestPath, nullptr, WINHTTP_NO_REFERER,
                                        WINHTTP_DEFAULT_ACCEPT_TYPES, WINHTTP_FLAG_SECURE), WinHttpCloseHandle);
  DWORD disabled = WINHTTP_DISABLE_REDIRECTS | WINHTTP_DISABLE_COOKIES;
  if (!request || !WinHttpSetOption(request.get(), WINHTTP_OPTION_DISABLE_FEATURE, &disabled, sizeof(disabled))) return {};
  constexpr wchar_t headers[] = L"Accept: application/vnd.github+json\r\nX-GitHub-Api-Version: 2022-11-28\r\nCache-Control: no-cache\r\n";
  if (!WinHttpSendRequest(request.get(), headers, DWORD(-1), WINHTTP_NO_REQUEST_DATA, 0, 0, 0) ||
      !WinHttpReceiveResponse(request.get(), nullptr)) return {};
  DWORD status = 0;
  DWORD size = sizeof(status);
  if (!WinHttpQueryHeaders(request.get(), WINHTTP_QUERY_STATUS_CODE | WINHTTP_QUERY_FLAG_NUMBER,
                           WINHTTP_HEADER_NAME_BY_INDEX, &status, &size, WINHTTP_NO_HEADER_INDEX)) return {};
  ReleaseResponse response{status, {}};
  if (status != 200) return response;
  std::array<char, 8192> buffer{};
  const auto deadline = GetTickCount64() + 10000;
  while (GetTickCount64() < deadline) {
    DWORD received = 0;
    if (!WinHttpReadData(request.get(), buffer.data(), static_cast<DWORD>(buffer.size()), &received)) return {};
    if (!received) return response;
    if (response.body.size() + received > 1024 * 1024) return {};
    response.body.append(buffer.data(), received);
  }
  return {};
}

bool OpenReleasePage() {
  return reinterpret_cast<INT_PTR>(ShellExecuteW(nullptr, L"open", kReleasePage, nullptr, nullptr, SW_SHOWNORMAL)) > 32;
}
