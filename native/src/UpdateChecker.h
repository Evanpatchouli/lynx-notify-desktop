#pragma once

#include <chrono>
#include <condition_variable>
#include <functional>
#include <mutex>
#include <string>
#include <thread>

struct ReleaseResponse {
  unsigned status = 0;
  std::string body;
};

struct UpdateState {
  std::string status = "idle";
  std::string latest_version;
  std::string message;
  long long checked_at_ms = 0;
};

UpdateState EvaluateRelease(const std::string& current_version, const ReleaseResponse& response);

class UpdateChecker {
 public:
  using Fetch = std::function<ReleaseResponse()>;
  using Notify = std::function<void(const std::string&)>;
  static constexpr auto kCheckInterval = std::chrono::minutes(15);

  UpdateChecker(std::string current_version, Fetch fetch, Notify notify,
                std::chrono::milliseconds interval = kCheckInterval);
  ~UpdateChecker();
  void Start();
  void Stop();
  void CheckNow();
  UpdateState State() const;

 private:
  void Run();
  std::string current_version_;
  Fetch fetch_;
  Notify notify_;
  std::chrono::milliseconds interval_;
  mutable std::mutex mutex_;
  std::condition_variable wake_;
  std::thread worker_;
  bool stopping_ = false;
  bool pending_ = false;
  UpdateState state_;
};
