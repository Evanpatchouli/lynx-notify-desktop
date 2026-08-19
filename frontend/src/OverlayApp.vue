<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue-lynx';
import { hostBridge } from './bridge';
import type { OverlayState } from './types';

const overlay = ref<OverlayState>(hostBridge.getOverlayState());
let timer: ReturnType<typeof setInterval> | undefined;

const positionClass = computed(() => `position-${overlay.value.settings.position}`);
const isBottom = computed(() => overlay.value.settings.position.startsWith('bottom'));

function refresh() {
  overlay.value = hostBridge.getOverlayState();
}

function dismissCard(id: string) {
  hostBridge.dismissNotification(id);
  refresh();
}

function timeLabel(ms: number) {
  const date = new Date(ms);
  const h = String(date.getHours()).padStart(2, '0');
  const m = String(date.getMinutes()).padStart(2, '0');
  return `${h}:${m}`;
}

onMounted(() => {
  refresh();
  timer = setInterval(refresh, 160);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<template>
  <view :class="['overlay-screen', positionClass]">
    <view :class="['notification-stack', isBottom ? 'bottom-stack' : '']" :style="{ gap: `${overlay.settings.gap}px` }">
      <view
        v-for="(card, index) in overlay.cards"
        :key="card.id"
        :class="['notification-card', overlay.settings.style, index === 0 ? 'newest' : '']"
        :style="{ width: `${overlay.settings.cardWidth}px`, opacity: overlay.settings.opacity }"
      >
        <view class="card-accent"></view>
        <view class="card-body">
          <view class="card-head">
            <view class="card-app">
              <view class="card-logo"><text class="card-logo-text">N</text></view>
              <text class="card-app-name">LYNX NOTIFY</text>
            </view>
            <view class="card-head-actions">
              <text class="card-time">{{ timeLabel(card.createdAtMs) }}</text>
              <view class="card-close" @tap.stop="dismissCard(card.id)">
                <text class="card-close-glyph">×</text>
              </view>
            </view>
          </view>
          <text class="card-title">{{ card.title }}</text>
          <text class="card-message">{{ card.body }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<style>
* { box-sizing: border-box; }
.overlay-screen { width: 100vw; height: 100vh; padding: 26px; display: flex; background-color: rgba(0,0,0,0); }
.position-top-left { align-items: flex-start; justify-content: flex-start; }
.position-top-right { align-items: flex-start; justify-content: flex-end; }
.position-center { align-items: center; justify-content: center; }
.position-bottom-left { align-items: flex-end; justify-content: flex-start; }
.position-bottom-right { align-items: flex-end; justify-content: flex-end; }
.notification-stack { display: flex; flex-direction: column; align-items: stretch; }
.notification-stack.bottom-stack { flex-direction: column-reverse; }
.notification-card { min-height: 104px; border-radius: 18px; overflow: hidden; display: flex; flex-direction: row; border: 1px solid rgba(255,255,255,0.68); box-shadow: 0 18px 45px rgba(15, 18, 30, 0.22); transform: translateY(0); }
.notification-card.solid { background-color: #fdfdfe; }
.notification-card.glass { background-color: rgba(239, 242, 248, 0.82); }
.notification-card.newest { box-shadow: 0 20px 50px rgba(17, 20, 34, 0.27); }
.card-accent { width: 4px; align-self: stretch; background-color: #6757e8; }
.card-body { flex: 1; min-width: 0; padding: 13px 15px 14px 14px; }
.card-head { height: 22px; display: flex; flex-direction: row; align-items: center; justify-content: space-between; }
.card-app { display: flex; flex-direction: row; align-items: center; }
.card-logo { width: 21px; height: 21px; border-radius: 7px; background-color: #6757e8; align-items: center; justify-content: center; display: flex; margin-right: 7px; }
.card-logo-text { color: #ffffff; font-size: 9px; font-weight: 700; }
.card-app-name { color: #8a8d99; font-size: 8px; font-weight: 700; letter-spacing: 0.7px; }
.card-head-actions { display: flex; flex-direction: row; align-items: center; }
.card-time { color: #9a9ca6; font-size: 9px; }
.card-close { width: 24px; height: 24px; margin-left: 5px; border-radius: 12px; display: flex; align-items: center; justify-content: center; background-color: rgba(32, 35, 45, 0.06); cursor: pointer; }
.card-close-glyph { color: #70737d; font-size: 16px; line-height: 20px; }
.card-title { display: block; margin-top: 9px; color: #22252d; font-size: 14px; font-weight: 650; line-height: 19px; }
.card-message { display: block; margin-top: 4px; color: #666a75; font-size: 11px; line-height: 17px; }
</style>
