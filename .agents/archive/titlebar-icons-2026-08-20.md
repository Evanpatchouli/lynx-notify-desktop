# 标题栏按钮图标不可见

## 结果

已修复并完成真实 Windows 原生窗口验收。

## 根因

当前 LynxSDK 4.0 Windows 预编译核心没有注册模板可创建的独立 `svg` 视图。组件生成的 SVG 内容、尺寸和 bundle 均正确，但 Clay 端没有对应视图工厂，所以按钮区域存在而图标为空白。

## 实施

- 保留两份 SVG 作为设计源。
- 由 SVG 原始坐标和颜色生成 `28 × 28` RGBA 透明 PNG。
- `PanelTitleBar.vue` 改用核心已注册的 `<image>`，显示尺寸保持 `14 × 14`，模式为 `aspectFit`。
- 增加回归测试，校验 SVG 设计源、PNG 签名/尺寸/RGBA 格式，以及组件不得再输出 `<svg>`。

## 验证

- TDD 红灯：当前 `<svg>` 实现下 1 项通过、2 项失败。
- `frontend` 目录执行 `npm test`：3/3 通过。
- `npm run build`：Lynx 和 Web bundle 构建成功。
- `scripts/build.ps1 -Configuration Release -SkipNpmInstall`：Release EXE 和 ZIP 构建成功。
- 前端与 Release `panel.lynx.bundle` SHA-256 均为 `D735CE538055FC2609C559D28A8EC463191B42A98382D3643D222A59D8EBC258`。
- Win32 原生截图：`430 × 760` 面板中最小化和关闭图标均清晰可见。
- Win32 交互验证：最小化按钮使窗口进入最小化状态；关闭按钮隐藏窗口；恢复后窗口可见。
- 本次触碰的文本文件均为 UTF-8 无 BOM。
