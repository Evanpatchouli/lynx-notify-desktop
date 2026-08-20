<script setup lang="ts">
import { ref } from 'vue-lynx';
import { hostBridge } from '../bridge';
import type { AppState, CardSettings, NotificationTask } from '../types';
import BottomNav from './components/BottomNav.vue';
import PanelTitleBar from './components/PanelTitleBar.vue';
import SettingsPage from './components/SettingsPage.vue';
import TaskEditorPage from './components/TaskEditorPage.vue';
import TaskListPage from './components/TaskListPage.vue';
import ToastMessage from './components/ToastMessage.vue';
import { cloneTask, createEmptyTask } from './utils/task';

type PanelPage = 'home' | 'settings' | 'editor';

const state = ref<AppState>(hostBridge.getState());
const page = ref<PanelPage>('home');
const editorTask = ref<NotificationTask>(createEmptyTask());
const toast = ref('');
let toastTimer: ReturnType<typeof setTimeout> | undefined;

function refresh() {
  state.value = hostBridge.getState();
}

function showToast(message: string) {
  toast.value = message;
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    if (toast.value === message) toast.value = '';
  }, 1800);
}

function openCreate() {
  editorTask.value = createEmptyTask();
  page.value = 'editor';
}

function openEdit(task: NotificationTask) {
  editorTask.value = cloneTask(task);
  page.value = 'editor';
}

function saveTask(task: NotificationTask) {
  hostBridge.upsertTask(task);
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

function updateSettings(settings: CardSettings) {
  state.value = { ...state.value, settings: { ...settings } };
  hostBridge.updateSettings(settings);
}

function previewCard() {
  const settings = state.value.settings;
  hostBridge.updateSettings(settings);
  hostBridge.previewNotification(
    '通知卡片预览',
    `这是 ${settings.style === 'glass' ? '毛玻璃' : '纯色'} 样式 · ${Math.round(settings.opacity * 100)}%`,
  );
  showToast(hostBridge.isNative() ? '预览已发送到桌面' : 'Web Preview 中仅演示面板');
}

function navigate(target: 'home' | 'settings') {
  if (target === 'home') refresh();
  page.value = target;
}

function handleWindowCommand(command: 'minimize' | 'hide') {
  hostBridge.windowCommand(command);
}
</script>

<template>
  <view class="app-shell">
    <PanelTitleBar @window-command="handleWindowCommand" />

    <TaskListPage
      v-if="page === 'home'"
      :tasks="state.tasks"
      @create="openCreate"
      @edit="openEdit"
      @toggle="toggleTask"
      @delete="deleteTask"
    />
    <SettingsPage v-else-if="page === 'settings'" :settings="state.settings" @update-settings="updateSettings" @preview="previewCard" />
    <TaskEditorPage
      v-else
      :key="editorTask.id || 'new-task'"
      :task="editorTask"
      @cancel="page = 'home'"
      @save="saveTask"
      @validation-error="showToast"
    />

    <BottomNav v-if="page !== 'editor'" :page="page" @navigate="navigate" />
    <ToastMessage :message="toast" />
  </view>
</template>

<style>
* { box-sizing: border-box; }
.app-shell { width: 100vw; height: 100vh; background-color: #f5f6f8; display: flex; flex-direction: column; color: #17191f; overflow: hidden; }
.page { flex: 1; min-height: 0; display: flex; flex-direction: column; padding: 22px 20px 0 20px; }
.page-head { display: flex; flex-direction: row; align-items: flex-start; justify-content: space-between; margin-bottom: 18px; }
.eyebrow { display: block; font-size: 9px; font-weight: 700; letter-spacing: 1.4px; color: #8d8f99; margin-bottom: 5px; }
.page-title { display: block; font-size: 25px; line-height: 30px; font-weight: 700; color: #17191f; }
.page-subtitle { display: block; margin-top: 4px; font-size: 11px; color: #92949d; }
.primary-button { height: 42px; border-radius: 13px; padding: 0 18px; display: flex; align-items: center; justify-content: center; background-color: #6757e8; cursor: pointer; box-shadow: 0 7px 18px rgba(103, 87, 232, 0.22); }
.primary-button.compact { height: 38px; padding: 0 14px; margin-top: 3px; }
.primary-button.full { width: 100%; margin-top: 22px; }
.primary-button-text { color: #ffffff; font-size: 13px; font-weight: 600; cursor: pointer; }
.list-spacer { height: 24px; }
</style>
