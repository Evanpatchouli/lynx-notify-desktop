export type TaskType = 'once' | 'interval' | 'schedule';
export type CardPosition = 'top-left' | 'top-right' | 'center' | 'bottom-left' | 'bottom-right';
export type CardStyle = 'solid' | 'glass';

export interface CardSettings {
  position: CardPosition;
  style: CardStyle;
  opacity: number;
  durationSec: number;
  gap: number;
  cardWidth: number;
}

export interface OnceConfig {
  atMs: number;
}

export interface IntervalConfig {
  mode: 'fixed' | 'expression';
  fixedSec: number;
  expression: string;
  startAtMs: number;
  endAtMs: number;
  maxRuns: number;
}

export interface ScheduleConfig {
  mode: 'daily' | 'weekly';
  hour: number;
  minute: number;
  weekdays: number[];
}

export interface NotificationTask {
  id: string;
  name: string;
  type: TaskType;
  enabled: boolean;
  titleTemplate: string;
  bodyTemplate: string;
  variables: Record<string, string>;
  createdAtMs: number;
  lastRunAtMs: number;
  nextRunAtMs: number;
  runCount: number;
  once: OnceConfig;
  interval: IntervalConfig;
  schedule: ScheduleConfig;
}

export interface AppState {
  settings: CardSettings;
  tasks: NotificationTask[];
}

export interface ActiveNotification {
  id: string;
  taskId: string;
  title: string;
  body: string;
  createdAtMs: number;
  expiresAtMs: number;
}

export interface OverlayState {
  settings: CardSettings;
  cards: ActiveNotification[];
}

export const DEFAULT_SETTINGS: CardSettings = {
  position: 'top-right',
  style: 'glass',
  opacity: 0.92,
  durationSec: 8,
  gap: 12,
  cardWidth: 340,
};
