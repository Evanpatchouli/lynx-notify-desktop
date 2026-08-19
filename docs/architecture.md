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

The panel and overlay are independent native windows in the same process. Closing the panel hides it to the tray; the scheduler continues running. Exiting from the tray terminates the process.

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
