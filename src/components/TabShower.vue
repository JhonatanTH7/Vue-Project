<template>
  <ProfileTab v-if="tab === 'Profile'" />
  <TeamTab v-if="tab === 'Team'" />
  <ProjectsTab v-if="tab === 'Projects'" />
  <ConnectionsTab v-if="tab === 'Connections'" />
</template>

<script setup lang="ts">
defineProps<{
  tab: string;
}>();
import ProfileTab from "./ProfileTab.vue";
import TeamTab from "./TeamTab.vue";
import ProjectsTab from "./ProjectsTab.vue";
import ConnectionsTab from "./ConnectionsTab.vue";
</script>

<style scoped></style>
