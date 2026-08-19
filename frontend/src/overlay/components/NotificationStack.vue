<script setup lang="ts">
import { computed } from 'vue-lynx';
import type { CardSettings } from '../../types';
import NotificationCard from './NotificationCard.vue';
import type { RenderedCard } from '../types';

const props = defineProps<{
  settings: CardSettings;
  cards: RenderedCard[];
  height: number;
  positionClass: string;
}>();

const emit = defineEmits<{
  (event: 'dismiss', id: string): void;
}>();

const stackStyle = computed((): Record<string, string | number> => ({
  width: `${props.settings.cardWidth}px`,
  height: `${props.height}px`,
}));
</script>

<template>
  <view class="notification-stack" :style="stackStyle">
    <NotificationCard
      v-for="(card, index) in props.cards"
      :key="card.card.id"
      :card="card"
      :settings="props.settings"
      :position-class="props.positionClass"
      :is-newest="index === 0"
      @dismiss="emit('dismiss', $event)"
    />
  </view>
</template>

<style>
.notification-stack { position: relative; flex-shrink: 0; overflow: visible; }
</style>
