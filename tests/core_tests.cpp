#include "ExpressionEvaluator.h"
#include "MiniJson.h"
#include "TaskEngine.h"
#include "TemplateRenderer.h"
#include "TimeUtils.h"

#include <cassert>
#include <filesystem>
#include <iostream>
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
    assert(overlay.At("cards").AsArray().size() == 3);
    const auto card_rects = engine.GetNotificationCardRects(1920, 1080, 1.0);
    assert(card_rects.size() == 3);
    assert(card_rects[0].left == 1554);
    assert(card_rects[0].top == 26);
    assert(card_rects[1].top == 42);
    assert(card_rects[2].top == 58);
    assert(card_rects[0].right == 1894);
    assert(card_rects[0].bottom == 130);
    std::filesystem::remove(path, ec);
  }

  std::cout << "core tests passed\n";
  return 0;
}
