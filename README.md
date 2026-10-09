# Lynx Notify

一个 Windows 桌面定时通知应用原型：界面由 **Vue Lynx** 渲染，宿主由 **C++17 + Win32 + LynxSDK 4.0** 实现。

通知不是 Windows 原生 Toast。宿主创建一个覆盖整个虚拟桌面的透明、置顶、无标题栏、非激活窗口，Vue Lynx 在其中渲染可堆叠的通知卡片；管理面板是另一个独立的竖向无标题栏窗口。

## 已实现

- 一次性定时通知。
- 循环通知：
  - 固定间隔；
  - 自定义安全表达式间隔；
  - 可选起始时间（留空即从当前开始）；
  - 可选结束时间；
  - 可选最大循环次数；
  - 结束时间 / 次数任一先满足即停止。
- 定期通知：
  - 每天某时刻；
  - 每周一个或多个星期的某时刻，例如周五 19:30、周六和周日 20:00。
- 发布前变量解析：`{{now}}`、`{{date}}`、`{{time}}`、`{{task.name}}`、`{{run}}` 与自定义 `key=value` 变量。
- 卡片位置：左上、右上、屏幕中心、左下、右下。
- 卡片样式：纯色 / 玻璃感半透明样式、透明度、显示时长。
- 同一位置多通知纵向堆叠；底部位置向上增长。
- 全屏透明 Overlay 与管理 Panel 为两个独立 Win32 窗口。
- Overlay `TOPMOST + NOACTIVATE + click-through`，不抢焦点、不阻挡桌面操作。
- 面板自绘标题栏，可拖动、最小化、隐藏。
- 面板隐藏后任务继续运行；系统托盘可重新打开或退出。
- 空闲后台按需释放 Lynx 界面：面板隐藏 / 最小化后释放视图（正在编辑任务时保留草稿），通知覆盖层只在有卡片时创建，最后一张卡片消失后释放；Release 关闭 DevTool 和 LogBox。
- 本地持久化到 `%LOCALAPPDATA%\LynxNotify\state.json`。
- Web Preview mock：没有 Windows NativeModule 时，也能在浏览器查看和操作面板 UI；`overlay.web.bundle` 会展示堆叠卡片样例。
- `AGENTS.md`：按 Lynx 面向 AI 的建议提供项目级 agent 上下文。

## 项目结构

```text
lynx-notify-desktop/
├─ frontend/                   # Vue Lynx / Rspeedy
│  ├─ lynx.config.ts           # panel + overlay 两个 entry
│  └─ src/
│     ├─ bridge.ts             # NotifyHost NativeModule + Web mock
│     ├─ panel.ts
│     ├─ overlay.ts
│     ├─ panel/                 # 面板页面、表单组件和状态工具
│     │  ├─ PanelApp.vue
│     │  ├─ components/
│     │  ├─ constants.ts
│     │  └─ utils/task.ts
│     └─ overlay/               # 覆盖层卡片、堆叠和动画逻辑
│        ├─ OverlayApp.vue
│        ├─ components/
│        ├─ composables/useNotificationStack.ts
│        └─ types.ts
├─ native/                     # C++17 + Win32 + LynxSDK 4.0
│  ├─ CMakeLists.txt
│  ├─ thirdparty/lynx/         # 这里放官方 Windows LynxSDK
│  └─ src/
│     ├─ AppController.*
│     ├─ NativeLynxWindow.*
│     ├─ NativeModule.*
│     ├─ TaskEngine.*
│     ├─ ExpressionEvaluator.*
│     ├─ TemplateRenderer.*
│     └─ ...
├─ scripts/
│  ├─ setup-lynx-sdk.ps1
│  └─ build.ps1
├─ tests/
│  └─ core_tests.cpp
├─ docs/architecture.md
└─ AGENTS.md
```

## 环境要求

- Windows 10/11 x64（建议 Windows 11）。
- Node.js 18.19+。
- Visual Studio 2022，安装 **Desktop development with C++** 工作负载。
- CMake 3.24+。
- 官方 Windows **LynxSDK 4.0.0**。

> LynxSDK 二进制没有打进本仓库，请按官方 Windows integration 文档下载或自行构建。

## 1. 前端开发 / Web Preview

```powershell
cd frontend
npm install
npm run dev
```

Rspeedy 会输出 Web Preview URL。多入口下重点看：

```text
http://localhost:<port>/__web_preview?casename=panel.web.bundle
http://localhost:<port>/__web_preview?casename=overlay.web.bundle
```

`panel` 在 Web Preview 中自动使用 `bridge.ts` 的 mock 数据，因此不需要 NativeModule 就能预览管理面板。

## 2. 安装 LynxSDK

从官方 Lynx 4.0.0 Release 下载 Windows SDK zip，然后执行：

```powershell
.\scripts\setup-lynx-sdk.ps1 -ZipPath "D:\Downloads\lynx_sdk_windows_x64.zip"
```

脚本会寻找 `lynx.dll.lib` 并把 SDK 根目录整理到：

```text
native\thirdparty\lynx\
├─ include\
├─ lib\lynx.dll
├─ lib\lynx.dll.lib
├─ data\
├─ lynx_core.js
└─ lynx_core_dev.js
```

## 3. 一键构建 Windows App

在仓库根目录：

```powershell
.\scripts\build.ps1
```

如果 PowerShell 执行策略阻止未签名脚本，请使用当前进程绕过策略执行，不会修改系统级策略：

```powershell
pwsh -NoProfile -ExecutionPolicy Bypass -File .\scripts\build.ps1
```

默认构建 Release；完成后通常位于：

```text
output\Release\LynxNotify.exe
output\LynxNotify-<version>.zip
```

脚本会先执行 Vue Lynx production build，再通过 CMake 构建 Win32 host，把 `.lynx.bundle`、`lynx.dll`、`data` 和 Lynx core 文件复制到 exe 目录，最后将整个 Release 运行目录压缩为版本包。版本号读取自 `frontend/package.json`。

如已经执行过 `npm install`：

```powershell
.\scripts\build.ps1 -SkipNpmInstall
```

对应的绕过策略写法：

```powershell
pwsh -NoProfile -ExecutionPolicy Bypass -File .\scripts\build.ps1 -SkipNpmInstall
```

## 调度语义

一次性触发时间、循环起始时间和结束时间按本地时区输入，支持 `YYYY-MM-DD HH:mm` 和 `YYYY-MM-DD HH:mm:ss`（例如 `2026-10-09 12:00:00`），省略秒数时按 0 秒处理。

### 一次性

到达 `atMs` 后发布一次并自动停用。若应用关闭期间错过，到下次启动时会立即补发一次。

### 循环

任务列表中的固定循环间隔按时、分、秒显示，并省略为零的单位，例如 `1800s` 显示为 `30分`，`3661s` 显示为 `1时1分1秒`。

第一次触发时间：

- 设置 `startAtMs`：从指定时刻开始；
- 未设置：保存任务时即开始。

之后每次发布完成后计算下一次间隔。应用启动或重新启用任务时，跳过已经逾期的循环通知，从恢复时刻加上一个间隔作为下次触发时间，不立即补发，也不增加执行次数；尚未到期的触发时间保持不变。恢复后的下次触发时间若超过结束时间，任务会停用。

### 自定义间隔函数

不是任意 JavaScript，而是一个小型安全表达式 DSL，**返回秒数**：

```text
60
max(10, 60 - run * 5)
clamp(last / 1000 * 1.2, 10, 300)
```

变量：

- `run`：刚完成的第几次循环；
- `last`：距离上次发布的毫秒数。

函数：`min`、`max`、`clamp`、`abs`、`floor`、`ceil`。

这样既满足“自定义间隔函数”，又避免把任意 JS `eval` 放进后台调度器。

### 定期

按 Windows 本地时区计算。应用关闭期间错过的定期时刻默认不补发，启动后直接计算下一个未来时刻。

## 变量

标题和正文都支持：

```text
{{now}}        2026-08-19 13:00:00
{{date}}       2026-08-19
{{time}}       13:00:00
{{task.name}}  当前任务名称
{{run}}        本次运行序号
```

自定义变量在编辑器中每行输入：

```text
name=葡萄
project=Lynx Notify
```

然后正文可以写：

```text
{{name}}，{{project}} 的第 {{run}} 次提醒到了，现在是 {{time}}。
```

**解析发生在真正发布卡片前**，而不是创建任务时。

## 透明 Overlay

Native host 使用虚拟桌面坐标：

```cpp
SM_XVIRTUALSCREEN
SM_YVIRTUALSCREEN
SM_CXVIRTUALSCREEN
SM_CYVIRTUALSCREEN
```

因此窗口会覆盖所有显示器组成的虚拟桌面。Overlay 使用：

- `WS_POPUP`
- `WS_EX_TOPMOST`
- `WS_EX_TOOLWINDOW`
- `WS_EX_NOACTIVATE`
- `WS_EX_LAYERED`
- `WS_EX_TRANSPARENT`
- `WM_NCHITTEST -> HTTRANSPARENT`

所以透明区域不会挡住鼠标，也不会抢占当前应用焦点。

## 关于“毛玻璃”

当前 `glass` 模式实现的是适合 Lynx Desktop 的**半透明玻璃视觉**（半透明背景 + 高光边框 + 阴影）。它没有使用 Web 的 `backdrop-filter`，因为本项目不是浏览器 DOM，且当前 Windows Lynx/XElement 对真实背景模糊的覆盖仍需要结合你实际使用的 SDK 后端验证。

如果后续确认 Windows Clay 后端的 `<blur-view>` 在目标 SDK 中可以直接使用，可以只替换 `OverlayApp.vue` 的 card 容器，不需要改任务系统或窗口架构。

## 核心逻辑测试

仓库提供 Linux/macOS 也可运行的 C++ 核心测试（不依赖 LynxSDK / Win32）：

```bash
./tests/run-core-tests.sh
```

覆盖 JSON、间隔表达式、模板变量和 TaskEngine 基础状态操作。

Windows 上可在安装 SDK、构建前端后运行独立的视图生命周期测试（使用临时状态文件）：

```powershell
cmake -S native -B native/build -A x64 -DLYNX_NOTIFY_BUILD_TESTS=ON
cmake --build native/build --config Release --target LynxNotify LynxNotifyLifecycleTests
.\native\build\tests\Release\LynxNotifyLifecycleTests.exe
```

覆盖隐藏 / 最小化后的视图释放与恢复、编辑草稿保留、通知覆盖层创建与释放，以及没有界面时的后台调度。

## 当前边界

这是一个可继续开发的 MVP 源码，而不是已经签名分发的安装包。当前环境不是 Windows，且源码包不包含 LynxSDK 二进制，所以这里无法替你实际链接出 `LynxNotify.exe`；Windows 专属部分遵循官方 CMake / `LynxEnv` / `LynxView::Builder` / `LoadTemplate` 的集成形态，并提供了 PowerShell 构建脚本。

多显示器目前采用“一张覆盖整个虚拟桌面的 Overlay”。如果不同显示器 DPI 差异很大，下一步建议升级为每显示器一个透明 Overlay HWND，但对前端仍保持同一个通知队列抽象。

## 官方参考

- Vue Lynx Quick Start: https://vue.lynxjs.org/guide/quick-start
- Lynx AI: https://lynxjs.org/zh/ai
- Integrate Lynx with Existing Apps / Windows: https://lynxjs.org/guide/start/integrate-with-existing-apps
