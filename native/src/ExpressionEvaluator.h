#pragma once

#include <optional>
#include <string>
#include <unordered_map>

class ExpressionEvaluator {
 public:
  static std::optional<double> Evaluate(
      const std::string& expression,
      const std::unordered_map<std::string, double>& variables,
      std::string* error = nullptr);
};
