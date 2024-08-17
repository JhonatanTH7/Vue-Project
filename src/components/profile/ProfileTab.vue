<template>
  <section class="scrollableCardsContainer">
    <ProjectList :projects="projects" />
  </section>
</template>

<script setup lang="ts">
import ProjectList from "@/components/profile/ProjectList.vue";
const projects = [
  {
    id: 1,
    name: "Project 1",
    icon: "./src/assets/icons/Vuejs_icon.png",
    type: "Type 1",
    leader: "Leader 1",
    team: [
      { name: "John Doe", image: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Jane Smith", image: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Mike Ross", image: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Anna Taylor", image: "./src/assets/icons/Profile_icon.jpg" },
    ],
  },
  {
    id: 2,
    name: "Project 2",
    icon: "./src/assets/icons/React_icon.png",
    type: "Type 2",
    leader: "Leader 2",
    team: [
      { name: "John Doe", image: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Jane Smith", image: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Mike Ross", image: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Anna Taylor", image: "./src/assets/icons/Profile_icon.jpg" },
    ],
  },
  {
    id: 3,
    name: "Project 3",
    icon: "./src/assets/icons/Figma_icon.png",
    type: "Type 3",
    leader: "Leader 3",
    team: [
      { name: "John Doe", image: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Jane Smith", image: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Mike Ross", image: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Anna Taylor", image: "./src/assets/icons/Profile_icon.jpg" },
    ],
  },
];
</script>

<style scoped></style>
