import type { AppState, CardSettings, NotificationTask, OverlayState } from './types';
import { DEFAULT_SETTINGS } from './types';

function now() {
  return Date.now();
}

function hasNativeHost(): boolean {
  try {
    return typeof NativeModules !== 'undefined' && !!NativeModules?.NotifyHost;
  } catch {
    return false;
  }
}

const mockTasks: NotificationTask[] = [
  {
    id: 'mock-1',
    name: '午休提醒',
    type: 'schedule',
    enabled: true,
    titleTemplate: '该休息一下了',
    bodyTemplate: '{{time}} · 离开屏幕几分钟',
    variables: {},
    createdAtMs: now(),
    lastRunAtMs: 0,
    nextRunAtMs: now() + 3_600_000,
    runCount: 12,
    once: { atMs: 0 },
    interval: { mode: 'fixed', fixedSec: 60, expression: '60', startAtMs: 0, endAtMs: 0, maxRuns: 0 },
    schedule: { mode: 'daily', hour: 13, minute: 0, weekdays: [] },
  },
  {
    id: 'mock-2',
    name: '喝水',
    type: 'interval',
    enabled: true,
    titleTemplate: '喝水提醒',
    bodyTemplate: '第 {{run}} 次提醒 · {{now}}',
    variables: {},
    createdAtMs: now(),
    lastRunAtMs: now() - 1_800_000,
    nextRunAtMs: now() + 1_800_000,
    runCount: 3,
    once: { atMs: 0 },
    interval: { mode: 'fixed', fixedSec: 3600, expression: '3600', startAtMs: 0, endAtMs: 0, maxRuns: 8 },
    schedule: { mode: 'daily', hour: 13, minute: 0, weekdays: [] },
  },
];

let mockState: AppState = {
  settings: { ...DEFAULT_SETTINGS },
  tasks: mockTasks,
};

const mockOverlay: OverlayState = {
  settings: { ...DEFAULT_SETTINGS },
  cards: [
    {
      id: 'preview-a',
      taskId: '',
      title: '会议将在 10 分钟后开始',
      body: '项目周会 · 14:30',
      createdAtMs: now(),
      expiresAtMs: now() + 999_999,
    },
    {
      id: 'preview-b',
      taskId: '',
      title: '喝水提醒',
      body: '保持专注，也别忘了补充水分。',
      createdAtMs: now() - 10_000,
      expiresAtMs: now() + 999_999,
    },
    {
      id: 'preview-c',
      taskId: '',
      title: '构建完成',
      body: 'benefits-ui 已通过全部检查。',
      createdAtMs: now() - 20_000,
      expiresAtMs: now() + 999_999,
    },
  ],
};

function native() {
  return NativeModules?.NotifyHost;
}

export const hostBridge = {
  isNative: hasNativeHost,

  getState(): AppState {
    if (hasNativeHost()) {
      try {
        return JSON.parse(native()!.getState()) as AppState;
      } catch (error) {
        console.error('NotifyHost.getState failed', error);
      }
    }
    return JSON.parse(JSON.stringify(mockState)) as AppState;
  },

  getOverlayState(): OverlayState {
    if (hasNativeHost()) {
      try {
        return JSON.parse(native()!.getOverlayState()) as OverlayState;
      } catch (error) {
        console.error('NotifyHost.getOverlayState failed', error);
      }
    }
    mockOverlay.settings = { ...mockState.settings };
    return JSON.parse(JSON.stringify(mockOverlay)) as OverlayState;
  },

  upsertTask(task: NotificationTask): NotificationTask {
    if (hasNativeHost()) {
      return JSON.parse(native()!.upsertTask(JSON.stringify(task))) as NotificationTask;
    }
    const next = { ...task, id: task.id || `mock-${Date.now()}` };
    const index = mockState.tasks.findIndex((item) => item.id === next.id);
    if (index >= 0) mockState.tasks[index] = next;
    else mockState.tasks.unshift(next);
    return next;
  },

  deleteTask(id: string): boolean {
    if (hasNativeHost()) return native()!.deleteTask(id);
    mockState.tasks = mockState.tasks.filter((item) => item.id !== id);
    return true;
  },

  setTaskEnabled(id: string, enabled: boolean): boolean {
    if (hasNativeHost()) return native()!.setTaskEnabled(id, enabled);
    const task = mockState.tasks.find((item) => item.id === id);
    if (task) task.enabled = enabled;
    return !!task;
  },

  updateSettings(settings: CardSettings): boolean {
    if (hasNativeHost()) return native()!.updateSettings(JSON.stringify(settings));
    mockState.settings = { ...settings };
    return true;
  },

  previewNotification(title: string, body: string): boolean {
    if (hasNativeHost()) {
      return native()!.previewNotification(JSON.stringify({ title, body }));
    }
    console.log('[web preview] notification preview:', title, body);
    return true;
  },

  dismissNotification(id: string): boolean {
    if (hasNativeHost()) return native()!.dismissNotification(id);
    const before = mockOverlay.cards.length;
    mockOverlay.cards = mockOverlay.cards.filter((card) => card.id !== id);
    return mockOverlay.cards.length !== before;
  },

  windowCommand(command: 'drag' | 'minimize' | 'hide' | 'quit'): void {
    if (hasNativeHost()) native()!.windowCommand(command);
  },
};
