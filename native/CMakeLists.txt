cmake_minimum_required(VERSION 3.24)
project(LynxNotify LANGUAGES CXX)

if(NOT WIN32)
  message(FATAL_ERROR "LynxNotify native host targets Windows only.")
endif()

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

set(LYNX_SDK_DIR "${CMAKE_CURRENT_SOURCE_DIR}/thirdparty/lynx" CACHE PATH "LynxSDK for Windows root")
set(FRONTEND_DIST "${CMAKE_CURRENT_SOURCE_DIR}/../frontend/dist")
set(LYNX_NOTIFY_OUTPUT_DIR "${CMAKE_CURRENT_SOURCE_DIR}/../output")
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
if(NOT EXISTS "${FRONTEND_DIST}/panel.lynx.bundle")
  message(FATAL_ERROR "Frontend bundle is missing. Run npm install && npm run build in frontend first.")
endif()

add_executable(LynxNotify WIN32
  src/main.cpp
  src/AppController.cpp
  src/NativeLynxWindow.cpp
  src/NativeModule.cpp
  src/TaskEngine.cpp
  src/TaskTypes.cpp
  src/MiniJson.cpp
  src/ExpressionEvaluator.cpp
  src/TemplateRenderer.cpp
  src/TimeUtils.cpp
  src/Storage.cpp
  ${LYNX_NOTIFY_RESOURCES}
)

target_include_directories(LynxNotify PRIVATE
  "${CMAKE_CURRENT_SOURCE_DIR}/src"
  "${CMAKE_CURRENT_SOURCE_DIR}/resources"
  "${LYNX_SDK_DIR}/include"
)

target_compile_definitions(
  LynxNotify
  PRIVATE
    UNICODE
    _UNICODE
    NOMINMAX
    WIN32_LEAN_AND_MEAN
    USE_WEAK_SUFFIX_NAPI)
if(MSVC)
  target_compile_options(LynxNotify PRIVATE /utf-8 /W4 /permissive-)
endif()

target_link_libraries(LynxNotify PRIVATE
  "${LYNX_SDK_DIR}/lib/lynx.dll.lib"
  user32
  shell32
  ole32
  dwmapi
  comctl32
)

add_custom_command(TARGET LynxNotify POST_BUILD
  COMMAND ${CMAKE_COMMAND} -E copy_if_different
    "${LYNX_SDK_DIR}/lib/lynx.dll"
    "$<TARGET_FILE_DIR:LynxNotify>/lynx.dll"
  COMMAND ${CMAKE_COMMAND} -E copy_directory
    "${LYNX_SDK_DIR}/data"
    "$<TARGET_FILE_DIR:LynxNotify>/data"
  COMMAND ${CMAKE_COMMAND} -E copy_if_different
    "${LYNX_SDK_DIR}/lynx_core.js"
    "$<TARGET_FILE_DIR:LynxNotify>/lynx_core.js"
  COMMAND ${CMAKE_COMMAND} -E copy_if_different
    "${LYNX_SDK_DIR}/lynx_core_dev.js"
    "$<TARGET_FILE_DIR:LynxNotify>/lynx_core_dev.js"
  COMMAND ${CMAKE_COMMAND} -E copy_directory
    "${FRONTEND_DIST}"
    "$<TARGET_FILE_DIR:LynxNotify>/bundles"
)
