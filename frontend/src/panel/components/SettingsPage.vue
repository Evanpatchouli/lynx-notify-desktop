<script setup lang="ts">
import type { CardPosition, CardSettings, CardStyle } from '../../types';
import { POSITION_OPTIONS } from '../constants';

const props = defineProps<{ settings: CardSettings }>();
const emit = defineEmits<{
  (event: 'update-settings', settings: CardSettings): void;
  (event: 'preview'): void;
}>();

function updatePosition(value: CardPosition) {
  emit('update-settings', { ...props.settings, position: value });
}

function updateStyle(value: CardStyle) {
  emit('update-settings', { ...props.settings, style: value });
}

function adjustOpacity(delta: number) {
  const next = Math.round((props.settings.opacity + delta) * 100) / 100;
  emit('update-settings', { ...props.settings, opacity: Math.max(0.3, Math.min(1, next)) });
}

function adjustDuration(delta: number) {
  emit('update-settings', {
    ...props.settings,
    durationSec: Math.max(2, Math.min(60, props.settings.durationSec + delta)),
  });
}
</script>

<template>
  <view class="page">
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
            v-for="item in POSITION_OPTIONS"
            :key="item.value"
            :class="['choice-chip', props.settings.position === item.value ? 'selected' : '']"
            @tap="updatePosition(item.value)"
          >
            <text :class="['choice-text', props.settings.position === item.value ? 'selected' : '']">{{ item.label }}</text>
          </view>
        </view>
      </view>

      <view class="settings-section">
        <text class="section-label">卡片样式</text>
        <view class="segmented">
          <view :class="['segment', props.settings.style === 'solid' ? 'active' : '']" @tap="updateStyle('solid')">
            <text :class="['segment-text', props.settings.style === 'solid' ? 'active' : '']">纯色</text>
          </view>
          <view :class="['segment', props.settings.style === 'glass' ? 'active' : '']" @tap="updateStyle('glass')">
            <text :class="['segment-text', props.settings.style === 'glass' ? 'active' : '']">毛玻璃</text>
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
          <text class="step-value">{{ Math.round(props.settings.opacity * 100) }}%</text>
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
          <text class="step-value">{{ props.settings.durationSec }}s</text>
          <view class="step-button" @tap="adjustDuration(1)"><text class="step-text">＋</text></view>
        </view>
      </view>

      <view class="preview-wrap">
        <text class="section-label">效果预览</text>
        <view :class="['preview-card', props.settings.style]" :style="{ opacity: props.settings.opacity }">
          <view class="preview-row">
            <view class="preview-icon"><text class="preview-icon-text">N</text></view>
            <view class="preview-copy">
              <text class="preview-title">通知卡片预览</text>
              <text class="preview-body">变量会在真正发布前解析 · {{ new Date().toLocaleTimeString() }}</text>
            </view>
          </view>
        </view>
        <view class="secondary-button" @tap="emit('preview')"><text class="secondary-button-text">发送桌面预览</text></view>
      </view>
      <view class="list-spacer"></view>
    </scroll-view>
  </view>
</template>

<style>
.settings-scroll { flex: 1; min-height: 0; }
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
</style>
