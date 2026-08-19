<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue-lynx';
import { hostBridge } from './bridge';
import type { ActiveNotification, OverlayState } from './types';

const overlay = ref<OverlayState>(hostBridge.getOverlayState());
let timer: ReturnType<typeof setInterval> | undefined;
const CARD_HEIGHT = 104;
const STACK_OFFSET = 16;
const ENTER_DURATION = 320;
const LEAVE_DURATION = 140;
const FADE_IN_DELAY = 20;

type CardPhase = 'entering' | 'active' | 'leaving';

interface RenderedCard {
  card: ActiveNotification;
  phase: CardPhase;
  opacityVisible: boolean;
  top: number;
  zIndex: number;
}

const positionClass = computed(() => `position-${overlay.value.settings.position}`);
const isBottom = computed(() => overlay.value.settings.position.startsWith('bottom'));
const renderedCards = ref<RenderedCard[]>([]);
const cardTimers = new Map<string, Set<ReturnType<typeof setTimeout>>>();
const stackHeight = computed(() => {
  const cardCount = overlay.value.cards.length;
  return CARD_HEIGHT + Math.max(0, cardCount - 1) * STACK_OFFSET;
});
const stackStyle = computed((): Record<string, string | number> => ({
  width: `${overlay.value.settings.cardWidth}px`,
  height: `${stackHeight.value}px`,
}));

function clearCardTimers(id: string) {
  const timers = cardTimers.get(id);
  if (!timers) return;
  for (const handle of timers) clearTimeout(handle);
  cardTimers.delete(id);
}

function scheduleCardTimer(id: string, delay: number, callback: () => void) {
  const timers = cardTimers.get(id) ?? new Set<ReturnType<typeof setTimeout>>();
  cardTimers.set(id, timers);
  const handle = setTimeout(() => {
    timers.delete(handle);
    if (!timers.size) cardTimers.delete(id);
    callback();
  }, delay);
  timers.add(handle);
}

function updateRenderedCard(id: string, update: (item: RenderedCard) => RenderedCard) {
  renderedCards.value = renderedCards.value.map((item) => item.card.id === id ? update(item) : item);
}

function cardTop(index: number, cardCount: number) {
  const depth = isBottom.value ? cardCount - 1 - index : index;
  return depth * STACK_OFFSET;
}

function beginEnter(id: string) {
  scheduleCardTimer(id, FADE_IN_DELAY, () => {
    updateRenderedCard(id, (item) => ({ ...item, opacityVisible: true }));
  });
  scheduleCardTimer(id, ENTER_DURATION, () => {
    updateRenderedCard(id, (item) => ({ ...item, phase: 'active' }));
  });
}

function beginLeave(item: RenderedCard) {
  clearCardTimers(item.card.id);
  scheduleCardTimer(item.card.id, LEAVE_DURATION, () => {
    renderedCards.value = renderedCards.value.filter((current) => current.card.id !== item.card.id);
  });
  return { ...item, phase: 'leaving' as CardPhase, opacityVisible: false };
}

function syncRenderedCards(cards: ActiveNotification[]) {
  const previous = renderedCards.value;
  const previousById = new Map(previous.map((item) => [item.card.id, item]));
  const currentIds = new Set(cards.map((card) => card.id));
  const next: RenderedCard[] = [];

  cards.forEach((card, index) => {
    const previousItem = previousById.get(card.id);
    if (previousItem) {
      if (previousItem.phase === 'leaving') {
        clearCardTimers(card.id);
        next.push({
          ...previousItem,
          card,
          phase: 'active',
          opacityVisible: true,
          top: cardTop(index, cards.length),
          zIndex: cards.length - index,
        });
      } else {
        next.push({
          ...previousItem,
          card,
          top: cardTop(index, cards.length),
          zIndex: cards.length - index,
        });
      }
      return;
    }

    const item: RenderedCard = {
      card,
      phase: 'entering',
      opacityVisible: false,
      top: cardTop(index, cards.length),
      zIndex: cards.length - index,
    };
    next.push(item);
    beginEnter(card.id);
  });

  for (const item of previous) {
    if (currentIds.has(item.card.id)) continue;
    next.push(item.phase === 'leaving' ? item : beginLeave(item));
  }
  renderedCards.value = next;
}

function refresh() {
  const next = hostBridge.getOverlayState();
  overlay.value = next;
  syncRenderedCards(next.cards);
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

function cardStyle(item: RenderedCard): Record<string, string | number> {
  return {
    width: `${overlay.value.settings.cardWidth}px`,
    height: `${CARD_HEIGHT}px`,
    opacity: item.opacityVisible ? overlay.value.settings.opacity : 0,
    position: 'absolute',
    left: 0,
    top: `${item.top}px`,
    zIndex: item.zIndex,
  };
}

onMounted(() => {
  refresh();
  timer = setInterval(refresh, 160);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
  for (const id of cardTimers.keys()) clearCardTimers(id);
});
</script>

<template>
  <view :class="['overlay-screen', positionClass]">
    <view class="notification-stack" :style="stackStyle">
      <view
        v-for="(rendered, index) in renderedCards"
        :key="rendered.card.id"
        :class="[
          'notification-card',
          overlay.settings.style,
          index === 0 ? 'newest' : '',
          positionClass,
          rendered.phase === 'entering' ? 'is-entering' : '',
          rendered.phase === 'leaving' ? 'is-leaving' : '',
        ]"
        :style="cardStyle(rendered)"
      >
        <view class="card-accent"></view>
        <view class="card-body">
          <view class="card-head">
            <view class="card-app">
              <view class="card-logo"><text class="card-logo-text">N</text></view>
              <text class="card-app-name">LYNX NOTIFY</text>
            </view>
            <view class="card-head-actions">
              <text class="card-time">{{ timeLabel(rendered.card.createdAtMs) }}</text>
              <view class="card-close" @tap.stop="dismissCard(rendered.card.id)">
                <text class="card-close-glyph">×</text>
              </view>
            </view>
          </view>
          <text class="card-title">{{ rendered.card.title }}</text>
          <text class="card-message">{{ rendered.card.body }}</text>
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
.notification-stack { position: relative; flex-shrink: 0; overflow: visible; }
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
