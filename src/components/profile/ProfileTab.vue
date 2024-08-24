<template>
  <div class="profileTabContainer">
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
  </div>
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
.profileTabContainer {
  display: flex;
  height: min-content;
  width: 80%;
  gap: 20px;
  padding-bottom: 10px;
  font-size: 12px;
}

.leftSide {
  width: 40%;
}

.leftSide,
.rightSide {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.rightSide {
  width: 60%;
}

.middleRightSection {
  height: 300px;
  width: 100%;
  display: flex;
  gap: 20px;
}
</style>
