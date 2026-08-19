<script setup lang="ts">
type PanelPage = 'home' | 'settings';

const props = defineProps<{ page: PanelPage }>();
const emit = defineEmits<{
  (event: 'navigate', page: PanelPage): void;
}>();
</script>

<template>
  <view class="bottom-nav">
    <view :class="['nav-item', props.page === 'home' ? 'active' : '']" @tap="emit('navigate', 'home')">
      <text :class="['nav-icon', props.page === 'home' ? 'active' : '']">◫</text>
      <text :class="['nav-label', props.page === 'home' ? 'active' : '']">任务</text>
    </view>
    <view :class="['nav-item', props.page === 'settings' ? 'active' : '']" @tap="emit('navigate', 'settings')">
      <text :class="['nav-icon', props.page === 'settings' ? 'active' : '']">⚙</text>
      <text :class="['nav-label', props.page === 'settings' ? 'active' : '']">设置</text>
    </view>
  </view>
</template>

<style>
.bottom-nav { height: 67px; flex-shrink: 0; display: flex; flex-direction: row; border-top: 1px solid #e6e7eb; background-color: #fbfbfc; }
.nav-item { flex: 1; align-items: center; justify-content: center; display: flex; flex-direction: column; cursor: pointer; }
.nav-icon { color: #a0a2aa; font-size: 18px; line-height: 20px; cursor: pointer; }
.nav-icon.active { color: #6757e8; }
.nav-label { color: #a0a2aa; font-size: 9px; margin-top: 3px; cursor: pointer; }
.nav-label.active { color: #6757e8; font-weight: 600; }
</style>
