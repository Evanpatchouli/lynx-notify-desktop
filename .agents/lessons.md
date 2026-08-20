# 技术经验

## Lynx Windows SVG 与图像

- bundle 的 `targetSdkVersion = 3.2` 是兼容目标，不等于宿主实际 SDK 版本；运行时版本应由 SDK 版本接口确认。
- API 文档标注 Desktop 支持，不足以证明某个 Windows 预编译 SDK 已注册对应模板元素；还要核对实际交付物和原生视图注册表。
- DLL 包含 SVG 解码后端，不等于模板中的 `<svg>` 有对应视图工厂。必须区分“能解码 SVG 资源”和“能创建 SVG 元素”。
- 对当前 LynxSDK 4.0 Windows 预编译核心，静态小图标可保留 SVG 设计源，再通过已注册的 `<image>` 渲染透明 PNG。
- 构建成功、bundle 内容正确和资源有效都不能替代真实 Windows 截图与交互验收。
- 原生视觉问题在真实窗口验收前不能标记为已修复，也不应归因于自动化工具不可用。
