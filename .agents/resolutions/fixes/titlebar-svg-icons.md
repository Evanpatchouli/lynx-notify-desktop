# 标题栏按钮图标不可见

## 现象

Windows 原生面板的最小化和关闭按钮区域存在，但两个图标完全不可见。

## 根因

- 运行时确为 LynxSDK 4.0，并加载了最新 bundle。
- SVG XML、`content` 绑定和显式尺寸均正确。
- 当前 Windows 4.0 预编译核心没有注册模板可创建的独立 `svg` 视图，所以 `<svg>` 不会绘制。

## 修复

- 保留 `window-minimize.svg` 与 `window-close.svg` 作为设计源。
- 生成 `28 × 28` RGBA 透明 PNG。
- `PanelTitleBar.vue` 使用 `<image :src="..." mode="aspectFit">`，显式显示为 `14 × 14`。
- 回归测试同时约束资源有效性、组件使用 `image`，以及不得重新引入 `<svg>` 或字体字形。

## 验证

- `npm test`：3/3 通过。
- `npm run build`：通过。
- Release 构建和打包：通过。
- 前端与发布 bundle SHA-256 一致：`D735CE538055FC2609C559D28A8EC463191B42A98382D3643D222A59D8EBC258`。
- 真实 Windows `430 × 760` 面板截图中两个图标可见。
- 最小化按钮、关闭隐藏按钮的实际窗口状态变化均验证通过。
