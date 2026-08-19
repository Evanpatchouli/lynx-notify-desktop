import { computed, onMounted, onUnmounted, ref } from 'vue-lynx';
import { hostBridge } from '../../bridge';
import type { ActiveNotification, OverlayState } from '../../types';
import type { RenderedCard } from '../types';

const CARD_HEIGHT = 104;
const STACK_OFFSET = 16;
const ENTER_DURATION = 320;
const LEAVE_DURATION = 140;
const FADE_IN_DELAY = 20;

export function useNotificationStack(overlay: { value: OverlayState }) {
  const renderedCards = ref<RenderedCard[]>([]);
  const cardTimers = new Map<string, Set<ReturnType<typeof setTimeout>>>();
  let timer: ReturnType<typeof setInterval> | undefined;

  const positionClass = computed(() => `position-${overlay.value.settings.position}`);
  const isBottom = computed(() => overlay.value.settings.position.startsWith('bottom'));
  const stackHeight = computed(() => {
    const cardCount = overlay.value.cards.length;
    return CARD_HEIGHT + Math.max(0, cardCount - 1) * STACK_OFFSET;
  });

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
    return { ...item, phase: 'leaving' as const, opacityVisible: false };
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

  onMounted(() => {
    refresh();
    timer = setInterval(refresh, 160);
  });

  onUnmounted(() => {
    if (timer) clearInterval(timer);
    for (const id of [...cardTimers.keys()]) clearCardTimers(id);
  });

  return { renderedCards, positionClass, stackHeight, refresh, dismissCard };
}
