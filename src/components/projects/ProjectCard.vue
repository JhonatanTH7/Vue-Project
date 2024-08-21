<template>
  <div class="projectCard">
    <div class="projectHeader">
      <img :src="icon" alt="Project Logo" class="projectLogo" />
      <div class="projectInfo">
        <h3 class="projectTitle">{{ name }}</h3>
        <p class="projectClient">Client: {{ client }}</p>
      </div>
      <button class="projectMenu hoverableNoBGButton">
        <i class="bx bx-dots-vertical-rounded"></i>
      </button>
    </div>

    <div class="projectDetails">
      <div class="projectBudget">
        <p>
          <strong>${{ totalBudget }}</strong> / ${{ budget }}
        </p>
        <span>Total Budget</span>
      </div>
      <div class="projectDates">
        <p><strong>Start Date:</strong> {{ startDate }}</p>
        <p><strong>Deadline:</strong> {{ deadline }}</p>
      </div>
    </div>
    <p class="projectDescription">
      {{ description }}
    </p>

    <div class="projectProgress">
      <div class="projectTiming">
        <p><strong>All Hours:</strong> {{ totalHours }}/{{ hours }}</p>
        <p class="projectDeadlineWarning">{{ daysLeft }} Days left</p>
      </div>
      <div class="progressBarHeader">
        <span>Task: {{ tasksCompleted }}/{{ totalTasks }}</span>
        <span>{{ percentage }}% Completed</span>
      </div>
      <ProgressBar
        @getPercentage="handleGetPercentage"
        :progress="tasksCompleted"
        :max="totalTasks"
      />
    </div>

    <div class="projectFooter">
      <ProfileCarousel :profiles="team.members.slice(0, 4)" />
      <p class="projectMembers">{{ team.members.length }} members</p>
      <div><i class="iconChat bx bx-message-dots"></i>{{ chatMessages }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import ProgressBar from "@/components/ProgressBar.vue";
import ProfileCarousel from "@/components/ProfileCarousel.vue";
import type { Project } from "@/utils/types/Types";

const percentage = ref(0);

const handleGetPercentage = (value: number) => {
  percentage.value = value;
};

defineProps<Project>();
</script>

<style scoped>
.projectCard {
  height: 309px;
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 1px 1px 10px var(--boxShadow);
  background-color: var(--primary);
}

.projectHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.projectLogo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.projectInfo {
  flex-grow: 1;
  margin-left: 10px;
}

.projectTitle {
  margin: 0;
  font-size: 16px;
  font-weight: bold;
}

.projectClient {
  margin: 0;
  font-size: 12px;
  color: #8c8c8c;
}

.projectMenu {
  font-size: 20px;
}

.projectDetails {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}

.projectBudget,
.projectDates {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 12px;
  color: #8c8c8c;
}

.projectBudget {
  background-color: #e7e7e7;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 3px;
  padding-bottom: 3px;
}

.projectBudget p,
.projectDates p {
  margin: 0;
}

.projectDescription {
  height: 70px;
  font-size: 14px;
  color: #666;
  margin: 10px 0;
}

.projectProgress {
  margin: 10px 0;
}

.progressBarHeader {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;
  color: #8c8c8c;
  margin-top: 5px;
  margin-bottom: 5px;
}

.projectTiming {
  display: flex;
  justify-content: space-between;
}

.projectTiming p {
  display: flex;
  align-items: center;
  font-size: 12px;
}

.projectDeadlineWarning {
  color: #ff4d4f;
  background-color: rgb(249, 181, 181);
  padding: 2px 5px;
  border-radius: 5px;
}

.projectFooter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}

.projectFooter div {
  display: flex;
  align-items: center;
  gap: 5px;
}

.projectMembers {
  font-size: 12px;
  color: #8c8c8c;
}

.iconChat {
  font-size: 18px;
  color: #8c8c8c;
}
</style>
