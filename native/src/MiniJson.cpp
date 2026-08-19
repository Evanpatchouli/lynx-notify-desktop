#include "MiniJson.h"

#include <cmath>
#include <cstdlib>
#include <iomanip>
#include <sstream>

namespace mini_json {

bool Value::IsNull() const { return std::holds_alternative<std::nullptr_t>(data_); }
bool Value::IsBool() const { return std::holds_alternative<bool>(data_); }
bool Value::IsNumber() const { return std::holds_alternative<double>(data_); }
bool Value::IsString() const { return std::holds_alternative<std::string>(data_); }
bool Value::IsArray() const { return std::holds_alternative<Array>(data_); }
bool Value::IsObject() const { return std::holds_alternative<Object>(data_); }

bool Value::AsBool(bool fallback) const {
  return IsBool() ? std::get<bool>(data_) : fallback;
}

double Value::AsNumber(double fallback) const {
  return IsNumber() ? std::get<double>(data_) : fallback;
}

long long Value::AsInt64(long long fallback) const {
  return IsNumber() ? static_cast<long long>(std::llround(std::get<double>(data_))) : fallback;
}

std::string Value::AsString(const std::string& fallback) const {
  return IsString() ? std::get<std::string>(data_) : fallback;
}

const Value::Array& Value::AsArray() const {
  static const Array empty;
  return IsArray() ? std::get<Array>(data_) : empty;
}

Value::Array& Value::AsArray() {
  if (!IsArray()) data_ = Array{};
  return std::get<Array>(data_);
}

const Value::Object& Value::AsObject() const {
  static const Object empty;
  return IsObject() ? std::get<Object>(data_) : empty;
}

Value::Object& Value::AsObject() {
  if (!IsObject()) data_ = Object{};
  return std::get<Object>(data_);
}

const Value* Value::Find(const std::string& key) const {
  if (!IsObject()) return nullptr;
  const auto& object = std::get<Object>(data_);
  auto it = object.find(key);
  return it == object.end() ? nullptr : &it->second;
}

Value* Value::Find(const std::string& key) {
  if (!IsObject()) return nullptr;
  auto& object = std::get<Object>(data_);
  auto it = object.find(key);
  return it == object.end() ? nullptr : &it->second;
}

const Value& Value::At(const std::string& key) const {
  const auto* found = Find(key);
  if (!found) throw std::out_of_range("JSON key not found: " + key);
  return *found;
}

Value& Value::operator[](const std::string& key) {
  return AsObject()[key];
}

namespace {

class Parser {
 public:
  explicit Parser(const std::string& source) : source_(source) {}

  Value Run() {
    SkipWhitespace();
    Value value = ParseValue();
    SkipWhitespace();
    if (pos_ != source_.size()) Error("Unexpected trailing data");
    return value;
  }

 private:
  const std::string& source_;
  size_t pos_ = 0;

  [[noreturn]] void Error(const std::string& message) const {
    throw std::runtime_error(message + " at offset " + std::to_string(pos_));
  }

  void SkipWhitespace() {
    while (pos_ < source_.size()) {
      char c = source_[pos_];
      if (c == ' ' || c == '\t' || c == '\r' || c == '\n') ++pos_;
      else break;
    }
  }

  bool Consume(char expected) {
    if (pos_ < source_.size() && source_[pos_] == expected) {
      ++pos_;
      return true;
    }
    return false;
  }

  Value ParseValue() {
    SkipWhitespace();
    if (pos_ >= source_.size()) Error("Unexpected end of JSON");
    switch (source_[pos_]) {
      case 'n': return ParseLiteral("null", Value(nullptr));
      case 't': return ParseLiteral("true", Value(true));
      case 'f': return ParseLiteral("false", Value(false));
      case '"': return Value(ParseString());
      case '[': return ParseArray();
      case '{': return ParseObject();
      default:
        if (source_[pos_] == '-' || (source_[pos_] >= '0' && source_[pos_] <= '9')) return ParseNumber();
        Error("Unexpected token");
    }
  }

  Value ParseLiteral(const char* literal, Value value) {
    const std::string token(literal);
    if (source_.compare(pos_, token.size(), token) != 0) Error("Invalid literal");
    pos_ += token.size();
    return value;
  }

  static void AppendUtf8(std::string& output, unsigned codepoint) {
    if (codepoint <= 0x7F) {
      output.push_back(static_cast<char>(codepoint));
    } else if (codepoint <= 0x7FF) {
      output.push_back(static_cast<char>(0xC0 | (codepoint >> 6)));
      output.push_back(static_cast<char>(0x80 | (codepoint & 0x3F)));
    } else if (codepoint <= 0xFFFF) {
      output.push_back(static_cast<char>(0xE0 | (codepoint >> 12)));
      output.push_back(static_cast<char>(0x80 | ((codepoint >> 6) & 0x3F)));
      output.push_back(static_cast<char>(0x80 | (codepoint & 0x3F)));
    } else {
      output.push_back(static_cast<char>(0xF0 | (codepoint >> 18)));
      output.push_back(static_cast<char>(0x80 | ((codepoint >> 12) & 0x3F)));
      output.push_back(static_cast<char>(0x80 | ((codepoint >> 6) & 0x3F)));
      output.push_back(static_cast<char>(0x80 | (codepoint & 0x3F)));
    }
  }

  unsigned ParseHex4() {
    if (pos_ + 4 > source_.size()) Error("Incomplete unicode escape");
    unsigned result = 0;
    for (int i = 0; i < 4; ++i) {
      char c = source_[pos_++];
      result <<= 4;
      if (c >= '0' && c <= '9') result |= static_cast<unsigned>(c - '0');
      else if (c >= 'a' && c <= 'f') result |= static_cast<unsigned>(10 + c - 'a');
      else if (c >= 'A' && c <= 'F') result |= static_cast<unsigned>(10 + c - 'A');
      else Error("Invalid unicode escape");
    }
    return result;
  }

  std::string ParseString() {
    if (!Consume('"')) Error("Expected string");
    std::string result;
    while (pos_ < source_.size()) {
      char c = source_[pos_++];
      if (c == '"') return result;
      if (static_cast<unsigned char>(c) < 0x20) Error("Control character in string");
      if (c != '\\') {
        result.push_back(c);
        continue;
      }
      if (pos_ >= source_.size()) Error("Incomplete escape");
      char e = source_[pos_++];
      switch (e) {
        case '"': result.push_back('"'); break;
        case '\\': result.push_back('\\'); break;
        case '/': result.push_back('/'); break;
        case 'b': result.push_back('\b'); break;
        case 'f': result.push_back('\f'); break;
        case 'n': result.push_back('\n'); break;
        case 'r': result.push_back('\r'); break;
        case 't': result.push_back('\t'); break;
        case 'u': {
          unsigned codepoint = ParseHex4();
          if (codepoint >= 0xD800 && codepoint <= 0xDBFF &&
              pos_ + 6 <= source_.size() && source_[pos_] == '\\' && source_[pos_ + 1] == 'u') {
            pos_ += 2;
            unsigned low = ParseHex4();
            if (low >= 0xDC00 && low <= 0xDFFF) {
              codepoint = 0x10000 + ((codepoint - 0xD800) << 10) + (low - 0xDC00);
            } else {
              Error("Invalid unicode surrogate pair");
            }
          }
          AppendUtf8(result, codepoint);
          break;
        }
        default: Error("Invalid escape");
      }
    }
    Error("Unterminated string");
  }

  Value ParseNumber() {
    size_t start = pos_;
    Consume('-');
    if (Consume('0')) {
      // zero is complete unless followed by fraction/exponent
    } else {
      if (pos_ >= source_.size() || source_[pos_] < '1' || source_[pos_] > '9') Error("Invalid number");
      while (pos_ < source_.size() && source_[pos_] >= '0' && source_[pos_] <= '9') ++pos_;
    }
    if (Consume('.')) {
      if (pos_ >= source_.size() || source_[pos_] < '0' || source_[pos_] > '9') Error("Invalid fraction");
      while (pos_ < source_.size() && source_[pos_] >= '0' && source_[pos_] <= '9') ++pos_;
    }
    if (pos_ < source_.size() && (source_[pos_] == 'e' || source_[pos_] == 'E')) {
      ++pos_;
      if (pos_ < source_.size() && (source_[pos_] == '+' || source_[pos_] == '-')) ++pos_;
      if (pos_ >= source_.size() || source_[pos_] < '0' || source_[pos_] > '9') Error("Invalid exponent");
      while (pos_ < source_.size() && source_[pos_] >= '0' && source_[pos_] <= '9') ++pos_;
    }
    const std::string token = source_.substr(start, pos_ - start);
    char* end = nullptr;
    double value = std::strtod(token.c_str(), &end);
    if (!end || *end != '\0' || !std::isfinite(value)) Error("Invalid number");
    return Value(value);
  }

  Value ParseArray() {
    Consume('[');
    Value::Array result;
    SkipWhitespace();
    if (Consume(']')) return Value(std::move(result));
    while (true) {
      result.push_back(ParseValue());
      SkipWhitespace();
      if (Consume(']')) break;
      if (!Consume(',')) Error("Expected ',' in array");
      SkipWhitespace();
    }
    return Value(std::move(result));
  }

  Value ParseObject() {
    Consume('{');
    Value::Object result;
    SkipWhitespace();
    if (Consume('}')) return Value(std::move(result));
    while (true) {
      SkipWhitespace();
      if (pos_ >= source_.size() || source_[pos_] != '"') Error("Expected object key");
      std::string key = ParseString();
      SkipWhitespace();
      if (!Consume(':')) Error("Expected ':' after object key");
      result.emplace(std::move(key), ParseValue());
      SkipWhitespace();
      if (Consume('}')) break;
      if (!Consume(',')) Error("Expected ',' in object");
      SkipWhitespace();
    }
    return Value(std::move(result));
  }
};

std::string EscapeString(const std::string& input) {
  std::ostringstream out;
  out << '"';
  for (unsigned char c : input) {
    switch (c) {
      case '"': out << "\\\""; break;
      case '\\': out << "\\\\"; break;
      case '\b': out << "\\b"; break;
      case '\f': out << "\\f"; break;
      case '\n': out << "\\n"; break;
      case '\r': out << "\\r"; break;
      case '\t': out << "\\t"; break;
      default:
        if (c < 0x20) {
          out << "\\u" << std::hex << std::setw(4) << std::setfill('0') << static_cast<int>(c)
              << std::dec << std::setw(0);
        } else {
          out << static_cast<char>(c);
        }
    }
  }
  out << '"';
  return out.str();
}

std::string Indent(int count) { return std::string(static_cast<size_t>(count), ' '); }

std::string DumpInternal(const Value& value, bool pretty, int level, int step) {
  if (value.IsNull()) return "null";
  if (value.IsBool()) return value.AsBool() ? "true" : "false";
  if (value.IsNumber()) {
    std::ostringstream out;
    out << std::setprecision(15) << value.AsNumber();
    return out.str();
  }
  if (value.IsString()) return EscapeString(value.AsString());
  if (value.IsArray()) {
    const auto& array = value.AsArray();
    if (array.empty()) return "[]";
    std::ostringstream out;
    out << '[';
    if (pretty) out << '\n';
    for (size_t i = 0; i < array.size(); ++i) {
      if (pretty) out << Indent((level + 1) * step);
      out << DumpInternal(array[i], pretty, level + 1, step);
      if (i + 1 < array.size()) out << ',';
      if (pretty) out << '\n';
    }
    if (pretty) out << Indent(level * step);
    out << ']';
    return out.str();
  }
  const auto& object = value.AsObject();
  if (object.empty()) return "{}";
  std::ostringstream out;
  out << '{';
  if (pretty) out << '\n';
  size_t index = 0;
  for (const auto& [key, child] : object) {
    if (pretty) out << Indent((level + 1) * step);
    out << EscapeString(key) << (pretty ? ": " : ":") << DumpInternal(child, pretty, level + 1, step);
    if (++index < object.size()) out << ',';
    if (pretty) out << '\n';
  }
  if (pretty) out << Indent(level * step);
  out << '}';
  return out.str();
}

}  // namespace

Value Parse(const std::string& source) { return Parser(source).Run(); }

std::string Dump(const Value& value, bool pretty, int indent) {
  const int step = indent > 0 ? indent : 2;
  return DumpInternal(value, pretty, 0, step);
}

}  // namespace mini_json
