import type { NotificationTask } from '../../types';
import { WEEKDAYS } from '../constants';

export function createEmptyTask(): NotificationTask {
  const now = Date.now();
  return {
    id: '',
    name: '新的通知',
    type: 'once',
    enabled: true,
    titleTemplate: '提醒',
    bodyTemplate: '现在是 {{time}}',
    variables: {},
    createdAtMs: now,
    lastRunAtMs: 0,
    nextRunAtMs: 0,
    runCount: 0,
    once: { atMs: now + 5 * 60_000 },
    interval: {
      mode: 'fixed',
      fixedSec: 3600,
      expression: 'max(10, 60 - run * 5)',
      startAtMs: 0,
      endAtMs: 0,
      maxRuns: 0,
    },
    schedule: { mode: 'daily', hour: 13, minute: 0, weekdays: [] },
  };
}

export function cloneTask(task: NotificationTask): NotificationTask {
  return JSON.parse(JSON.stringify(task)) as NotificationTask;
}

function pad(value: number) {
  return String(value).padStart(2, '0');
}

export function formatDateTime(ms: number): string {
  if (!ms) return '';
  const date = new Date(ms);
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

export function parseDateTime(value: string): number {
  const match = value.trim().match(/^(\d{4})-(\d{1,2})-(\d{1,2})[ T](\d{1,2}):(\d{1,2})$/);
  if (!match) return 0;
  const [, y, m, d, hh, mm] = match;
  const result = new Date(Number(y), Number(m) - 1, Number(d), Number(hh), Number(mm), 0, 0);
  return Number.isNaN(result.getTime()) ? 0 : result.getTime();
}

export function formatTime(ms: number): string {
  return ms ? formatDateTime(ms) : '等待计算';
}

function formatInterval(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = Number((seconds % 60).toFixed(10));
  return [
    hours ? `${hours}时` : '',
    minutes ? `${minutes}分` : '',
    remainingSeconds ? `${remainingSeconds}秒` : '',
  ].join('') || '0秒';
}

export function formatTaskKind(task: NotificationTask): string {
  if (task.type === 'once') return `一次 · ${formatDateTime(task.once.atMs)}`;
  if (task.type === 'interval') {
    if (task.interval.mode === 'fixed') return `循环 · 每 ${formatInterval(task.interval.fixedSec)}`;
    return `循环 · ƒ(${task.interval.expression})`;
  }
  if (task.schedule.mode === 'daily') return `每天 · ${pad(task.schedule.hour)}:${pad(task.schedule.minute)}`;
  const labels = task.schedule.weekdays
    .map((day) => WEEKDAYS.find((item) => item.value === day)?.label ?? day)
    .join('、');
  return `每周${labels} · ${pad(task.schedule.hour)}:${pad(task.schedule.minute)}`;
}

export function parseVariables(text: string): Record<string, string> {
  const result: Record<string, string> = {};
  for (const line of text.split('\n')) {
    const index = line.indexOf('=');
    if (index <= 0) continue;
    const key = line.slice(0, index).trim();
    const value = line.slice(index + 1).trim();
    if (key) result[key] = value;
  }
  return result;
}
