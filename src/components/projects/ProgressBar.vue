<template>
  <div class="progressBarContainer">
    <div class="progressHeader">
      <span>Task: {{ progress }}/{{ max }}</span>
      <span>{{ percentage }}% Completed</span>
    </div>
    <div class="progressBar">
      <div class="progressFill" :style="{ width: `${percentage}%` }"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue";

const props = defineProps<{
  progress: number;
  max: number;
}>();

const percentage = computed(() => {
  return Math.round((props.progress / props.max) * 100);
});
</script>

<style scoped>
.progressBarContainer {
  width: 100%;
}

.progressHeader {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 5px;
}

.progressBar {
  width: 100%;
  height: 10px;
  background-color: #f1f1f1;
  border-radius: 5px;
  overflow: hidden;
}

.progressFill {
  height: 100%;
  background-color: #8a63f6;
  border-radius: 5px;
  transition: width 0.4s ease;
}
</style>
