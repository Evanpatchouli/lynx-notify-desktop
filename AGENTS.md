# Lynx Notify — coding-agent context

This repository is a Windows desktop notification scheduler built without Electron.

## Architecture

- `frontend/`: Vue Lynx UI. It produces two Lynx bundles: `panel` and `overlay`.
- `native/`: C++17 / Win32 host that embeds LynxSDK 4.0, owns windows, persistence, scheduling, variables, tray behavior and the `NotifyHost` NativeModule.
- Panel window: narrow frameless interactive window with a Vue-rendered title bar.
- Overlay window: virtual-screen-sized transparent topmost click-through window. Vue Lynx renders stacked notification cards into it.

## Important constraints

1. Do not introduce Electron, Tauri, WebView-only shells, or browser notification APIs.
2. Keep scheduling and persistence in the native host so notifications continue while the panel is hidden.
3. Frontend ↔ host communication goes through the global Lynx NativeModule named `NotifyHost`.
4. Notification template variables must be resolved immediately before a card is published.
5. Bottom-corner stacks grow upward; top-corner stacks grow downward; center is vertically centered.
6. The overlay must remain non-activating and click-through unless a future feature explicitly requires interactive cards.
7. Prefer small implementation-focused docs. Keep this project easy to iterate on.

## Useful commands

```powershell
cd frontend
npm install
npm run dev
npm run build

# After placing LynxSDK 4.0 under native/thirdparty/lynx:
cd ..
./scripts/build.ps1
```

## Lynx notes

Use the current Lynx and Vue Lynx documentation when changing framework-facing APIs. Do not assume ordinary browser DOM APIs exist inside a Lynx native bundle.
