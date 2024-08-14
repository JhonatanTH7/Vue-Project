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
}

img {
  height: 100%;
  width: 100%;
}
</style>
