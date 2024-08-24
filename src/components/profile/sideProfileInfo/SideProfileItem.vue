<template>
  <div class="item">
    <i :class="classBoxIcons"></i>
    <span>{{ title }}:</span><span>{{ value }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  classBoxIcons: String,
  title: String,
  value: String,
});
</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  i {
    font-size: 18px;
  }
}
</style>
