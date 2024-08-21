<template>
  <tr>
    <td class="centerTd">
      <input type="checkbox" />
    </td>
    <td>
      <div class="project-name">
        <img :src="icon" alt="Project Icon" />
        <div>
          <h4>{{ name }}</h4>
          <p>{{ type }}</p>
        </div>
      </div>
    </td>
    <td class="centerTd">
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
    <td class="centerTd">
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
.project-name {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.project-name img {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

.centerTd {
  display: flex;
  justify-content: center;
  align-items: center;
}

.projectProgress {
  display: flex;
  align-items: center;
  gap: 5px;
}

.projectProgress p {
  white-space: nowrap;
}

td {
  overflow: hidden;
}
</style>
