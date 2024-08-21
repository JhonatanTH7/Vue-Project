<template>
  <section class="scrollableCardsContainer">
    <TeamCard
      v-for="team in teams"
      :key="team.id"
      :id="team.id"
      :name="team.name"
      :description="team.description"
      :icon="team.icon"
      :techLabels="team.techLabels"
      :leader="team.leader"
      :members="team.members"
    />
  </section>
</template>

<script setup lang="ts">
import TeamCard from "@/components/team/TeamCard.vue";
import { teams } from "@/utils/data/Data";
</script>

<style scoped></style>
