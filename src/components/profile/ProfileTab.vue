<template>
  <section>
    <div class="leftSide">
      <SideProfileDetails />
      <SideProfileOverview />
    </div>
    <div class="rightSide">
      <ActivityTimeline />
      <div class="middleRightSection">
        <ConnectionList />
        <TeamList />
      </div>
      <ProjectTable :projects="projects" />
    </div>
  </section>
</template>

<script setup lang="ts">
import SideProfileDetails from "@/components/profile/sideProfileInfo/SideProfileDetails.vue";
import SideProfileOverview from "@/components/profile/sideProfileInfo/SideProfileOverview.vue";
import ActivityTimeline from "@/components/profile/activityTimeline/ActivityTimeline.vue";
import ConnectionList from "@/components/profile/connectionList/ConnectionList.vue";
import TeamList from "@/components/profile/teamList/TeamList.vue";
import ProjectTable from "@/components/profile/projectTable/ProjectTable.vue";
import { projects } from "@/utils/data/Data";
</script>

<style scoped>
section {
  width: 80%;
  width: 80%;
  display: flex;
  gap: 20px;
}

.leftSide {
  width: 40%;
  background-color: blueviolet;
}

.rightSide {
  width: 60%;
  background-color: blue;
}
</style>
