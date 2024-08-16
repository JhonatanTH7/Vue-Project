<template>
  <section class="scrollableCardsContainer">
    <ConnectionCard
      v-for="card in cardsConnections"
      :name="card.name"
      :position="card.position"
      :imageSrc="card.imageSrc"
      :numberOfConnections="card.numberOfConnections"
      :numberOfProjects="card.numberOfProjects"
      :numberOfTasks="card.numberOfTasks"
      :techStack="card.techStack"
    />
  </section>
</template>

<script setup lang="ts">
import ConnectionCard from "@/components/connections/ConnectionCard.vue";
const cardsConnections = [
  {
    name: "John Doe",
    position: "Frontend Developer",
    imageSrc: "./src/assets/icons/Profile_icon.jpg",
    numberOfConnections: 100,
    numberOfProjects: 10,
    numberOfTasks: 20,
    techStack: ["React", "MUI"],
  },
  {
    name: "Jane Doe",
    position: "Backend Developer",
    imageSrc: "./src/assets/icons/Profile_icon.jpg",
    numberOfConnections: 200,
    numberOfProjects: 20,
    numberOfTasks: 30,
    techStack: ["Vuejs", "Developer"],
  },
  {
    name: "John Smith",
    position: "Fullstack Developer",
    imageSrc: "./src/assets/icons/Profile_icon.jpg",
    numberOfConnections: 300,
    numberOfProjects: 30,
    numberOfTasks: 40,
    techStack: ["Hubilo"],
  },
  {
    name: "Jane Smith",
    position: "UI/UX Designer",
    imageSrc: "./src/assets/icons/Profile_icon.jpg",
    numberOfConnections: 400,
    numberOfProjects: 40,
    numberOfTasks: 50,
    techStack: ["UI/UX", "Figma"],
  },
  {
    name: "John Doe",
    position: "Frontend Developer",
    imageSrc: "./src/assets/icons/Profile_icon.jpg",
    numberOfConnections: 100,
    numberOfProjects: 10,
    numberOfTasks: 20,
    techStack: ["React"],
  },
  {
    name: "Jane Doe",
    position: "Backend Developer",
    imageSrc: "./src/assets/icons/Profile_icon.jpg",
    numberOfConnections: 200,
    numberOfProjects: 20,
    numberOfTasks: 30,
    techStack: ["Vuejs"],
  },
  {
    name: "John Smith",
    position: "Fullstack Developer",
    imageSrc: "./src/assets/icons/Profile_icon.jpg",
    numberOfConnections: 300,
    numberOfProjects: 30,
    numberOfTasks: 40,
    techStack: ["Hubilo"],
  },
  {
    name: "Jane Smith",
    position: "UI/UX Designer",
    imageSrc: "./src/assets/icons/Profile_icon.jpg",
    numberOfConnections: 400,
    numberOfProjects: 40,
    numberOfTasks: 50,
    techStack: ["UI/UX", "Figma"],
  },
];
</script>

<style scoped></style>
