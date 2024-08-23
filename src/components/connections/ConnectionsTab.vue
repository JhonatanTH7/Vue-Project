<template>
  <section class="scrollableCardsContainer">
    <ConnectionCard
      v-for="conection in connections"
      :key="conection.id"
      :id="conection.id"
      :name="conection.name"
      :position="conection.position"
      :icon="conection.icon"
      :techLabels="conection.techLabels"
      :projects="conection.projects"
      :tasks="conection.tasks"
      :connectionsNumber="conection.connectionsNumber"
      :connectionStatus="conection.connectionStatus"
    />
  </section>
</template>

<script setup lang="ts">
import ConnectionCard from "@/components/connections/ConnectionCard.vue";
import { connections } from "@/utils/data/Data";
</script>

<style scoped></style>
