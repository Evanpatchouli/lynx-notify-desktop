#include "NativeModule.h"

#ifdef _WIN32

#include "AppController.h"

#ifdef USE_WEAK_SUFFIX_NAPI
#include "third_party/weak-node-api/headers/weak_napi_defines.h"
#endif

#include <string>
#include <vector>

namespace {

struct CallContext {
  AppController* app = nullptr;
  size_t argc = 0;
  napi_value argv[3]{};
};

CallContext ReadCall(napi_env env, napi_callback_info info, size_t max_args = 3) {
  CallContext context;
  context.argc = max_args;
  void* data = nullptr;
  napi_get_cb_info(env, info, &context.argc, context.argv, nullptr, &data);
  context.app = static_cast<AppController*>(data);
  return context;
}

std::string ReadString(napi_env env, napi_value value) {
  size_t length = 0;
  if (napi_get_value_string_utf8(env, value, nullptr, 0, &length) != napi_ok) return {};
  std::vector<char> buffer(length + 1, '\0');
  size_t written = 0;
  if (napi_get_value_string_utf8(env, value, buffer.data(), buffer.size(), &written) != napi_ok) return {};
  return std::string(buffer.data(), written);
}

napi_value StringResult(napi_env env, const std::string& value) {
  napi_value result{};
  napi_create_string_utf8(env, value.c_str(), value.size(), &result);
  return result;
}

napi_value BoolResult(napi_env env, bool value) {
  napi_value result{};
  napi_get_boolean(env, value, &result);
  return result;
}

napi_value Undefined(napi_env env) {
  napi_value result{};
  napi_get_undefined(env, &result);
  return result;
}

napi_value GetState(napi_env env, napi_callback_info info) {
  auto call = ReadCall(env, info, 0);
  return StringResult(env, call.app ? call.app->GetStateJson() : "{}");
}

napi_value GetOverlayState(napi_env env, napi_callback_info info) {
  auto call = ReadCall(env, info, 0);
  return StringResult(env, call.app ? call.app->GetOverlayStateJson() : "{\"cards\":[]}");
}

napi_value UpsertTask(napi_env env, napi_callback_info info) {
  auto call = ReadCall(env, info, 1);
  if (!call.app || call.argc < 1) return StringResult(env, "{}");
  return StringResult(env, call.app->UpsertTaskJson(ReadString(env, call.argv[0])));
}

napi_value DeleteTask(napi_env env, napi_callback_info info) {
  auto call = ReadCall(env, info, 1);
  return BoolResult(env, call.app && call.argc >= 1 && call.app->DeleteTask(ReadString(env, call.argv[0])));
}

napi_value SetTaskEnabled(napi_env env, napi_callback_info info) {
  auto call = ReadCall(env, info, 2);
  if (!call.app || call.argc < 2) return BoolResult(env, false);
  bool enabled = false;
  if (napi_get_value_bool(env, call.argv[1], &enabled) != napi_ok) return BoolResult(env, false);
  return BoolResult(env, call.app->SetTaskEnabled(ReadString(env, call.argv[0]), enabled));
}

napi_value UpdateSettings(napi_env env, napi_callback_info info) {
  auto call = ReadCall(env, info, 1);
  return BoolResult(env, call.app && call.argc >= 1 && call.app->UpdateSettingsJson(ReadString(env, call.argv[0])));
}

napi_value PreviewNotification(napi_env env, napi_callback_info info) {
  auto call = ReadCall(env, info, 1);
  return BoolResult(env, call.app && call.argc >= 1 && call.app->PreviewNotificationJson(ReadString(env, call.argv[0])));
}

napi_value DismissNotification(napi_env env, napi_callback_info info) {
  auto call = ReadCall(env, info, 1);
  return BoolResult(env, call.app && call.argc >= 1 && call.app->DismissNotification(ReadString(env, call.argv[0])));
}

napi_value WindowCommand(napi_env env, napi_callback_info info) {
  auto call = ReadCall(env, info, 1);
  if (call.app && call.argc >= 1) call.app->WindowCommand(ReadString(env, call.argv[0]));
  return Undefined(env);
}

void AddFunction(
    napi_env env,
    napi_value exports,
    const char* name,
    napi_callback callback,
    void* data) {
  napi_value function{};
  napi_create_function(env, name, static_cast<size_t>(-1), callback, data, &function);
  napi_set_named_property(env, exports, name, function);
}

}  // namespace

napi_value NotifyHostModuleCreator(
    napi_env env,
    napi_value exports,
    const char*,
    void* opaque) {
  AddFunction(env, exports, "getState", GetState, opaque);
  AddFunction(env, exports, "getOverlayState", GetOverlayState, opaque);
  AddFunction(env, exports, "upsertTask", UpsertTask, opaque);
  AddFunction(env, exports, "deleteTask", DeleteTask, opaque);
  AddFunction(env, exports, "setTaskEnabled", SetTaskEnabled, opaque);
  AddFunction(env, exports, "updateSettings", UpdateSettings, opaque);
  AddFunction(env, exports, "previewNotification", PreviewNotification, opaque);
  AddFunction(env, exports, "dismissNotification", DismissNotification, opaque);
  AddFunction(env, exports, "windowCommand", WindowCommand, opaque);
  return exports;
}

#ifdef USE_WEAK_SUFFIX_NAPI
#include "third_party/weak-node-api/headers/weak_napi_undefs.h"
#endif

#endif
