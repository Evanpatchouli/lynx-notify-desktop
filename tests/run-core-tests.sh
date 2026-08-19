#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/tests/.core-tests"
g++ -std=c++17 -O2 -pthread \
  -I"$ROOT/native/src" \
  "$ROOT/tests/core_tests.cpp" \
  "$ROOT/native/src/MiniJson.cpp" \
  "$ROOT/native/src/ExpressionEvaluator.cpp" \
  "$ROOT/native/src/TimeUtils.cpp" \
  "$ROOT/native/src/TemplateRenderer.cpp" \
  "$ROOT/native/src/TaskTypes.cpp" \
  "$ROOT/native/src/Storage.cpp" \
  "$ROOT/native/src/TaskEngine.cpp" \
  -o "$OUT"
"$OUT"
rm -f "$OUT"
