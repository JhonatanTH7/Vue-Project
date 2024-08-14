<template>
  <section class="container">
    <TeamCard
      v-for="team in cardsTeams"
      :title="team.title"
      :description="team.description"
      :imageSrc="team.imageSrc"
      :techStack="team.techStack"
    />
  </section>
</template>

<script setup lang="ts">
import TeamCard from "./TeamCard.vue";
const cardsTeams = [
  {
    title: "React Developers",
    description:
      "We don't make assumptions about the rest of your technology stack, so you can develop new features in React.",
    imageSrc: "./src/assets/icons/React_icon.png",
    techStack: ["React", "MUI"],
  },
  {
    title: "Vue.js Dev Team",
    description:
      "The development of Vue and its ecosystem is guided by an international team, some of whom have chosen to be featured below.",
    imageSrc: "./src/assets/icons/Vuejs_icon.png",
    techStack: ["Vuejs", "Developer"],
  },
  {
    title: "Event",
    description:
      "Event is defined as a particular contest wich is a part of a program of contest. An example of an event is the long jump competition.",
    imageSrc: "./src/assets/icons/GoogleCalendar_icon.png",
    techStack: ["Hubilo"],
  },
  {
    title: "Figma Resources",
    description:
      "Explore, install, use, and remix thousands of plugins and files published to the Figma Community by designers and developers.",
    imageSrc: "./src/assets/icons/Figma_icon.png",
    techStack: ["UI/UX", "Figma"],
  },
  {
    title: "Native Mobile App",
    description:
      "React Native lets you create user friendly native apps ad doesn't compromse your users' experiences. With its robust framework.",
    imageSrc: "./src/assets/icons/React_icon.png",
    techStack: ["React"],
  },
  {
    title: "Only Beginners",
    description:
      "Learn the basics of how websites work, front-end vs back-end, and using a code editor. Learn basic HTML, CSS, and...",
    imageSrc: "./src/assets/icons/Html_icon.png",
    techStack: ["HTML", "CSS"],
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
