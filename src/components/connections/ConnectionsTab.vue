<template>
  <section class="container">
    <ConnectionCard />
    <ConnectionCard />
    <ConnectionCard />
  </section>
</template>

<script setup lang="ts">
import ConnectionCard from "@/components/connections/ConnectionCard.vue";
</script>

<style scoped>
.container {
  height: min-content;
  max-height: 100%;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
</style>
