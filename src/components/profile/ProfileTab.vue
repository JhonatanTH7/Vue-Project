<template>
  <div class="profileTabContainer">
    <div class="leftSide">
      <SideProfileDetails />
      <SideProfileOverview />
    </div>
    <div class="rightSide">
      <ActivityTimeline />
      <div class="middleRightSection">
        <ListContainer
          headerMessage="Connection"
          footerMessage="View all Connections"
        >
          <template #items>
            <ListItem
              v-for="connection in connections.slice(0, 5)"
              :icon="connection.icon"
              :title="connection.name"
              :subtitle="connection.connectionsNumber + ' connections'"
            >
              <template #default>
                <button
                  :class="
                    connection.connectionStatus
                      ? 'hoverablePurpleBGIconButton'
                      : 'hoverableBGIconButton'
                  "
                >
                  <i
                    :class="
                      connection.connectionStatus
                        ? 'bx bx-user-x'
                        : 'bx bx-user-check'
                    "
                  ></i>
                </button>
              </template>
            </ListItem>
          </template>
        </ListContainer>
        <ListContainer headerMessage="Teams" footerMessage="View all Teams">
          <template #items>
            <ListItem
              v-for="team in teams.slice(0, 5)"
              :icon="team.icon"
              :title="team.name"
              :subtitle="team.members.length + ' members'"
            >
              <template #default>
                <TechStack :tech="team.techLabels[0].toString()" />
              </template>
            </ListItem>
          </template>
        </ListContainer>
      </div>
      <ProjectTable :projects="projects" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SideProfileDetails from "@/components/profile/sideProfileInfo/SideProfileDetails.vue";
import SideProfileOverview from "@/components/profile/sideProfileInfo/SideProfileOverview.vue";
import ActivityTimeline from "@/components/profile/activityTimeline/ActivityTimeline.vue";
import ListContainer from "@/components/profile/ListContainer.vue";
import ListItem from "@/components/profile/ListItem.vue";
import TechStack from "@/components/TechStack.vue";
import ProjectTable from "@/components/profile/projectTable/ProjectTable.vue";
import { projects, connections, teams } from "@/utils/data/Data";
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
