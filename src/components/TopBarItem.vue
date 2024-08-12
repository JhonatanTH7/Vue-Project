<script setup lang="ts">
const props = defineProps<{
  imageSrc: string;
}>();
</script>

<template>
  <button>
    <img :src="props.imageSrc" alt="icon" />
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
  background: #f0f0f0;
}

img {
  height: 100%;
  width: 100%;
}
</style>
