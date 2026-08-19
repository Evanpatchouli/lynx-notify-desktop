<script setup lang="ts">
const props = defineProps<{ message: string }>();
</script>

<template>
  <view v-if="props.message" class="toast"><text class="toast-text">{{ props.message }}</text></view>
</template>

<style>
.toast { position: absolute; left: 50%; bottom: 78px; transform: translateX(-50%); padding: 9px 14px; border-radius: 12px; background-color: rgba(32, 34, 42, 0.92); box-shadow: 0 8px 24px rgba(20,20,30,0.18); }
.toast-text { color: #ffffff; font-size: 10px; white-space: nowrap; }
</style>
