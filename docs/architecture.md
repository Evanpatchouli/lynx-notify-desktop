# Architecture

## Runtime layout

```text
Win32 process
├─ TaskEngine (scheduler + persistence + variable rendering)
├─ NotifyHost NativeModule
├─ Panel HWND (frameless)
│  └─ LynxView -> panel.lynx.bundle
└─ Overlay HWND (transparent/topmost/click-through, full virtual screen)
   └─ LynxView -> overlay.lynx.bundle
```

The panel and overlay are independent native windows in the same process. Closing or minimizing the panel releases its Lynx view; the small panel HWND stays alive for tray callbacks and a native notification timer. Reopening rebuilds the view from host state. While editing a task, the view stays alive to preserve unsaved drafts. Exiting from the tray terminates the process.

While the task list is open, the panel polls `NotifyHost.getState()` every 500 ms so next execution times and completion/disabled states follow the native scheduler automatically. Unchanged state does not trigger a list update. Polling skips the settings and editor pages to preserve local edits, and its timer is cleared when the panel component is unmounted.

The overlay is created only while notification cards are active and destroyed after the last card's exit animation. An idle background process performs only a native card-presence check, with no overlay JavaScript polling. All window/view lifetime changes run on the Win32 message thread; NativeModule window commands are posted to that thread. Release builds disable Lynx DevTool and LogBox.

## Task model

All tasks share:

- `id`, `name`, `enabled`
- `titleTemplate`, `bodyTemplate`
- custom `variables`
- runtime metadata: `runCount`, `lastRunAtMs`, `nextRunAtMs`

Task kinds:

- `once`: one absolute local timestamp.
- `interval`: fixed seconds or a safe arithmetic expression returning seconds. Optional start time, end time, and max run count. The first stop condition reached wins.
- `schedule`: daily or selected weekdays at a clock time.

On startup or re-enabling an interval task, an overdue notification is skipped. Its next deadline is the resume time plus the computed interval; `runCount` and `lastRunAtMs` remain unchanged. Future deadlines are preserved, and the end time / run limit still apply.

## Variables

Built-ins are evaluated immediately before display:

- `{{now}}`
- `{{date}}`
- `{{time}}`
- `{{task.name}}`
- `{{run}}`

Custom `key=value` variables are available as `{{key}}`.

## Interval expression DSL

The expression returns seconds and intentionally does **not** execute arbitrary JavaScript. Available values/functions:

- variables: `run`, `last`
- operators: `+ - * / %`, parentheses
- functions: `min`, `max`, `clamp`, `abs`, `floor`, `ceil`

Examples:

- `60`
- `max(10, 60 - run * 5)`
- `clamp(last / 1000 * 1.2, 10, 300)`

## Persistence

State is stored in `%LOCALAPPDATA%\LynxNotify\state.json` and written atomically through a temporary file.
