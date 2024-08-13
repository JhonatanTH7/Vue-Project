<script setup lang="ts">
defineProps<{
  imageSrc: string;
}>();
</script>

<template>
  <button>
    <img :src="imageSrc" alt="icon" />
  </button>
</template>

<style scoped>
button {
  border: none;
  height: 30px;
  width: 30px;
  background: none;
}

button:hover {
  background: #e7e7e7;
}

img {
  height: 100%;
  width: 100%;
}
</style>
