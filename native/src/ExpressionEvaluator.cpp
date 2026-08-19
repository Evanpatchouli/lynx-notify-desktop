#include "ExpressionEvaluator.h"

#include <algorithm>
#include <cctype>
#include <cmath>
#include <cstdlib>
#include <stdexcept>
#include <vector>

namespace {

class Parser {
 public:
  Parser(const std::string& source, const std::unordered_map<std::string, double>& variables)
      : source_(source), variables_(variables) {}

  double Run() {
    const double value = ParseExpression();
    Skip();
    if (pos_ != source_.size()) Fail("unexpected token");
    if (!std::isfinite(value)) Fail("result is not finite");
    return value;
  }

 private:
  const std::string& source_;
  const std::unordered_map<std::string, double>& variables_;
  size_t pos_ = 0;

  [[noreturn]] void Fail(const std::string& message) const {
    throw std::runtime_error(message + " at offset " + std::to_string(pos_));
  }

  void Skip() {
    while (pos_ < source_.size() && std::isspace(static_cast<unsigned char>(source_[pos_]))) ++pos_;
  }

  bool Match(char c) {
    Skip();
    if (pos_ < source_.size() && source_[pos_] == c) {
      ++pos_;
      return true;
    }
    return false;
  }

  double ParseExpression() {
    double value = ParseTerm();
    while (true) {
      if (Match('+')) value += ParseTerm();
      else if (Match('-')) value -= ParseTerm();
      else break;
    }
    return value;
  }

  double ParseTerm() {
    double value = ParseUnary();
    while (true) {
      if (Match('*')) value *= ParseUnary();
      else if (Match('/')) {
        const double rhs = ParseUnary();
        if (std::abs(rhs) < 1e-12) Fail("division by zero");
        value /= rhs;
      } else if (Match('%')) {
        const double rhs = ParseUnary();
        if (std::abs(rhs) < 1e-12) Fail("modulo by zero");
        value = std::fmod(value, rhs);
      } else break;
    }
    return value;
  }

  double ParseUnary() {
    if (Match('+')) return ParseUnary();
    if (Match('-')) return -ParseUnary();
    return ParsePrimary();
  }

  std::string ParseIdentifier() {
    Skip();
    if (pos_ >= source_.size() ||
        !(std::isalpha(static_cast<unsigned char>(source_[pos_])) || source_[pos_] == '_')) {
      return {};
    }
    const size_t start = pos_++;
    while (pos_ < source_.size() &&
           (std::isalnum(static_cast<unsigned char>(source_[pos_])) || source_[pos_] == '_')) {
      ++pos_;
    }
    return source_.substr(start, pos_ - start);
  }

  double ParseNumber() {
    Skip();
    const char* begin = source_.c_str() + pos_;
    char* end = nullptr;
    const double value = std::strtod(begin, &end);
    if (end == begin) Fail("expected number");
    pos_ += static_cast<size_t>(end - begin);
    return value;
  }

  double ApplyFunction(const std::string& name, const std::vector<double>& args) {
    if (name == "min" && args.size() == 2) return std::min(args[0], args[1]);
    if (name == "max" && args.size() == 2) return std::max(args[0], args[1]);
    if (name == "clamp" && args.size() == 3) return std::clamp(args[0], args[1], args[2]);
    if (name == "abs" && args.size() == 1) return std::abs(args[0]);
    if (name == "floor" && args.size() == 1) return std::floor(args[0]);
    if (name == "ceil" && args.size() == 1) return std::ceil(args[0]);
    Fail("unknown function or invalid argument count: " + name);
  }

  double ParsePrimary() {
    Skip();
    if (Match('(')) {
      const double value = ParseExpression();
      if (!Match(')')) Fail("expected ')'");
      return value;
    }

    if (pos_ < source_.size() &&
        (std::isdigit(static_cast<unsigned char>(source_[pos_])) || source_[pos_] == '.')) {
      return ParseNumber();
    }

    const std::string identifier = ParseIdentifier();
    if (identifier.empty()) Fail("expected value");

    Skip();
    if (Match('(')) {
      std::vector<double> args;
      Skip();
      if (!Match(')')) {
        while (true) {
          args.push_back(ParseExpression());
          if (Match(')')) break;
          if (!Match(',')) Fail("expected ','");
        }
      }
      return ApplyFunction(identifier, args);
    }

    const auto found = variables_.find(identifier);
    if (found == variables_.end()) Fail("unknown variable: " + identifier);
    return found->second;
  }
};

}  // namespace

std::optional<double> ExpressionEvaluator::Evaluate(
    const std::string& expression,
    const std::unordered_map<std::string, double>& variables,
    std::string* error) {
  try {
    return Parser(expression, variables).Run();
  } catch (const std::exception& ex) {
    if (error) *error = ex.what();
    return std::nullopt;
  }
}
