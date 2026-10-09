#include "ExpressionEvaluator.h"
#include "MiniJson.h"
#include "Storage.h"
#include "TaskEngine.h"
#include "TemplateRenderer.h"
#include "TimeUtils.h"

#include <cassert>
#include <chrono>
#include <filesystem>
#include <iostream>
#include <thread>
#include <unordered_map>

int main() {
  {
    const auto json = mini_json::Parse(R"({"name":"中文","ok":true,"n":12.5,"a":[1,2]})");
    assert(json.At("name").AsString() == "中文");
    assert(json.At("ok").AsBool());
    assert(json.At("a").AsArray().size() == 2);
    const auto roundtrip = mini_json::Parse(mini_json::Dump(json));
    assert(roundtrip.At("name").AsString() == "中文");
  }

  {
    std::unordered_map<std::string, double> vars{{"run", 3}, {"last", 30000}};
    std::string error;
    const auto value = ExpressionEvaluator::Evaluate("max(10, 60 - run * 5)", vars, &error);
    assert(value && *value == 45);
    const auto clamped = ExpressionEvaluator::Evaluate("clamp(last / 1000 * 2, 10, 50)", vars, &error);
    assert(clamped && *clamped == 50);
  }

  {
    std::map<std::string, std::string> custom{{"name", "葡萄"}};
    const auto rendered = template_renderer::Render("你好 {{name}}，第 {{run}} 次", custom, "测试", 4, time_utils::NowMs());
    assert(rendered.find("葡萄") != std::string::npos);
    assert(rendered.find("4") != std::string::npos);
  }

  {
    const auto path = std::filesystem::temp_directory_path() / "lynx-notify-core-test.json";
    std::error_code ec;
    std::filesystem::remove(path, ec);
    TaskEngine engine(path);
    assert(engine.Load());
    assert(!engine.HasActiveNotifications());
    const std::string task = R"({
      "id":"",
      "name":"test",
      "type":"interval",
      "enabled":true,
      "titleTemplate":"Run {{run}}",
      "bodyTemplate":"{{task.name}} @ {{time}}",
      "variables":{},
      "createdAtMs":0,
      "lastRunAtMs":0,
      "nextRunAtMs":0,
      "runCount":0,
      "once":{"atMs":0},
      "interval":{"mode":"fixed","fixedSec":1,"expression":"1","startAtMs":0,"endAtMs":0,"maxRuns":2},
      "schedule":{"mode":"daily","hour":13,"minute":0,"weekdays":[]}
    })";
    const auto saved = mini_json::Parse(engine.UpsertTaskJson(task));
    assert(!saved.At("id").AsString().empty());
    assert(engine.PreviewNotificationJson(R"({"title":"preview","body":"hello"})"));
    assert(engine.PreviewNotificationJson(R"({"title":"preview 2","body":"hello 2"})"));
    assert(engine.PreviewNotificationJson(R"({"title":"preview 3","body":"hello 3"})"));
    const auto overlay = mini_json::Parse(engine.GetOverlayStateJson());
    assert(engine.HasActiveNotifications());
    assert(overlay.At("cards").AsArray().size() == 3);
    const auto card_rects = engine.GetNotificationCardRects(1920, 1080, 1.0);
    assert(card_rects.size() == 3);
    assert(card_rects[0].left == 1554);
    assert(card_rects[0].top == 26);
    assert(card_rects[1].top == 42);
    assert(card_rects[2].top == 58);
    assert(card_rects[0].right == 1894);
    assert(card_rects[0].bottom == 130);
    for (const auto& card : overlay.At("cards").AsArray()) {
      assert(engine.DismissNotification(card.At("id").AsString()));
    }
    assert(!engine.HasActiveNotifications());
    std::filesystem::remove(path, ec);
  }

  {
    // Simulate reopening after several days with persisted interval tasks.
    const auto path = std::filesystem::temp_directory_path() / "lynx-notify-resume-test.json";
    const int64_t fixture_now = time_utils::NowMs();
    NotificationTask overdue;
    overdue.id = "overdue";
    overdue.type = "interval";
    overdue.interval.fixed_sec = 1800;
    overdue.run_count = 5;
    overdue.last_run_at_ms = fixture_now - 3 * 86'400'000LL;
    overdue.next_run_at_ms = overdue.last_run_at_ms + 1'800'000;

    auto future = overdue;
    future.id = "future";
    future.next_run_at_ms = fixture_now + 600'000;
    auto expression = overdue;
    expression.id = "expression";
    expression.interval.mode = "expression";
    expression.interval.expression = "max(10, 60 - run * 5)";
    auto exhausted = overdue;
    exhausted.id = "exhausted";
    exhausted.interval.max_runs = exhausted.run_count;
    auto expired = overdue;
    expired.id = "expired";
    expired.interval.end_at_ms = fixture_now - 1000;
    auto ending = overdue;
    ending.id = "ending";
    ending.interval.end_at_ms = fixture_now + 60'000;
    auto disabled = overdue;
    disabled.id = "disabled";
    disabled.enabled = false;
    auto old_start = overdue;
    old_start.id = "old-start";
    old_start.next_run_at_ms = 0;
    old_start.interval.start_at_ms = overdue.last_run_at_ms;
    auto missing_deadline = overdue;
    missing_deadline.id = "missing-deadline";
    missing_deadline.next_run_at_ms = 0;
    auto future_start = old_start;
    future_start.id = "future-start";
    future_start.interval.start_at_ms = future.next_run_at_ms;

    mini_json::Value::Object fixture;
    mini_json::Value::Array tasks;
    for (const auto& task : {overdue, future, expression, exhausted, expired, ending, disabled, old_start, missing_deadline, future_start}) {
      tasks.push_back(ToJson(task));
    }
    fixture["tasks"] = std::move(tasks);
    assert(storage::WriteTextAtomic(path, mini_json::Dump(fixture)));

    TaskEngine engine(path);
    const int64_t before_load = time_utils::NowMs();
    assert(engine.Load());
    const int64_t after_load = time_utils::NowMs();
    const auto state = mini_json::Parse(engine.GetStateJson());
    const auto find_task = [](const mini_json::Value& state, const std::string& id) {
      for (const auto& task : state.At("tasks").AsArray()) {
        if (task.At("id").AsString() == id) return TaskFromJson(task);
      }
      assert(false && "task not found");
      return NotificationTask{};
    };
    for (const auto& id : {"overdue", "expression", "old-start", "missing-deadline"}) {
      const auto task = find_task(state, id);
      const int64_t interval_ms = task.interval.mode == "expression" ? 35'000 : 1'800'000;
      assert(task.enabled);
      assert(task.next_run_at_ms >= before_load + interval_ms);
      assert(task.next_run_at_ms <= after_load + interval_ms);
      assert(task.run_count == overdue.run_count);
      assert(task.last_run_at_ms == overdue.last_run_at_ms);
    }
    assert(find_task(state, "future").next_run_at_ms == future.next_run_at_ms);
    assert(find_task(state, "future-start").next_run_at_ms == future_start.interval.start_at_ms);
    assert(!find_task(state, "disabled").enabled);
    assert(find_task(state, "disabled").next_run_at_ms == disabled.next_run_at_ms);
    for (const auto& id : {"exhausted", "expired", "ending"}) {
      const auto task = find_task(state, id);
      assert(!task.enabled);
      assert(task.next_run_at_ms == 0);
      assert(task.run_count == overdue.run_count);
    }

    // Re-enabling also skips a stale deadline without consuming a run.
    const int64_t before_enable = time_utils::NowMs();
    assert(engine.SetTaskEnabled("disabled", true));
    const int64_t after_enable = time_utils::NowMs();
    const auto enabled = find_task(mini_json::Parse(engine.GetStateJson()), "disabled");
    assert(enabled.enabled);
    assert(enabled.next_run_at_ms >= before_enable + 1'800'000);
    assert(enabled.next_run_at_ms <= after_enable + 1'800'000);
    assert(enabled.run_count == overdue.run_count);

    // Starting the actual scheduler must not publish any missed notification.
    engine.Start();
    std::this_thread::sleep_for(std::chrono::milliseconds(300));
    engine.Stop();
    assert(mini_json::Parse(engine.GetOverlayStateJson()).At("cards").AsArray().empty());
    const auto resumed = find_task(mini_json::Parse(engine.GetStateJson()), "overdue");
    assert(resumed.run_count == overdue.run_count);
    assert(resumed.last_run_at_ms == overdue.last_run_at_ms);

    // A newly saved task still starts immediately and fires normally.
    NotificationTask fresh;
    fresh.type = "interval";
    fresh.interval.max_runs = 1;
    const auto saved = TaskFromJson(mini_json::Parse(engine.UpsertTaskJson(mini_json::Dump(ToJson(fresh)))));
    engine.Start();
    const int64_t deadline = time_utils::NowMs() + 3000;
    while (time_utils::NowMs() < deadline &&
           mini_json::Parse(engine.GetOverlayStateJson()).At("cards").AsArray().empty()) {
      std::this_thread::sleep_for(std::chrono::milliseconds(10));
    }
    engine.Stop();
    const auto cards = mini_json::Parse(engine.GetOverlayStateJson()).At("cards").AsArray();
    assert(cards.size() == 1);
    assert(cards[0].At("taskId").AsString() == saved.id);
    const auto fired = find_task(mini_json::Parse(engine.GetStateJson()), saved.id);
    assert(fired.run_count == 1);
    assert(!fired.enabled);

    std::error_code ec;
    std::filesystem::remove(path, ec);
  }

  std::cout << "core tests passed\n";
  return 0;
}
