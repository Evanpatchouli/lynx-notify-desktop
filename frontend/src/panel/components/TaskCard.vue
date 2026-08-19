<script setup lang="ts">
import type { NotificationTask } from '../../types';
import { formatTaskKind, formatTime } from '../utils/task';

const props = defineProps<{ task: NotificationTask }>();
const emit = defineEmits<{
  (event: 'edit', task: NotificationTask): void;
  (event: 'toggle', task: NotificationTask): void;
  (event: 'delete', task: NotificationTask): void;
}>();
</script>

<template>
  <view class="task-card" @tap="emit('edit', props.task)">
    <view class="task-card-top">
      <view class="task-main">
        <view :class="['task-type-dot', props.task.type]"></view>
        <view class="task-copy">
          <text class="task-name">{{ props.task.name }}</text>
          <text class="task-kind">{{ formatTaskKind(props.task) }}</text>
        </view>
      </view>
      <view :class="['switch', props.task.enabled ? 'on' : 'off']" @tap.stop="emit('toggle', props.task)">
        <view class="switch-knob"></view>
      </view>
    </view>
    <view class="task-message">
      <text class="task-message-title">{{ props.task.titleTemplate }}</text>
      <text class="task-message-body">{{ props.task.bodyTemplate }}</text>
    </view>
    <view class="task-footer">
      <text class="next-run">下次 {{ props.task.enabled ? formatTime(props.task.nextRunAtMs) : '已停用' }}</text>
      <view class="delete-button" @tap.stop="emit('delete', props.task)"><text class="delete-text">删除</text></view>
    </view>
  </view>
</template>

<style>
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
</style>
