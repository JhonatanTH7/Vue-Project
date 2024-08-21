<template>
  <div class="progressBar">
    <div class="progressFill" :style="{ width: `${percentage}%` }"></div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  progress: number;
  max: number;
}>();

const percentage = computed(() => {
  return Math.round((props.progress / props.max) * 100);
});

const emit = defineEmits(["getPercentage"]);
emit("getPercentage", percentage);
</script>

<style scoped>
.progressBar {
  width: 100%;
  height: 10px;
  background-color: #f1f1f1;
  border-radius: 5px;
  overflow: hidden;
}

.progressFill {
  height: 100%;
  background-color: var(--purple);
  border-radius: 5px;
  transition: width 0.5s ease;
}
</style>
