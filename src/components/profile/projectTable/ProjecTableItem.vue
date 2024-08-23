<template>
  <tr>
    <td>
      <input type="checkbox" />
    </td>
    <td>
      <div class="projectName">
        <img :src="icon" alt="Project Icon" />
        <div>
          <h4>{{ name }}</h4>
          <p>{{ type }}</p>
        </div>
      </div>
    </td>
    <td>
      <p>{{ team.leader.name }}</p>
    </td>
    <td>
      <ProfileCarousel :profiles="team.members.slice(0, 4)" />
    </td>
    <td>
      <div class="projectProgress">
        <ProgressBar :max="totalTasks" :progress="tasksCompleted" />
        <p>{{ tasksCompleted }} %</p>
      </div>
    </td>
    <td class="center">
      <button class="hoverableNoBGButton">
        <i class="bx bx-dots-vertical-rounded"></i>
      </button>
    </td>
  </tr>
</template>

<script lang="ts" setup>
import ProgressBar from "@/components/ProgressBar.vue";
import ProfileCarousel from "@/components/ProfileCarousel.vue";
import type { Project } from "@/utils/types/Types";

defineProps<Project>();
</script>

<style scoped>
.projectName {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
}

.projectName img {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

.projectProgress {
  display: flex;
  align-items: center;
  gap: 5px;
  padding-left: 5px;
}

.projectProgress p {
  white-space: nowrap;
}

.center {
  display: flex;
  justify-content: center;
}

td {
  overflow: hidden;
}

td:first-child {
  padding-left: 20px;
}

td:last-child {
  padding-right: 20px;
}
</style>
