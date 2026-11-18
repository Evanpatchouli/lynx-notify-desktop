cmake_minimum_required(VERSION 3.24)
set(APP_MANIFEST "${CMAKE_CURRENT_SOURCE_DIR}/../frontend/package.json")
set_property(DIRECTORY APPEND PROPERTY CMAKE_CONFIGURE_DEPENDS "${APP_MANIFEST}")
file(READ "${APP_MANIFEST}" APP_MANIFEST_JSON)
string(JSON APP_VERSION GET "${APP_MANIFEST_JSON}" version)
project(LynxNotify VERSION "${APP_VERSION}" LANGUAGES CXX)
configure_file(src/AppVersion.h.in generated/AppVersion.h @ONLY)

if(NOT WIN32)
  message(FATAL_ERROR "LynxNotify native host targets Windows only.")
endif()

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

set(LYNX_SDK_DIR "${CMAKE_CURRENT_SOURCE_DIR}/thirdparty/lynx" CACHE PATH "LynxSDK for Windows root")
set(FRONTEND_DIST "${CMAKE_CURRENT_SOURCE_DIR}/../frontend/dist")
set(LYNX_NOTIFY_OUTPUT_DIR "${CMAKE_CURRENT_SOURCE_DIR}/../output" CACHE PATH "App build output root")
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY "${LYNX_NOTIFY_OUTPUT_DIR}")
foreach(OUTPUT_CONFIG IN ITEMS Debug Release RelWithDebInfo MinSizeRel)
  string(TOUPPER "${OUTPUT_CONFIG}" OUTPUT_CONFIG_UPPER)
  set(CMAKE_RUNTIME_OUTPUT_DIRECTORY_${OUTPUT_CONFIG_UPPER}
      "${LYNX_NOTIFY_OUTPUT_DIR}/${OUTPUT_CONFIG}")
endforeach()
set(LYNX_NOTIFY_RESOURCES
  resources/LynxNotify.rc
  resources/resource.h
  resources/LynxNotify.ico
)

if(NOT EXISTS "${LYNX_SDK_DIR}/include/lynx_view.h")
  message(FATAL_ERROR "LynxSDK is missing. Run scripts/setup-lynx-sdk.ps1 or extract LynxSDK 4.0 to native/thirdparty/lynx.")
endif()
if(NOT EXISTS "${LYNX_SDK_DIR}/lib/lynx.dll.lib")
  message(FATAL_ERROR "${LYNX_SDK_DIR}/lib/lynx.dll.lib was not found.")
endif()
if(NOT EXISTS "${FRONTEND_DIST}/panel.lynx.bundle" OR NOT EXISTS "${FRONTEND_DIST}/overlay.lynx.bundle")
  message(FATAL_ERROR "Frontend bundle is missing. Run npm install && npm run build in frontend first.")
endif()

set(LYNX_NOTIFY_CORE_SOURCES
  src/TaskEngine.cpp
  src/TaskTypes.cpp
  src/MiniJson.cpp
  src/ExpressionEvaluator.cpp
  src/TemplateRenderer.cpp
  src/TimeUtils.cpp
  src/Storage.cpp
)
set(LYNX_NOTIFY_HOST_SOURCES
  src/AppController.cpp
  src/NativeLynxWindow.cpp
  src/NativeModule.cpp
  src/GitHubRelease.cpp
  src/UpdateChecker.cpp
  ${LYNX_NOTIFY_CORE_SOURCES}
  ${LYNX_NOTIFY_RESOURCES}
)

add_executable(LynxNotify WIN32 src/main.cpp ${LYNX_NOTIFY_HOST_SOURCES})

target_include_directories(LynxNotify PRIVATE
  "${CMAKE_CURRENT_SOURCE_DIR}/src"
  "${CMAKE_CURRENT_SOURCE_DIR}/resources"
  "${CMAKE_CURRENT_BINARY_DIR}/generated"
  "${LYNX_SDK_DIR}/include"
)

target_compile_definitions(
  LynxNotify
  PRIVATE
    UNICODE
    _UNICODE
    NOMINMAX
    WIN32_LEAN_AND_MEAN
    $<$<CONFIG:Debug>:LYNX_NOTIFY_DEVTOOLS>
    USE_WEAK_SUFFIX_NAPI)
if(MSVC)
  target_compile_options(LynxNotify PRIVATE /utf-8 /W4 /permissive- /EHsc)
endif()

target_link_libraries(LynxNotify PRIVATE
  "${LYNX_SDK_DIR}/lib/lynx.dll.lib"
  user32
  shell32
  ole32
  dwmapi
  comctl32
  winhttp
)

function(copy_lynx_runtime target_name)
add_custom_command(TARGET ${target_name} POST_BUILD
  COMMAND ${CMAKE_COMMAND} -E copy_if_different
    "${LYNX_SDK_DIR}/lib/lynx.dll"
    "$<TARGET_FILE_DIR:${target_name}>/lynx.dll"
  COMMAND ${CMAKE_COMMAND} -E copy_directory
    "${LYNX_SDK_DIR}/data"
    "$<TARGET_FILE_DIR:${target_name}>/data"
  COMMAND ${CMAKE_COMMAND} -E copy_if_different
    "${LYNX_SDK_DIR}/lynx_core.js"
    "$<TARGET_FILE_DIR:${target_name}>/lynx_core.js"
  COMMAND ${CMAKE_COMMAND} -E copy_if_different
    "${LYNX_SDK_DIR}/lynx_core_dev.js"
    "$<TARGET_FILE_DIR:${target_name}>/lynx_core_dev.js"
  COMMAND ${CMAKE_COMMAND} -E copy_directory
    "${FRONTEND_DIST}"
    "$<TARGET_FILE_DIR:${target_name}>/bundles"
)
endfunction()

copy_lynx_runtime(LynxNotify)

install(TARGETS LynxNotify RUNTIME DESTINATION .)
install(FILES "${LYNX_SDK_DIR}/lib/lynx.dll" "${LYNX_SDK_DIR}/lynx_core.js" "${LYNX_SDK_DIR}/lynx_core_dev.js" DESTINATION .)
install(DIRECTORY "${LYNX_SDK_DIR}/data" DESTINATION .)
install(FILES "${FRONTEND_DIST}/panel.lynx.bundle" "${FRONTEND_DIST}/overlay.lynx.bundle" DESTINATION bundles)
set(CMAKE_INSTALL_SYSTEM_RUNTIME_DESTINATION .)
include(InstallRequiredSystemLibraries)

option(LYNX_NOTIFY_BUILD_TESTS "Build native scheduler, updater and Windows lifecycle tests" OFF)
if(LYNX_NOTIFY_BUILD_TESTS)
  enable_testing()
  add_executable(LynxNotifyCoreTests ../tests/core_tests.cpp ${LYNX_NOTIFY_CORE_SOURCES})
  add_executable(LynxNotifyUpdateTests ../tests/update_tests.cpp src/UpdateChecker.cpp src/GitHubRelease.cpp src/MiniJson.cpp src/TimeUtils.cpp)
  foreach(test_target IN ITEMS LynxNotifyCoreTests LynxNotifyUpdateTests)
    set_target_properties(${test_target} PROPERTIES RUNTIME_OUTPUT_DIRECTORY_RELEASE "${CMAKE_CURRENT_BINARY_DIR}/tests/Release")
    target_include_directories(${test_target} PRIVATE src "${CMAKE_CURRENT_BINARY_DIR}/generated")
    target_compile_definitions(${test_target} PRIVATE NOMINMAX WIN32_LEAN_AND_MEAN)
    if(MSVC)
      target_compile_options(${test_target} PRIVATE /utf-8 /EHsc /UNDEBUG)
    endif()
    add_test(NAME ${test_target} COMMAND ${test_target})
  endforeach()
  target_link_libraries(LynxNotifyCoreTests PRIVATE shell32 ole32)
  target_link_libraries(LynxNotifyUpdateTests PRIVATE winhttp shell32)
  add_executable(LynxNotifyLifecycleTests ../tests/windows_lifecycle_tests.cpp ${LYNX_NOTIFY_HOST_SOURCES})
  set_target_properties(LynxNotifyLifecycleTests PROPERTIES RUNTIME_OUTPUT_DIRECTORY "${CMAKE_CURRENT_BINARY_DIR}/tests/$<CONFIG>")
  foreach(TEST_CONFIG IN ITEMS Debug Release RelWithDebInfo MinSizeRel)
    string(TOUPPER "${TEST_CONFIG}" TEST_CONFIG_UPPER)
    set_target_properties(LynxNotifyLifecycleTests PROPERTIES
      RUNTIME_OUTPUT_DIRECTORY_${TEST_CONFIG_UPPER} "${CMAKE_CURRENT_BINARY_DIR}/tests/${TEST_CONFIG}")
  endforeach()
  target_include_directories(LynxNotifyLifecycleTests PRIVATE src resources "${CMAKE_CURRENT_BINARY_DIR}/generated" "${LYNX_SDK_DIR}/include")
  target_compile_definitions(LynxNotifyLifecycleTests PRIVATE UNICODE _UNICODE NOMINMAX WIN32_LEAN_AND_MEAN USE_WEAK_SUFFIX_NAPI)
  if(MSVC)
    target_compile_options(LynxNotifyLifecycleTests PRIVATE /utf-8 /EHsc)
  endif()
  target_link_libraries(LynxNotifyLifecycleTests PRIVATE
    "${LYNX_SDK_DIR}/lib/lynx.dll.lib" user32 shell32 ole32 dwmapi comctl32 psapi winhttp)
  copy_lynx_runtime(LynxNotifyLifecycleTests)
  add_test(NAME LynxNotifyLifecycleTests COMMAND LynxNotifyLifecycleTests)
endif()
