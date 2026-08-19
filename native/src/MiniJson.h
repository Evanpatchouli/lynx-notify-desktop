#pragma once

#include <map>
#include <stdexcept>
#include <string>
#include <variant>
#include <vector>

namespace mini_json {

class Value {
 public:
  using Array = std::vector<Value>;
  using Object = std::map<std::string, Value>;
  using Storage = std::variant<std::nullptr_t, bool, double, std::string, Array, Object>;

  Value() : data_(nullptr) {}
  Value(std::nullptr_t) : data_(nullptr) {}
  Value(bool value) : data_(value) {}
  Value(double value) : data_(value) {}
  Value(int value) : data_(static_cast<double>(value)) {}
  Value(long long value) : data_(static_cast<double>(value)) {}
  Value(const char* value) : data_(std::string(value)) {}
  Value(std::string value) : data_(std::move(value)) {}
  Value(Array value) : data_(std::move(value)) {}
  Value(Object value) : data_(std::move(value)) {}

  bool IsNull() const;
  bool IsBool() const;
  bool IsNumber() const;
  bool IsString() const;
  bool IsArray() const;
  bool IsObject() const;

  bool AsBool(bool fallback = false) const;
  double AsNumber(double fallback = 0) const;
  long long AsInt64(long long fallback = 0) const;
  std::string AsString(const std::string& fallback = {}) const;

  const Array& AsArray() const;
  Array& AsArray();
  const Object& AsObject() const;
  Object& AsObject();

  const Value* Find(const std::string& key) const;
  Value* Find(const std::string& key);
  const Value& At(const std::string& key) const;
  Value& operator[](const std::string& key);

  const Storage& StorageValue() const { return data_; }

 private:
  Storage data_;
};

Value Parse(const std::string& source);
std::string Dump(const Value& value, bool pretty = false, int indent = 0);

}  // namespace mini_json
