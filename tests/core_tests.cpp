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
    using namespace std::chrono_literals;
    const auto november_18 = 37 * 24h;
    const auto restart = november_18 + 15h + 48min + 21s;
    const auto fixture_ms = [&](std::chrono::seconds since_october_12) {
      return fixture_now + std::chrono::duration_cast<std::chrono::milliseconds>(since_october_12 - restart).count();
    };
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
    auto anchored = overdue;
    anchored.id = "anchored";
    anchored.interval.start_at_ms = fixture_ms(11h + 58min);
    const int64_t next_slot_ms = fixture_ms(november_18 + 15h + 58min);
    auto drifted = anchored;
    drifted.id = "drifted";
    drifted.next_run_at_ms = fixture_ms(november_18 + 16h + 18min + 21s);
    auto expression = anchored;
    expression.id = "expression";
    expression.interval.mode = "expression";
    expression.interval.expression = "max(10, 60 - run * 5)";
    auto exhausted = anchored;
    exhausted.id = "exhausted";
    exhausted.interval.max_runs = exhausted.run_count;
    auto expired = anchored;
    expired.id = "expired";
    expired.interval.end_at_ms = fixture_now - 1000;
    auto ending = anchored;
    ending.id = "ending";
    ending.interval.end_at_ms = next_slot_ms - 1;
    auto within_end = anchored;
    within_end.id = "within-end";
    within_end.interval.end_at_ms = next_slot_ms + 1;
    auto disabled = anchored;
    disabled.id = "disabled";
    disabled.enabled = false;
    auto old_start = anchored;
    old_start.id = "old-start";
    old_start.next_run_at_ms = 0;
    auto missing_deadline = overdue;
    missing_deadline.id = "missing-deadline";
    missing_deadline.next_run_at_ms = 0;
    auto future_start = old_start;
    future_start.id = "future-start";
    future_start.interval.start_at_ms = future.next_run_at_ms;

    mini_json::Value::Object fixture;
    mini_json::Value::Array tasks;
    for (const auto& task : {overdue, future, anchored, drifted, expression, exhausted, expired, ending,
                             within_end, disabled, old_start, missing_deadline, future_start}) {
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
    for (const auto& id : {"anchored", "drifted", "old-start", "within-end"}) {
      const auto task = find_task(state, id);
      assert(task.enabled);
      assert(task.next_run_at_ms == next_slot_ms);
      assert(task.run_count == overdue.run_count);
      assert(task.last_run_at_ms == overdue.last_run_at_ms);
    }
    for (const auto& id : {"overdue", "expression", "missing-deadline"}) {
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
    assert(engine.SetTaskEnabled("disabled", true));
    const auto enabled = find_task(mini_json::Parse(engine.GetStateJson()), "disabled");
    assert(enabled.enabled);
    assert(enabled.next_run_at_ms == next_slot_ms);
    assert(enabled.run_count == overdue.run_count);
    assert(enabled.last_run_at_ms == overdue.last_run_at_ms);

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

    auto ticking = anchored;
    ticking.id = "ticking";
    ticking.interval.fixed_sec = 1800.125;
    ticking.interval.start_at_ms = time_utils::NowMs() + 120;
    const auto pending = TaskFromJson(mini_json::Parse(engine.UpsertTaskJson(mini_json::Dump(ToJson(ticking)))));
    assert(pending.next_run_at_ms == ticking.interval.start_at_ms);
    std::this_thread::sleep_for(250ms);
    engine.Start();
    const auto timeout = std::chrono::steady_clock::now() + 3s;
    while (find_task(mini_json::Parse(engine.GetStateJson()), ticking.id).run_count == 0 &&
           std::chrono::steady_clock::now() < timeout) {
      std::this_thread::sleep_for(10ms);
    }
    engine.Stop();
    const auto ticked = find_task(mini_json::Parse(engine.GetStateJson()), ticking.id);
    assert(ticked.run_count == 1);
    assert(ticked.last_run_at_ms > ticking.interval.start_at_ms);
    assert(ticked.next_run_at_ms == ticking.interval.start_at_ms + 1'800'125);

    std::error_code ec;
    std::filesystem::remove(path, ec);
  }

  std::cout << "core tests passed\n";
  return 0;
}
