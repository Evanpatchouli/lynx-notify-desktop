<script setup lang="ts">
import packageManifest from '../../../package.json';

type WindowCommand = 'minimize' | 'hide';

const appVersion = packageManifest.version;

const emit = defineEmits<{
  (event: 'window-command', command: WindowCommand): void;
}>();
</script>

<template>
  <view class="titlebar">
    <view class="drag-zone">
      <view class="brand-mark"><text class="brand-dot">●</text></view>
      <view class="brand-copy">
        <text class="brand-title">Lynx Notify</text>
        <text class="brand-version">v{{ appVersion }}</text>
      </view>
    </view>
    <view class="window-actions">
      <view class="window-button" @tap="emit('window-command', 'minimize')"><text class="window-glyph">—</text></view>
      <view class="window-button close" @tap="emit('window-command', 'hide')"><text class="window-glyph">×</text></view>
    </view>
  </view>
</template>

<style>
.titlebar { height: 46px; flex-shrink: 0; display: flex; flex-direction: row; align-items: center; justify-content: space-between; background-color: #fbfbfc; border-bottom: 1px solid #e9e9ed; }
.drag-zone { height: 46px; flex: 1; display: flex; flex-direction: row; align-items: center; padding-left: 15px; cursor: move; }
.brand-mark { width: 22px; height: 22px; border-radius: 7px; background-color: #6757e8; display: flex; align-items: center; justify-content: center; }
.brand-dot { color: white; font-size: 8px; }
.brand-copy { margin-left: 9px; display: flex; flex-direction: column; justify-content: center; }
.brand-title { font-size: 13px; line-height: 15px; font-weight: 600; color: #252730; }
.brand-version { margin-top: 1px; font-size: 9px; line-height: 11px; font-weight: 500; color: #a0a2ab; }
.window-actions { display: flex; height: 46px; flex-direction: row; }
.window-button { width: 45px; height: 46px; display: flex; align-items: center; justify-content: center; cursor: pointer; }
.window-button.close { width: 47px; }
.window-glyph { font-size: 17px; color: #5e616b; }
</style>
