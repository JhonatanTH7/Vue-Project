<script setup lang="ts">
defineProps<{
  imageSrc: string;
}>();
</script>

<template>
  <button class="hoverableNoBGButton">
    <img :src="imageSrc" alt="icon" />
  </button>
</template>

<style scoped>
button {
  height: 30px;
  width: 30px;
  padding-left: 4px;
  padding-right: 4px;
}

img {
  height: 100%;
  width: 100%;
}
</style>
