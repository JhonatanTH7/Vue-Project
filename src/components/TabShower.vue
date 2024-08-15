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
import ProfileTab from "@/components/profile/ProfileTab.vue";
import TeamTab from "@/components/team/TeamTab.vue";
import ProjectsTab from "@/components/projects/ProjectsTab.vue";
import ConnectionsTab from "@/components/connections/ConnectionsTab.vue";
</script>

<style scoped></style>
