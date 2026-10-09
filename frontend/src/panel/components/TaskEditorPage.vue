<script setup lang="ts">
import { computed, ref } from 'vue-lynx';
import type { NotificationTask, TaskType } from '../../types';
import { BUILT_IN_VARIABLE_HELP, WEEKDAYS } from '../constants';
import {
  cloneTask,
  formatDateTime,
  parseDateTime,
  parseVariables,
} from '../utils/task';

const props = defineProps<{ task: NotificationTask }>();
const emit = defineEmits<{
  (event: 'cancel'): void;
  (event: 'save', task: NotificationTask): void;
  (event: 'validation-error', message: string): void;
}>();

const draft = ref<NotificationTask>(cloneTask(props.task));
const onceAtText = ref(formatDateTime(draft.value.once.atMs));
const intervalStartText = ref(formatDateTime(draft.value.interval.startAtMs));
const intervalEndText = ref(formatDateTime(draft.value.interval.endAtMs));
const variableText = ref(
  Object.entries(draft.value.variables)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n'),
);
const typeLabel = computed(() => ({ once: '一次性', interval: '循环', schedule: '定期' }[draft.value.type]));

function inputValue(event: any): string {
  return String(event?.detail?.value ?? event?.value ?? event?.target?.value ?? '');
}

function numValue(event: any, fallback = 0): number {
  const value = Number(inputValue(event));
  return Number.isFinite(value) ? value : fallback;
}

function setTaskType(type: TaskType) {
  draft.value.type = type;
}

function toggleWeekday(day: number) {
  const values = draft.value.schedule.weekdays;
  const index = values.indexOf(day);
  if (index >= 0) values.splice(index, 1);
  else values.push(day);
}

function validationError(message: string) {
  emit('validation-error', message);
}

function saveTask() {
  if (!draft.value.name.trim()) {
    validationError('请输入任务名称');
    return;
  }

  draft.value.variables = parseVariables(variableText.value);
  if (draft.value.type === 'once') {
    const at = parseDateTime(onceAtText.value);
    if (!at) {
      validationError('时间格式应为 YYYY-MM-DD HH:mm，秒数可选（:ss）');
      return;
    }
    draft.value.once.atMs = at;
  }
  if (draft.value.type === 'interval') {
    if (intervalStartText.value.trim()) {
      const start = parseDateTime(intervalStartText.value);
      if (!start) {
        validationError('起始时间格式应为 YYYY-MM-DD HH:mm，秒数可选（:ss）');
        return;
      }
      draft.value.interval.startAtMs = start;
    } else {
      draft.value.interval.startAtMs = 0;
    }
    if (intervalEndText.value.trim()) {
      const end = parseDateTime(intervalEndText.value);
      if (!end) {
        validationError('结束时间格式应为 YYYY-MM-DD HH:mm，秒数可选（:ss）');
        return;
      }
      draft.value.interval.endAtMs = end;
    } else {
      draft.value.interval.endAtMs = 0;
    }
    if (draft.value.interval.mode === 'fixed' && draft.value.interval.fixedSec <= 0) {
      validationError('固定间隔必须大于 0 秒');
      return;
    }
    if (draft.value.interval.mode === 'expression' && !draft.value.interval.expression.trim()) {
      validationError('请输入自定义间隔表达式');
      return;
    }
  }
  if (draft.value.type === 'schedule') {
    draft.value.schedule.hour = Math.max(0, Math.min(23, Math.floor(draft.value.schedule.hour)));
    draft.value.schedule.minute = Math.max(0, Math.min(59, Math.floor(draft.value.schedule.minute)));
    if (draft.value.schedule.mode === 'weekly' && draft.value.schedule.weekdays.length === 0) {
      validationError('至少选择一个星期');
      return;
    }
  }

  emit('save', draft.value);
}
</script>

<template>
  <view class="page editor-page">
    <view class="editor-head">
      <view class="back-button" @tap="emit('cancel')"><text class="back-text">‹</text></view>
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
        <input class="input" :value="onceAtText" placeholder="2026-10-09 12:00:00" @input="onceAtText = inputValue($event)" />
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
        <text class="field-help">时间格式：YYYY-MM-DD HH:mm 或 YYYY-MM-DD HH:mm:ss，按本地时区。</text>
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
            <view v-for="day in WEEKDAYS" :key="day.value" :class="['weekday', draft.schedule.weekdays.includes(day.value) ? 'selected' : '']" @tap="toggleWeekday(day.value)">
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
        <text class="variable-code">{{ BUILT_IN_VARIABLE_HELP }}</text>
      </view>

      <view class="primary-button full" @tap="saveTask"><text class="primary-button-text">保存任务</text></view>
      <view class="list-spacer"></view>
    </scroll-view>
  </view>
</template>

<style>
.editor-page { padding: 0; }
.editor-head { height: 61px; flex-shrink: 0; padding: 0 15px; display: flex; flex-direction: row; align-items: center; border-bottom: 1px solid #e7e8ec; background-color: #fbfbfc; }
.back-button { width: 34px; height: 34px; border-radius: 11px; background-color: #f0f0f3; align-items: center; justify-content: center; display: flex; cursor: pointer; }
.back-text { font-size: 25px; line-height: 28px; color: #5f616b; }
.editor-title-wrap { flex: 1; margin-left: 10px; }
.editor-title { display: block; font-size: 14px; font-weight: 650; color: #292b33; }
.editor-subtitle { display: block; font-size: 9px; color: #9698a1; margin-top: 2px; }
.save-small { height: 32px; border-radius: 10px; padding: 0 12px; background-color: #6757e8; align-items: center; justify-content: center; cursor: pointer; }
.save-small-text { color: #fff; font-size: 10px; font-weight: 600; }
.editor-scroll { padding: 17px 20px 0 20px; flex: 1; min-height: 0; }
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
</style>
