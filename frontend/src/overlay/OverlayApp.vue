<script setup lang="ts">
import { ref } from 'vue-lynx';
import { hostBridge } from '../bridge';
import NotificationStack from './components/NotificationStack.vue';
import { useNotificationStack } from './composables/useNotificationStack';

const overlay = ref(hostBridge.getOverlayState());
const { renderedCards, positionClass, stackHeight, dismissCard } = useNotificationStack(overlay);
</script>

<template>
  <view :class="['overlay-screen', positionClass]">
    <NotificationStack
      :settings="overlay.settings"
      :cards="renderedCards"
      :height="stackHeight"
      :position-class="positionClass"
      @dismiss="dismissCard"
    />
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
</style>
