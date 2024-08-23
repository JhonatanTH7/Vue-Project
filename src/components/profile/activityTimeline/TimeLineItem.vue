<template>
  <li class="timelineItem">
    <div class="header">
      <div class="headerLeftSide">
        <div
          class="itemPoint"
          :style="{ backgroundColor: `${background}` }"
        ></div>
        <h3>{{ title }}</h3>
      </div>
      <span>{{ time }} ago</span>
    </div>
    <div class="content">
      <p class="description">{{ description }}</p>
      <slot name="footer"></slot>
    </div>
  </li>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  title: string;
  description: string;
  timePassed: string;
  background: string;
}>();

const time = ref("");

time.value = props.timePassed;
</script>

<style scoped>
.timelineItem {
  width: 100%;
  display: flex;
  gap: 5px;
  flex-direction: column;
  margin-top: 5px;
}

.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.headerLeftSide {
  display: flex;
  align-items: center;
  gap: 20px;
}

.itemPoint {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: 4px;
  padding: 0px 0px 10px 26px;
  border-left: 1px solid #bfbdbd;
}
</style>
