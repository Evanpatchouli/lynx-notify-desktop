#include "AppVersion.h"
#include "GitHubRelease.h"

#include <atomic>
#include <cassert>
#include <chrono>
#include <condition_variable>
#include <iostream>

namespace {
using namespace std::chrono_literals;

ReleaseResponse Release(const std::string& tag) {
  return {200, R"({"draft":false,"prerelease":false,"tag_name":")" + tag + R"("})"};
}

template <typename Predicate>
void WaitFor(Predicate predicate) {
  const auto timeout = std::chrono::steady_clock::now() + 3s;
  while (!predicate() && std::chrono::steady_clock::now() < timeout) std::this_thread::sleep_for(2ms);
  assert(predicate());
}

void CheckWorker() {
  std::mutex mutex;
  std::condition_variable wake;
  bool finish_first = false;
  std::atomic<unsigned> checks{0}, notices{0};
  UpdateChecker checker("1.0.0", [&] {
    if (++checks == 1) {
      std::unique_lock<std::mutex> lock(mutex);
      wake.wait(lock, [&] { return finish_first; });
    }
    return Release("v1.1.0");
  }, [&](const std::string& version) {
    assert(version == "v1.1.0");
    ++notices;
  }, 300ms);

  checker.Start();
  checker.Start();
  WaitFor([&] { return checks == 1; });
  assert(checker.State().status == "checking");
  checker.CheckNow();
  checker.CheckNow();
  {
    std::lock_guard<std::mutex> lock(mutex);
    finish_first = true;
  }
  wake.notify_one();
  WaitFor([&] { return notices == 1; });
  assert(checks == 1);
  assert(checker.State().checked_at_ms > 0);
  checker.CheckNow();
  WaitFor([&] { return checks >= 2 && checker.State().status == "available"; });
  WaitFor([&] { return checks >= 3; });
  assert(notices == 1);
  checker.Stop();
  const auto stopped_at = checks.load();
  checker.CheckNow();
  assert(checks == stopped_at);
}
}  // namespace

int main(int argc, char** argv) {
  if (argc == 2 && std::string(argv[1]) == "--live") {
    const auto state = EvaluateRelease(LYNX_NOTIFY_VERSION, FetchLatestRelease());
    std::cout << LYNX_NOTIFY_VERSION << " -> " << state.latest_version << ": " << state.status << '\n';
    return state.status == "current" || state.status == "available" ? 0 : 1;
  }
  static_assert(UpdateChecker::kCheckInterval == std::chrono::minutes(15));
  assert(EvaluateRelease("1.9.0", Release("v1.10.0")).status == "available");
  assert(EvaluateRelease("1.0.0", Release("v1.0.0")).status == "current");
  assert(EvaluateRelease("1.0.0", Release("v0.99.99")).status == "current");
  for (const auto& invalid : {"v", "1.2", "v1.02.0", "1.2.3.4", "1.2.3/other", "v1.1.0-rc.1"})
    assert(EvaluateRelease("1.0.0", Release(invalid)).status == "error");
  for (const auto& response : {ReleaseResponse{200, "invalid"}, ReleaseResponse{200, "{}"}, ReleaseResponse{0, {}},
                               ReleaseResponse{403, {}}, ReleaseResponse{429, {}}, ReleaseResponse{502, {}}})
    assert(EvaluateRelease("1.0.0", response).status == "error");
  assert(EvaluateRelease("1.0.0", {404, {}}).status == "no-release");
  assert(EvaluateRelease("1.0.0", {200, R"({"draft":true,"tag_name":"v2.0.0"})"}).status == "no-release");
  assert(EvaluateRelease("1.0.0", {200, R"({"draft":false,"prerelease":true,"tag_name":"v2.0.0-rc.1"})"}).status == "no-release");
  CheckWorker();
  std::cout << "update tests passed\n";
}
