<script setup lang="ts">
import { computed, ref } from 'vue-lynx';
import { hostBridge } from './bridge';
import type { AppState, CardPosition, CardStyle, NotificationTask, TaskType } from './types';

const state = ref<AppState>(hostBridge.getState());
const page = ref<'home' | 'settings' | 'editor'>('home');
const draft = ref<NotificationTask>(createEmptyTask());
const onceAtText = ref('');
const intervalStartText = ref('');
const intervalEndText = ref('');
const variableText = ref('');
const toast = ref('');
const builtInVariableHelp = '{{now}}  {{date}}  {{time}}  {{task.name}}  {{run}}';

const weekdays = [
  { value: 1, label: '一' },
  { value: 2, label: '二' },
  { value: 3, label: '三' },
  { value: 4, label: '四' },
  { value: 5, label: '五' },
  { value: 6, label: '六' },
  { value: 0, label: '日' },
];

const positionOptions: Array<{ value: CardPosition; label: string }> = [
  { value: 'top-left', label: '左上' },
  { value: 'top-right', label: '右上' },
  { value: 'center', label: '屏幕中心' },
  { value: 'bottom-left', label: '左下' },
  { value: 'bottom-right', label: '右下' },
];

const typeLabel = computed(() => ({ once: '一次性', interval: '循环', schedule: '定期' }[draft.value.type]));

function createEmptyTask(): NotificationTask {
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

function refresh() {
  state.value = hostBridge.getState();
}

function showToast(message: string) {
  toast.value = message;
  setTimeout(() => {
    if (toast.value === message) toast.value = '';
  }, 1800);
}

function inputValue(event: any): string {
  return String(event?.detail?.value ?? event?.value ?? event?.target?.value ?? '');
}

function numValue(event: any, fallback = 0): number {
  const value = Number(inputValue(event));
  return Number.isFinite(value) ? value : fallback;
}

function pad(value: number) {
  return String(value).padStart(2, '0');
}

function formatDateTime(ms: number): string {
  if (!ms) return '';
  const date = new Date(ms);
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function parseDateTime(value: string): number {
  const match = value.trim().match(/^(\d{4})-(\d{1,2})-(\d{1,2})[ T](\d{1,2}):(\d{1,2})$/);
  if (!match) return 0;
  const [, y, m, d, hh, mm] = match;
  const result = new Date(Number(y), Number(m) - 1, Number(d), Number(hh), Number(mm), 0, 0);
  return Number.isNaN(result.getTime()) ? 0 : result.getTime();
}

function formatTime(ms: number): string {
  if (!ms) return '等待计算';
  return formatDateTime(ms);
}

function taskKind(task: NotificationTask): string {
  if (task.type === 'once') return `一次 · ${formatDateTime(task.once.atMs)}`;
  if (task.type === 'interval') {
    if (task.interval.mode === 'fixed') return `循环 · 每 ${task.interval.fixedSec}s`;
    return `循环 · ƒ(${task.interval.expression})`;
  }
  if (task.schedule.mode === 'daily') return `每天 · ${pad(task.schedule.hour)}:${pad(task.schedule.minute)}`;
  const labels = task.schedule.weekdays.map((day) => weekdays.find((item) => item.value === day)?.label ?? day).join('、');
  return `每周${labels} · ${pad(task.schedule.hour)}:${pad(task.schedule.minute)}`;
}

function openCreate() {
  draft.value = createEmptyTask();
  onceAtText.value = formatDateTime(draft.value.once.atMs);
  intervalStartText.value = '';
  intervalEndText.value = '';
  variableText.value = '';
  page.value = 'editor';
}

function openEdit(task: NotificationTask) {
  draft.value = JSON.parse(JSON.stringify(task)) as NotificationTask;
  onceAtText.value = formatDateTime(task.once.atMs);
  intervalStartText.value = formatDateTime(task.interval.startAtMs);
  intervalEndText.value = formatDateTime(task.interval.endAtMs);
  variableText.value = Object.entries(task.variables)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n');
  page.value = 'editor';
}

function setTaskType(type: TaskType) {
  draft.value.type = type;
}

function parseVariables(): Record<string, string> {
  const result: Record<string, string> = {};
  for (const line of variableText.value.split('\n')) {
    const index = line.indexOf('=');
    if (index <= 0) continue;
    const key = line.slice(0, index).trim();
    const value = line.slice(index + 1).trim();
    if (key) result[key] = value;
  }
  return result;
}

function saveTask() {
  if (!draft.value.name.trim()) {
    showToast('请输入任务名称');
    return;
  }

  draft.value.variables = parseVariables();
  if (draft.value.type === 'once') {
    const at = parseDateTime(onceAtText.value);
    if (!at) return showToast('时间格式应为 YYYY-MM-DD HH:mm');
    draft.value.once.atMs = at;
  }
  if (draft.value.type === 'interval') {
    if (intervalStartText.value.trim()) {
      const start = parseDateTime(intervalStartText.value);
      if (!start) return showToast('起始时间格式不正确');
      draft.value.interval.startAtMs = start;
    } else {
      draft.value.interval.startAtMs = 0;
    }
    if (intervalEndText.value.trim()) {
      const end = parseDateTime(intervalEndText.value);
      if (!end) return showToast('结束时间格式不正确');
      draft.value.interval.endAtMs = end;
    } else {
      draft.value.interval.endAtMs = 0;
    }
    if (draft.value.interval.mode === 'fixed' && draft.value.interval.fixedSec <= 0) {
      return showToast('固定间隔必须大于 0 秒');
    }
    if (draft.value.interval.mode === 'expression' && !draft.value.interval.expression.trim()) {
      return showToast('请输入自定义间隔表达式');
    }
  }
  if (draft.value.type === 'schedule') {
    draft.value.schedule.hour = Math.max(0, Math.min(23, Math.floor(draft.value.schedule.hour)));
    draft.value.schedule.minute = Math.max(0, Math.min(59, Math.floor(draft.value.schedule.minute)));
    if (draft.value.schedule.mode === 'weekly' && draft.value.schedule.weekdays.length === 0) {
      return showToast('至少选择一个星期');
    }
  }

  hostBridge.upsertTask(draft.value);
  refresh();
  page.value = 'home';
  showToast('任务已保存');
}

function toggleTask(task: NotificationTask) {
  hostBridge.setTaskEnabled(task.id, !task.enabled);
  refresh();
}

function deleteTask(task: NotificationTask) {
  hostBridge.deleteTask(task.id);
  refresh();
  showToast('任务已删除');
}

function toggleWeekday(day: number) {
  const values = draft.value.schedule.weekdays;
  const index = values.indexOf(day);
  if (index >= 0) values.splice(index, 1);
  else values.push(day);
}

function updatePosition(value: CardPosition) {
  state.value.settings.position = value;
  saveSettings(false);
}

function updateStyle(value: CardStyle) {
  state.value.settings.style = value;
  saveSettings(false);
}

function adjustOpacity(delta: number) {
  const next = Math.round((state.value.settings.opacity + delta) * 100) / 100;
  state.value.settings.opacity = Math.max(0.3, Math.min(1, next));
  saveSettings(false);
}

function adjustDuration(delta: number) {
  state.value.settings.durationSec = Math.max(2, Math.min(60, state.value.settings.durationSec + delta));
  saveSettings(false);
}

function saveSettings(message = true) {
  hostBridge.updateSettings(state.value.settings);
  if (message) showToast('卡片设置已保存');
}

function previewCard() {
  hostBridge.updateSettings(state.value.settings);
  hostBridge.previewNotification('通知卡片预览', `这是 ${state.value.settings.style === 'glass' ? '毛玻璃' : '纯色'} 样式 · ${Math.round(state.value.settings.opacity * 100)}%`);
  showToast(hostBridge.isNative() ? '预览已发送到桌面' : 'Web Preview 中仅演示面板');
}

function dragWindow() {
  hostBridge.windowCommand('drag');
}

function nav(target: 'home' | 'settings') {
  if (target === 'home') refresh();
  page.value = target;
}
</script>

<template>
  <view class="app-shell">
    <view class="titlebar">
      <view class="drag-zone" @mousedown="dragWindow" @touchstart="dragWindow">
        <view class="brand-mark"><text class="brand-dot">●</text></view>
        <text class="brand-title">Lynx Notify</text>
      </view>
      <view class="window-actions">
        <view class="window-button" @tap="hostBridge.windowCommand('minimize')"><text class="window-glyph">—</text></view>
        <view class="window-button close" @tap="hostBridge.windowCommand('hide')"><text class="window-glyph">×</text></view>
      </view>
    </view>

    <view v-if="page === 'home'" class="page">
      <view class="page-head">
        <view>
          <text class="eyebrow">TASK CENTER</text>
          <text class="page-title">通知任务</text>
          <text class="page-subtitle">{{ state.tasks.length }} 个任务 · Native scheduler</text>
        </view>
        <view class="primary-button compact" @tap="openCreate"><text class="primary-button-text">＋ 新建</text></view>
      </view>

      <scroll-view class="task-list" scroll-orientation="vertical">
        <view v-if="state.tasks.length === 0" class="empty-card">
          <text class="empty-icon">◎</text>
          <text class="empty-title">还没有通知任务</text>
          <text class="empty-copy">创建一次性、循环或定期通知。</text>
        </view>

        <view v-for="task in state.tasks" :key="task.id" class="task-card" @tap="openEdit(task)">
          <view class="task-card-top">
            <view class="task-main">
              <view :class="['task-type-dot', task.type]"></view>
              <view class="task-copy">
                <text class="task-name">{{ task.name }}</text>
                <text class="task-kind">{{ taskKind(task) }}</text>
              </view>
            </view>
            <view :class="['switch', task.enabled ? 'on' : 'off']" @tap.stop="toggleTask(task)">
              <view class="switch-knob"></view>
            </view>
          </view>
          <view class="task-message">
            <text class="task-message-title">{{ task.titleTemplate }}</text>
            <text class="task-message-body">{{ task.bodyTemplate }}</text>
          </view>
          <view class="task-footer">
            <text class="next-run">下次 {{ task.enabled ? formatTime(task.nextRunAtMs) : '已停用' }}</text>
            <view class="delete-button" @tap.stop="deleteTask(task)"><text class="delete-text">删除</text></view>
          </view>
        </view>
        <view class="list-spacer"></view>
      </scroll-view>
    </view>

    <view v-else-if="page === 'settings'" class="page">
      <view class="page-head">
        <view>
          <text class="eyebrow">APPEARANCE</text>
          <text class="page-title">卡片设置</text>
          <text class="page-subtitle">全局控制通知卡片的位置和视觉效果</text>
        </view>
      </view>

      <scroll-view class="settings-scroll" scroll-orientation="vertical">
        <view class="settings-section">
          <text class="section-label">屏幕位置</text>
          <view class="option-grid">
            <view
              v-for="item in positionOptions"
              :key="item.value"
              :class="['choice-chip', state.settings.position === item.value ? 'selected' : '']"
              @tap="updatePosition(item.value)"
            >
              <text :class="['choice-text', state.settings.position === item.value ? 'selected' : '']">{{ item.label }}</text>
            </view>
          </view>
        </view>

        <view class="settings-section">
          <text class="section-label">卡片样式</text>
          <view class="segmented">
            <view :class="['segment', state.settings.style === 'solid' ? 'active' : '']" @tap="updateStyle('solid')">
              <text :class="['segment-text', state.settings.style === 'solid' ? 'active' : '']">纯色</text>
            </view>
            <view :class="['segment', state.settings.style === 'glass' ? 'active' : '']" @tap="updateStyle('glass')">
              <text :class="['segment-text', state.settings.style === 'glass' ? 'active' : '']">毛玻璃</text>
            </view>
          </view>
        </view>

        <view class="settings-section row-setting">
          <view>
            <text class="section-label">透明度</text>
            <text class="setting-hint">最低 30%</text>
          </view>
          <view class="stepper">
            <view class="step-button" @tap="adjustOpacity(-0.05)"><text class="step-text">−</text></view>
            <text class="step-value">{{ Math.round(state.settings.opacity * 100) }}%</text>
            <view class="step-button" @tap="adjustOpacity(0.05)"><text class="step-text">＋</text></view>
          </view>
        </view>

        <view class="settings-section row-setting">
          <view>
            <text class="section-label">显示时长</text>
            <text class="setting-hint">卡片自动消失</text>
          </view>
          <view class="stepper">
            <view class="step-button" @tap="adjustDuration(-1)"><text class="step-text">−</text></view>
            <text class="step-value">{{ state.settings.durationSec }}s</text>
            <view class="step-button" @tap="adjustDuration(1)"><text class="step-text">＋</text></view>
          </view>
        </view>

        <view class="preview-wrap">
          <text class="section-label">效果预览</text>
          <view :class="['preview-card', state.settings.style]" :style="{ opacity: state.settings.opacity }">
            <view class="preview-row">
              <view class="preview-icon"><text class="preview-icon-text">N</text></view>
              <view class="preview-copy">
                <text class="preview-title">通知卡片预览</text>
                <text class="preview-body">变量会在真正发布前解析 · {{ new Date().toLocaleTimeString() }}</text>
              </view>
            </view>
          </view>
          <view class="secondary-button" @tap="previewCard"><text class="secondary-button-text">发送桌面预览</text></view>
        </view>
        <view class="list-spacer"></view>
      </scroll-view>
    </view>

    <view v-else class="page editor-page">
      <view class="editor-head">
        <view class="back-button" @tap="page = 'home'"><text class="back-text">‹</text></view>
        <view class="editor-title-wrap">
          <text class="editor-title">{{ draft.id ? '编辑任务' : '新建任务' }}</text>
          <text class="editor-subtitle">{{ typeLabel }}通知</text>
        </view>
        <view class="save-small" @tap="saveTask"><text class="save-small-text">保存</text></view>
      </view>

      <scroll-view class="editor-scroll" scroll-orientation="vertical">
        <text class="field-label">任务类型</text>
        <view class="type-tabs">
          <view :class="['type-tab', draft.type === 'once' ? 'active' : '']" @tap="setTaskType('once')"><text :class="['type-tab-text', draft.type === 'once' ? 'active' : '']">一次性</text></view>
          <view :class="['type-tab', draft.type === 'interval' ? 'active' : '']" @tap="setTaskType('interval')"><text :class="['type-tab-text', draft.type === 'interval' ? 'active' : '']">循环</text></view>
          <view :class="['type-tab', draft.type === 'schedule' ? 'active' : '']" @tap="setTaskType('schedule')"><text :class="['type-tab-text', draft.type === 'schedule' ? 'active' : '']">定期</text></view>
        </view>

        <text class="field-label">任务名称</text>
        <input class="input" :value="draft.name" placeholder="例如：午休提醒" @input="draft.name = inputValue($event)" />

        <view v-if="draft.type === 'once'" class="conditional-box">
          <text class="field-label first">触发时间</text>
          <input class="input" :value="onceAtText" placeholder="2026-08-19 13:00" @input="onceAtText = inputValue($event)" />
        </view>

        <view v-if="draft.type === 'interval'" class="conditional-box">
          <text class="field-label first">间隔方式</text>
          <view class="segmented">
            <view :class="['segment', draft.interval.mode === 'fixed' ? 'active' : '']" @tap="draft.interval.mode = 'fixed'"><text :class="['segment-text', draft.interval.mode === 'fixed' ? 'active' : '']">固定间隔</text></view>
            <view :class="['segment', draft.interval.mode === 'expression' ? 'active' : '']" @tap="draft.interval.mode = 'expression'"><text :class="['segment-text', draft.interval.mode === 'expression' ? 'active' : '']">自定义函数</text></view>
          </view>

          <view v-if="draft.interval.mode === 'fixed'">
            <text class="field-label">间隔秒数</text>
            <input class="input" :value="String(draft.interval.fixedSec)" placeholder="3600" @input="draft.interval.fixedSec = numValue($event, 3600)" />
          </view>
          <view v-else>
            <text class="field-label">间隔表达式（返回秒）</text>
            <input class="input mono" :value="draft.interval.expression" placeholder="max(10, 60 - run * 5)" @input="draft.interval.expression = inputValue($event)" />
            <text class="field-help">支持 run / last 与 min、max、clamp、abs、floor、ceil，不执行任意 JS。</text>
          </view>

          <text class="field-label">起始时间（可选）</text>
          <input class="input" :value="intervalStartText" placeholder="留空 = 保存后立即开始计时" @input="intervalStartText = inputValue($event)" />
          <text class="field-label">结束时间（可选）</text>
          <input class="input" :value="intervalEndText" placeholder="YYYY-MM-DD HH:mm" @input="intervalEndText = inputValue($event)" />
          <text class="field-label">最大循环次数（0 = 不限制）</text>
          <input class="input" :value="String(draft.interval.maxRuns)" placeholder="0" @input="draft.interval.maxRuns = Math.max(0, Math.floor(numValue($event, 0)))" />
          <text class="field-help">结束时间和循环次数只要任一条件先满足，任务就会停止。</text>
        </view>

        <view v-if="draft.type === 'schedule'" class="conditional-box">
          <text class="field-label first">周期</text>
          <view class="segmented">
            <view :class="['segment', draft.schedule.mode === 'daily' ? 'active' : '']" @tap="draft.schedule.mode = 'daily'"><text :class="['segment-text', draft.schedule.mode === 'daily' ? 'active' : '']">每天</text></view>
            <view :class="['segment', draft.schedule.mode === 'weekly' ? 'active' : '']" @tap="draft.schedule.mode = 'weekly'"><text :class="['segment-text', draft.schedule.mode === 'weekly' ? 'active' : '']">每周</text></view>
          </view>
          <view v-if="draft.schedule.mode === 'weekly'">
            <text class="field-label">星期</text>
            <view class="weekday-row">
              <view v-for="day in weekdays" :key="day.value" :class="['weekday', draft.schedule.weekdays.includes(day.value) ? 'selected' : '']" @tap="toggleWeekday(day.value)">
                <text :class="['weekday-text', draft.schedule.weekdays.includes(day.value) ? 'selected' : '']">{{ day.label }}</text>
              </view>
            </view>
          </view>
          <view class="time-fields">
            <view class="time-field">
              <text class="field-label">小时</text>
              <input class="input" :value="String(draft.schedule.hour)" @input="draft.schedule.hour = numValue($event, 0)" />
            </view>
            <view class="time-field">
              <text class="field-label">分钟</text>
              <input class="input" :value="String(draft.schedule.minute)" @input="draft.schedule.minute = numValue($event, 0)" />
            </view>
          </view>
        </view>

        <view class="divider"></view>
        <text class="field-label">通知标题</text>
        <input class="input" :value="draft.titleTemplate" placeholder="提醒" @input="draft.titleTemplate = inputValue($event)" />
        <text class="field-label">通知内容</text>
        <textarea class="textarea" :value="draft.bodyTemplate" placeholder="例如：{{name}}，现在是 {{time}}" @input="draft.bodyTemplate = inputValue($event)" />

        <text class="field-label">自定义变量</text>
        <textarea class="textarea variables" :value="variableText" placeholder="name=葡萄&#10;project=Lynx Notify" @input="variableText = inputValue($event)" />
        <text class="field-help">每行一个 key=value。发布前才解析变量。</text>

        <view class="variable-help">
          <text class="variable-help-title">内置变量</text>
          <text class="variable-code">{{ builtInVariableHelp }}</text>
        </view>

        <view class="primary-button full" @tap="saveTask"><text class="primary-button-text">保存任务</text></view>
        <view class="list-spacer"></view>
      </scroll-view>
    </view>

    <view v-if="page !== 'editor'" class="bottom-nav">
      <view :class="['nav-item', page === 'home' ? 'active' : '']" @tap="nav('home')">
        <text :class="['nav-icon', page === 'home' ? 'active' : '']">◫</text>
        <text :class="['nav-label', page === 'home' ? 'active' : '']">任务</text>
      </view>
      <view :class="['nav-item', page === 'settings' ? 'active' : '']" @tap="nav('settings')">
        <text :class="['nav-icon', page === 'settings' ? 'active' : '']">⚙</text>
        <text :class="['nav-label', page === 'settings' ? 'active' : '']">设置</text>
      </view>
    </view>

    <view v-if="toast" class="toast"><text class="toast-text">{{ toast }}</text></view>
  </view>
</template>

<style>
* { box-sizing: border-box; }
.app-shell { width: 100vw; height: 100vh; background-color: #f5f6f8; display: flex; flex-direction: column; color: #17191f; }
.titlebar { height: 46px; flex-shrink: 0; display: flex; flex-direction: row; align-items: center; justify-content: space-between; background-color: #fbfbfc; border-bottom: 1px solid #e9e9ed; }
.drag-zone { height: 46px; flex: 1; display: flex; flex-direction: row; align-items: center; padding-left: 15px; cursor: default; }
.brand-mark { width: 22px; height: 22px; border-radius: 7px; background-color: #6757e8; display: flex; align-items: center; justify-content: center; }
.brand-dot { color: white; font-size: 8px; }
.brand-title { font-size: 13px; font-weight: 600; margin-left: 9px; color: #252730; }
.window-actions { display: flex; height: 46px; flex-direction: row; }
.window-button { width: 45px; height: 46px; display: flex; align-items: center; justify-content: center; cursor: pointer; }
.window-button.close { width: 47px; }
.window-glyph { font-size: 17px; color: #5e616b; }
.page { flex: 1; min-height: 0; display: flex; flex-direction: column; padding: 22px 20px 0 20px; }
.page-head { display: flex; flex-direction: row; align-items: flex-start; justify-content: space-between; margin-bottom: 18px; }
.eyebrow { display: block; font-size: 9px; font-weight: 700; letter-spacing: 1.4px; color: #8d8f99; margin-bottom: 5px; }
.page-title { display: block; font-size: 25px; line-height: 30px; font-weight: 700; color: #17191f; }
.page-subtitle { display: block; margin-top: 4px; font-size: 11px; color: #92949d; }
.primary-button { height: 42px; border-radius: 13px; padding: 0 18px; display: flex; align-items: center; justify-content: center; background-color: #6757e8; cursor: pointer; box-shadow: 0 7px 18px rgba(103, 87, 232, 0.22); }
.primary-button.compact { height: 38px; padding: 0 14px; margin-top: 3px; }
.primary-button.full { width: 100%; margin-top: 22px; }
.primary-button-text { color: #ffffff; font-size: 13px; font-weight: 600; }
.task-list, .settings-scroll, .editor-scroll { flex: 1; min-height: 0; }
.task-card { background-color: #ffffff; border: 1px solid #e9e9ee; border-radius: 17px; padding: 15px; margin-bottom: 11px; box-shadow: 0 4px 14px rgba(20, 22, 30, 0.04); cursor: pointer; }
.task-card-top { display: flex; flex-direction: row; align-items: center; justify-content: space-between; }
.task-main { display: flex; flex-direction: row; align-items: center; flex: 1; min-width: 0; }
.task-type-dot { width: 9px; height: 9px; border-radius: 5px; margin-right: 10px; background-color: #6757e8; }
.task-type-dot.interval { background-color: #25a879; }
.task-type-dot.schedule { background-color: #e99b2f; }
.task-copy { flex: 1; min-width: 0; }
.task-name { display: block; color: #21232a; font-size: 14px; font-weight: 650; }
.task-kind { display: block; color: #9799a2; font-size: 10px; margin-top: 3px; }
.switch { width: 35px; height: 20px; border-radius: 10px; padding: 2px; display: flex; justify-content: flex-start; background-color: #d9dbe2; margin-left: 10px; }
.switch.on { background-color: #6757e8; justify-content: flex-end; }
.switch-knob { width: 16px; height: 16px; border-radius: 8px; background-color: #ffffff; }
.task-message { margin-top: 13px; padding: 11px 12px; border-radius: 12px; background-color: #f7f7fa; }
.task-message-title { display: block; color: #41434b; font-size: 11px; font-weight: 600; }
.task-message-body { display: block; color: #8a8d96; font-size: 10px; margin-top: 4px; line-height: 15px; }
.task-footer { display: flex; flex-direction: row; align-items: center; justify-content: space-between; margin-top: 11px; }
.next-run { color: #9a9ca5; font-size: 9px; }
.delete-button { padding: 5px 7px; cursor: pointer; }
.delete-text { font-size: 9px; color: #c65d67; }
.empty-card { height: 210px; border: 1px dashed #d8dae2; border-radius: 18px; align-items: center; justify-content: center; display: flex; flex-direction: column; }
.empty-icon { font-size: 30px; color: #aaa7c8; }
.empty-title { margin-top: 10px; font-size: 14px; color: #4c4e57; font-weight: 600; }
.empty-copy { margin-top: 4px; font-size: 10px; color: #999ba3; }
.bottom-nav { height: 67px; flex-shrink: 0; display: flex; flex-direction: row; border-top: 1px solid #e6e7eb; background-color: #fbfbfc; }
.nav-item { flex: 1; align-items: center; justify-content: center; display: flex; flex-direction: column; cursor: pointer; }
.nav-icon { color: #a0a2aa; font-size: 18px; line-height: 20px; }
.nav-icon.active { color: #6757e8; }
.nav-label { color: #a0a2aa; font-size: 9px; margin-top: 3px; }
.nav-label.active { color: #6757e8; font-weight: 600; }
.settings-section { background-color: #ffffff; border: 1px solid #e9e9ee; border-radius: 16px; padding: 15px; margin-bottom: 11px; }
.section-label { display: block; font-size: 12px; font-weight: 600; color: #3a3c45; margin-bottom: 10px; }
.option-grid { display: flex; flex-direction: row; flex-wrap: wrap; gap: 7px; }
.choice-chip { min-width: 72px; height: 33px; border-radius: 10px; background-color: #f4f4f7; border: 1px solid #ededf1; align-items: center; justify-content: center; padding: 0 10px; cursor: pointer; }
.choice-chip.selected { background-color: #eeebff; border-color: #beb6ff; }
.choice-text { color: #747680; font-size: 10px; }
.choice-text.selected { color: #5f4fe0; font-weight: 600; }
.segmented { display: flex; flex-direction: row; padding: 3px; background-color: #f1f1f4; border-radius: 11px; }
.segment { height: 32px; flex: 1; border-radius: 9px; align-items: center; justify-content: center; cursor: pointer; }
.segment.active { background-color: #ffffff; box-shadow: 0 2px 6px rgba(30, 32, 40, 0.08); }
.segment-text { font-size: 10px; color: #858791; }
.segment-text.active { color: #33353d; font-weight: 600; }
.row-setting { flex-direction: row; align-items: center; justify-content: space-between; }
.setting-hint { display: block; color: #a1a3ab; font-size: 9px; margin-top: -5px; }
.stepper { display: flex; flex-direction: row; align-items: center; }
.step-button { width: 29px; height: 29px; background-color: #f1f1f4; border-radius: 9px; align-items: center; justify-content: center; cursor: pointer; }
.step-text { font-size: 15px; color: #60626c; }
.step-value { min-width: 49px; text-align: center; font-size: 11px; color: #454750; font-weight: 600; }
.preview-wrap { padding: 5px 2px 0 2px; }
.preview-card { border-radius: 16px; padding: 14px; border: 1px solid rgba(255,255,255,0.7); box-shadow: 0 13px 30px rgba(28, 31, 45, 0.13); }
.preview-card.solid { background-color: #ffffff; }
.preview-card.glass { background-color: rgba(245, 247, 252, 0.78); }
.preview-row { display: flex; flex-direction: row; align-items: center; }
.preview-icon { width: 34px; height: 34px; border-radius: 10px; background-color: #6757e8; align-items: center; justify-content: center; display: flex; margin-right: 11px; }
.preview-icon-text { color: white; font-size: 13px; font-weight: 700; }
.preview-copy { flex: 1; }
.preview-title { display: block; color: #252730; font-size: 11px; font-weight: 650; }
.preview-body { display: block; color: #747782; font-size: 9px; line-height: 14px; margin-top: 3px; }
.secondary-button { height: 38px; border-radius: 12px; border: 1px solid #dedfe5; margin-top: 12px; align-items: center; justify-content: center; display: flex; cursor: pointer; background-color: #ffffff; }
.secondary-button-text { font-size: 10px; color: #565963; font-weight: 600; }
.editor-page { padding: 0; }
.editor-head { height: 61px; flex-shrink: 0; padding: 0 15px; display: flex; flex-direction: row; align-items: center; border-bottom: 1px solid #e7e8ec; background-color: #fbfbfc; }
.back-button { width: 34px; height: 34px; border-radius: 11px; background-color: #f0f0f3; align-items: center; justify-content: center; display: flex; cursor: pointer; }
.back-text { font-size: 25px; line-height: 28px; color: #5f616b; }
.editor-title-wrap { flex: 1; margin-left: 10px; }
.editor-title { display: block; font-size: 14px; font-weight: 650; color: #292b33; }
.editor-subtitle { display: block; font-size: 9px; color: #9698a1; margin-top: 2px; }
.save-small { height: 32px; border-radius: 10px; padding: 0 12px; background-color: #6757e8; align-items: center; justify-content: center; cursor: pointer; }
.save-small-text { color: #fff; font-size: 10px; font-weight: 600; }
.editor-scroll { padding: 17px 20px 0 20px; }
.field-label { display: block; font-size: 10px; font-weight: 600; color: #555761; margin-top: 15px; margin-bottom: 7px; }
.field-label.first { margin-top: 0; }
.input { width: 100%; height: 41px; border-radius: 11px; background-color: #ffffff; border: 1px solid #dedfe5; padding: 0 12px; color: #2c2e36; font-size: 11px; }
.input.mono { font-family: Consolas, monospace; }
.textarea { width: 100%; height: 84px; border-radius: 11px; background-color: #ffffff; border: 1px solid #dedfe5; padding: 10px 12px; color: #2c2e36; font-size: 11px; line-height: 17px; }
.textarea.variables { height: 72px; font-family: Consolas, monospace; }
.field-help { display: block; font-size: 9px; line-height: 14px; color: #989aa3; margin-top: 6px; }
.type-tabs { display: flex; flex-direction: row; gap: 7px; }
.type-tab { height: 35px; flex: 1; border-radius: 10px; background-color: #eeeeF2; align-items: center; justify-content: center; cursor: pointer; }
.type-tab.active { background-color: #6757e8; }
.type-tab-text { font-size: 10px; color: #777984; }
.type-tab-text.active { color: #ffffff; font-weight: 600; }
.conditional-box { margin-top: 15px; padding: 14px; border-radius: 14px; background-color: #f0f0f4; }
.weekday-row { display: flex; flex-direction: row; justify-content: space-between; }
.weekday { width: 34px; height: 34px; border-radius: 10px; background-color: #ffffff; align-items: center; justify-content: center; cursor: pointer; border: 1px solid #e0e1e6; }
.weekday.selected { background-color: #6757e8; border-color: #6757e8; }
.weekday-text { font-size: 10px; color: #676a73; }
.weekday-text.selected { color: #ffffff; font-weight: 600; }
.time-fields { display: flex; flex-direction: row; gap: 9px; }
.time-field { flex: 1; }
.divider { height: 1px; background-color: #dedfe4; margin-top: 20px; }
.variable-help { margin-top: 13px; padding: 12px; border-radius: 12px; background-color: #ebe9fa; }
.variable-help-title { display: block; font-size: 9px; color: #67617e; font-weight: 600; }
.variable-code { display: block; font-size: 9px; line-height: 15px; color: #6757a8; margin-top: 5px; font-family: Consolas, monospace; }
.list-spacer { height: 24px; }
.toast { position: absolute; left: 50%; bottom: 78px; transform: translateX(-50%); padding: 9px 14px; border-radius: 12px; background-color: rgba(32, 34, 42, 0.92); box-shadow: 0 8px 24px rgba(20,20,30,0.18); }
.toast-text { color: #ffffff; font-size: 10px; white-space: nowrap; }
</style>
