<template>
  <section class="scrollableCardsContainer">
    <ProjectCard
      :image-src="project.imageSrc"
      :title="project.title"
      :client="project.client"
      :budget="project.budget"
      :total-budget="project.totalBudget"
      :start-date="project.startDate"
      :deadline="project.deadline"
      :description="project.description"
      :total-hours="project.totalHours"
      :hours="project.hours"
      :days-left="project.daysLeft"
      :members="project.members"
      :chat-messages="project.chatMessages"
      :tasks-completed="project.tasksCompleted"
      :total-tasks="project.totalTasks"
      :profiles="project.profiles"
      v-for="project in projects"
    />
  </section>
</template>

<script setup lang="ts">
import ProjectCard from "./ProjectCard.vue";

const projects = [
  {
    imageSrc: "./src/assets/icons/Vuejs_icon.png",
    title: "Project 1",
    client: "Client 1",
    budget: 5000,
    totalBudget: 10000,
    startDate: "2021-09-01",
    deadline: "2021-12-01",
    description: "Description 1",
    totalHours: 100,
    hours: 50,
    daysLeft: 30,
    members: 5,
    chatMessages: 100,
    tasksCompleted: 10,
    totalTasks: 20,
    profiles: [
      { name: "John Doe", image: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Jane Smith", image: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Mike Ross", image: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Anna Taylor", image: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Anna Taylor", image: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Anna Taylor", image: "./src/assets/icons/Profile_icon.jpg" },
    ],
  },
  {
    imageSrc: "./src/assets/icons/React_icon.png",
    title: "Project 2",
    client: "Client 2",
    budget: 10000,
    totalBudget: 20000,
    startDate: "2021-09-01",
    deadline: "2021-12-01",
    description: "Description 2",
    totalHours: 200,
    hours: 100,
    daysLeft: 60,
    members: 10,
    chatMessages: 200,
    tasksCompleted: 20,
    totalTasks: 145,
    profiles: [
      { name: "John Doe", image: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Jane Smith", image: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Mike Ross", image: "./src/assets/icons/Profile_icon.jpg" },
    ],
  },
  {
    imageSrc: "./src/assets/icons/Figma_icon.png",
    title: "Project 3",
    client: "Client 3",
    budget: 15000,
    totalBudget: 30000,
    startDate: "2021-09-01",
    deadline: "2021-12-01",
    description: "Description 3",
    totalHours: 300,
    hours: 150,
    daysLeft: 90,
    members: 15,
    chatMessages: 300,
    tasksCompleted: 30,
    totalTasks: 45,
    profiles: [
      { name: "John Doe", image: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Jane Smith", image: "./src/assets/icons/Profile_icon.jpg" },
    ],
  },
  {
    imageSrc: "./src/assets/icons/Html_icon.png",
    title: "Project 4",
    client: "Client 4",
    budget: 20000,
    totalBudget: 40000,
    startDate: "2021-09-01",
    deadline: "2021-12-01",
    description: "Description 4",
    totalHours: 400,
    hours: 200,
    daysLeft: 120,
    members: 20,
    chatMessages: 400,
    tasksCompleted: 13,
    totalTasks: 80,
    profiles: [
      { name: "John Doe", image: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Jane Smith", image: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Mike Ross", image: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Anna Taylor", image: "./src/assets/icons/Profile_icon.jpg" },
    ],
  },
];
</script>

<style scoped></style>
