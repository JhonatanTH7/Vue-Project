<template>
  <section class="scrollableCardsContainer">
    <ProjectCard
      v-for="project in projects"
      :key="project.name"
      :id="project.id"
      :name="project.name"
      :client="project.client"
      :budget="project.budget"
      :totalBudget="project.totalBudget"
      :startDate="project.startDate"
      :deadline="project.deadline"
      :description="project.description"
      :icon="project.icon"
      :type="project.type"
      :tasksCompleted="project.tasksCompleted"
      :totalTasks="project.totalTasks"
      :totalHours="project.totalHours"
      :hours="project.hours"
      :daysLeft="project.daysLeft"
      :chatMessages="project.chatMessages"
      :team="project.team"
    />
  </section>
</template>

<script setup lang="ts">
import ProjectCard from "./ProjectCard.vue";
import { projects } from "@/utils/data/Data";
</script>

<style scoped></style>
