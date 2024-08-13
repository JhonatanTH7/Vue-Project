<template>
  <section class="container">
    <TeamCard
      v-for="team in cardsTeams"
      :title="team.title"
      :description="team.description"
    />
  </section>
</template>

<script setup lang="ts">
import TeamCard from "./TeamCard.vue";
const cardsTeams = [
  {
    title: "Title 1",
    description: "Description 1",
  },
  {
    title: "Title 2",
    description: "Description 2",
  },
  {
    title: "Title 3",
    description: "Description 3",
  },
  {
    title: "Title 4",
    description: "Description 4",
  },
  {
    title: "Title 5",
    description: "Description 5",
  },
  {
    title: "Title 6",
    description: "Description 6",
  },
];
</script>

<style scoped>
.container {
  height: 100%;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #7864ec #f5f5f5;
}
</style>
