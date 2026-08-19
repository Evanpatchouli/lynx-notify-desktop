<script setup lang="ts">
import type { NotificationTask } from '../../types';
import TaskCard from './TaskCard.vue';

const props = defineProps<{ tasks: NotificationTask[] }>();
const emit = defineEmits<{
  (event: 'create'): void;
  (event: 'edit', task: NotificationTask): void;
  (event: 'toggle', task: NotificationTask): void;
  (event: 'delete', task: NotificationTask): void;
}>();
</script>

<template>
  <view class="page">
    <view class="page-head">
      <view>
        <text class="eyebrow">TASK CENTER</text>
        <text class="page-title">通知任务</text>
        <text class="page-subtitle">{{ props.tasks.length }} 个任务 · Native scheduler</text>
      </view>
      <view class="primary-button compact" @tap="emit('create')"><text class="primary-button-text">＋ 新建</text></view>
    </view>

    <scroll-view class="task-list" scroll-orientation="vertical">
      <view v-if="props.tasks.length === 0" class="empty-card">
        <text class="empty-icon">◎</text>
        <text class="empty-title">还没有通知任务</text>
        <text class="empty-copy">创建一次性、循环或定期通知。</text>
      </view>

      <TaskCard
        v-for="task in props.tasks"
        :key="task.id"
        :task="task"
        @edit="emit('edit', $event)"
        @toggle="emit('toggle', $event)"
        @delete="emit('delete', $event)"
      />
      <view class="list-spacer"></view>
    </scroll-view>
  </view>
</template>

<style>
.task-list { flex: 1; min-height: 0; }
.empty-card { height: 210px; border: 1px dashed #d8dae2; border-radius: 18px; align-items: center; justify-content: center; display: flex; flex-direction: column; }
.empty-icon { font-size: 30px; color: #aaa7c8; }
.empty-title { margin-top: 10px; font-size: 14px; color: #4c4e57; font-weight: 600; }
.empty-copy { margin-top: 4px; font-size: 10px; color: #999ba3; }
</style>
