<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue-lynx';
import { hostBridge } from '../../bridge';
import { formatDateTime } from '../utils/task';

const update = ref(hostBridge.getUpdateState());
const openError = ref('');
const checking = computed(() => update.value.status === 'checking');
const statusText = computed(() => checking.value ? '正在连接 GitHub…' : openError.value || update.value.message);
let timer: ReturnType<typeof setInterval> | undefined;

function refresh() {
  const next = hostBridge.getUpdateState();
  if (JSON.stringify(next) !== JSON.stringify(update.value)) update.value = next;
}

function checkNow() {
  if (checking.value || !hostBridge.isNative()) return;
  openError.value = '';
  hostBridge.checkForUpdates();
  refresh();
}

function openRelease() {
  openError.value = hostBridge.openUpdatePage() ? '' : '未能打开发行页，请重新检查后再试';
}

onMounted(() => {
  if (hostBridge.isNative()) timer = setInterval(refresh, 1000);
});
onUnmounted(() => {
  if (timer !== undefined) clearInterval(timer);
});
</script>

<template>
  <view class="settings-section version-section">
    <view class="version-row">
      <view class="version-copy">
        <text class="section-label">版本与更新</text>
        <text class="version-number">当前版本 v{{ update.currentVersion }}</text>
      </view>
      <view :class="['check-button', (checking || !hostBridge.isNative()) ? 'muted' : '']" @tap="checkNow">
        <text class="check-label">{{ checking ? '检查中…' : '检查更新' }}</text>
      </view>
    </view>
    <text class="version-detail">应用启动时及运行期间每 15 分钟自动检查。</text>
    <text v-if="statusText" :class="['update-status', update.status === 'available' ? 'available' : '']">{{ statusText }}</text>
    <text v-if="update.checkedAtMs" class="version-detail">上次检查：{{ formatDateTime(update.checkedAtMs) }}</text>
    <view v-if="update.status === 'available'" class="secondary-button" @tap="openRelease">
      <text class="check-label">查看发行说明与下载 {{ update.latestVersion }}</text>
    </view>
  </view>
</template>

<style>
.version-section { margin-top: 18px; }
.version-row { display: flex; flex-direction: row; align-items: center; justify-content: space-between; }
.version-copy { flex: 1; }
.version-number { display: block; font-size: 13px; font-weight: 600; color: #252730; }
.check-button { height: 32px; padding: 0 12px; border-radius: 9px; background-color: #eeebff; align-items: center; justify-content: center; cursor: pointer; }
.check-button.muted { opacity: 0.55; }
.check-label { font-size: 11px; font-weight: 600; color: #5f4fe0; }
.version-detail { display: block; font-size: 10px; color: #717380; margin-top: 8px; }
.update-status { display: block; font-size: 11px; color: #444651; margin-top: 10px; }
.update-status.available { color: #5f4fe0; font-weight: 600; }
</style>
