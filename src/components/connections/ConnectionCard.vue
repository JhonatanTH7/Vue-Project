<template>
  <div class="connectionCard">
    <div class="top">
      <button class="hoverableNoBGButton">
        <i class="bx bx-dots-vertical-rounded"></i>
      </button>
    </div>
    <img :src="imageSrc" alt="User photo" class="userPhoto" />
    <div>
      <h3>{{ name }}</h3>
      <p class="position">{{ position }}</p>
    </div>
    <div class="techStack">
      <TechStack v-for="tech in techStack" :key="tech" :tech="tech" />
    </div>
    <div class="userInfo">
      <div class="info">
        <strong>
          {{ numberOfProjects }}
        </strong>
        <p>Projects</p>
      </div>
      <div class="info">
        <strong>
          {{ numberOfTasks }}
        </strong>
        <p>Tasks</p>
      </div>
      <div class="info">
        <strong>
          {{ numberOfConnections }}
        </strong>
        <p>Connections</p>
      </div>
    </div>
    <div class="connectionInfo">
      <button class="purpleBGIconButton">
        <img src="@/assets/icons/VerifiedUser_icon.svg" alt="" />
        Connected
      </button>
      <button class="mailButton"><i class="bx bx-envelope"></i></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import TechStack from "@/components/TechStack.vue";

defineProps<{
  name: string;
  position: string;
  imageSrc: string;
  numberOfConnections: number;
  numberOfProjects: number;
  numberOfTasks: number;
  techStack: string[];
}>();
</script>

<style scoped>
.connectionCard {
  width: 320px;
  height: 305px;
  display: flex;
  gap: 12px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 1px 1px 10px var(--boxShadow);
  background-color: var(--primary);
}

.top {
  display: flex;
  justify-content: end;
  width: 100%;
}

.top button {
  font-size: 20px;
}

.userPhoto {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: aqua;
}

.techStack {
  display: flex;
  gap: 10px;
}

.userInfo {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.connectionInfo {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.mailButton {
  border: none;
  border-radius: 5px;
  height: 30px;
  width: 30px;
  font-size: 15px;
  color: #808080;
}

.position {
  font-size: small;
}

h3 {
  margin: 0;
  text-align: center;
}
</style>
