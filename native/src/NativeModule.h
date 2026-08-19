#pragma once

#ifdef _WIN32

#include "lynx_native_module.h"

#ifdef USE_WEAK_SUFFIX_NAPI
#include "third_party/weak-node-api/headers/weak_napi_defines.h"
#endif

napi_value NotifyHostModuleCreator(
    napi_env env,
    napi_value exports,
    const char* module_name,
    void* opaque);

#ifdef USE_WEAK_SUFFIX_NAPI
#include "third_party/weak-node-api/headers/weak_napi_undefs.h"
#endif

#endif
