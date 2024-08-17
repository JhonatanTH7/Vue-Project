<template>
  <div class="project-list">
    <div class="project-item" v-for="project in projects" :key="project.id">
      <div class="project-info">
        <input type="checkbox" />
        <div class="project-name">
          <img :src="project.icon" alt="Project Icon" />
          <div>
            <h3>{{ project.name }}</h3>
            <p>{{ project.type }}</p>
          </div>
        </div>
        <div class="project-leader">
          <p>{{ project.leader }}</p>
        </div>
        <div class="project-team">
          <ImageCarousel :profiles="project.team" />
        </div>
        <div class="project-progress">
          <ProgressBar :max="100" :progress="progress" />
        </div>
        <div class="project-action">
          <button @click="handleAction(project.id)">...</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import ProgressBar from "@/components/ProgressBar.vue";
import ImageCarousel from "@/components/ProfileCarousel.vue";

defineProps({
  projects: {
    type: Array as PropType<
      {
        id: number;
        name: string;
        type: string;
        icon: string;
        leader: string;
        team: string[];
        progress: number;
      }[]
    >,
    required: true,
  },
});

const handleAction = (id: number) => {
  // Lógica para manejar la acción del botón
  console.log(`Action triggered for project ID: ${id}`);
};
</script>

<style scoped>
.project-list {
  width: 100%;
}

.project-item {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;
}

.project-info {
  display: flex;
  align-items: center;
  width: 100%;
}

.project-name {
  display: flex;
  align-items: center;
  width: 30%;
}

.project-name img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.project-leader,
.project-team,
.project-progress,
.project-action {
  text-align: center;
  width: 15%;
}

.project-action button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.project-progress {
  width: 20%;
}
</style>
