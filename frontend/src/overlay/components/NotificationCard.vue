<script setup lang="ts">
import type { CardSettings } from '../../types';
import type { RenderedCard } from '../types';

const props = defineProps<{
  card: RenderedCard;
  settings: CardSettings;
  positionClass: string;
  isNewest: boolean;
}>();

const emit = defineEmits<{
  (event: 'dismiss', id: string): void;
}>();

function timeLabel(ms: number) {
  const date = new Date(ms);
  const h = String(date.getHours()).padStart(2, '0');
  const m = String(date.getMinutes()).padStart(2, '0');
  return `${h}:${m}`;
}

function cardStyle(): Record<string, string | number> {
  return {
    width: `${props.settings.cardWidth}px`,
    height: '104px',
    opacity: props.card.opacityVisible ? props.settings.opacity : 0,
    position: 'absolute',
    left: 0,
    top: `${props.card.top}px`,
    zIndex: props.card.zIndex,
  };
}
</script>

<template>
  <view
    :class="[
      'notification-card',
      props.settings.style,
      props.isNewest ? 'newest' : '',
      props.positionClass,
      props.card.phase === 'entering' ? 'is-entering' : '',
      props.card.phase === 'leaving' ? 'is-leaving' : '',
    ]"
    :style="cardStyle()"
  >
    <view class="card-accent"></view>
    <view class="card-body">
      <view class="card-head">
        <view class="card-app">
          <view class="card-logo"><text class="card-logo-text">N</text></view>
          <text class="card-app-name">LYNX NOTIFY</text>
        </view>
        <view class="card-head-actions">
          <text class="card-time">{{ timeLabel(props.card.card.createdAtMs) }}</text>
          <view class="card-close" @tap.stop="emit('dismiss', props.card.card.id)">
            <text class="card-close-glyph">×</text>
          </view>
        </view>
      </view>
      <text class="card-title">{{ props.card.card.title }}</text>
      <text class="card-message">{{ props.card.card.body }}</text>
    </view>
  </view>
</template>

<style>
.notification-card { position: absolute; left: 0; top: 0; height: 104px; min-height: 104px; border-radius: 18px; overflow: hidden; display: flex; flex-direction: row; border: 1px solid rgba(255,255,255,0.68); box-shadow: 0 18px 45px rgba(15, 18, 30, 0.22); transition: top 260ms cubic-bezier(0.22, 1, 0.36, 1), opacity 140ms ease-out; }
.notification-card.solid { background-color: #fdfdfe; }
.notification-card.glass { background-color: rgba(239, 242, 248, 0.82); }
.notification-card.newest { box-shadow: 0 20px 50px rgba(17, 20, 34, 0.27); }
.notification-card.is-entering { animation-duration: 320ms; animation-fill-mode: both; animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1); }
.notification-card.is-leaving { animation-duration: 140ms; animation-fill-mode: both; animation-timing-function: ease-in; }
.notification-card.is-entering.position-top-left,
.notification-card.is-entering.position-bottom-left { animation-name: notification-enter-from-left; }
.notification-card.is-entering.position-top-right,
.notification-card.is-entering.position-bottom-right { animation-name: notification-enter-from-right; }
.notification-card.is-entering.position-center { animation-name: notification-enter-from-center; }
.notification-card.is-leaving.position-top-left,
.notification-card.is-leaving.position-bottom-left { animation-name: notification-leave-to-left; }
.notification-card.is-leaving.position-top-right,
.notification-card.is-leaving.position-bottom-right { animation-name: notification-leave-to-right; }
.notification-card.is-leaving.position-center { animation-name: notification-leave-to-center; }
@keyframes notification-enter-from-left {
  from { transform: translateX(-30px) scale(0.97); }
  to { transform: translateX(0) scale(1); }
}
@keyframes notification-enter-from-right {
  from { transform: translateX(30px) scale(0.97); }
  to { transform: translateX(0) scale(1); }
}
@keyframes notification-enter-from-center {
  from { transform: translateY(18px) scale(0.97); }
  to { transform: translateY(0) scale(1); }
}
@keyframes notification-leave-to-left {
  from { transform: translateX(0) scale(1); }
  to { transform: translateX(-22px) scale(0.98); }
}
@keyframes notification-leave-to-right {
  from { transform: translateX(0) scale(1); }
  to { transform: translateX(22px) scale(0.98); }
}
@keyframes notification-leave-to-center {
  from { transform: translateY(0) scale(1); }
  to { transform: translateY(12px) scale(0.98); }
}
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
