<template>
  <div class="projectCard">
    <div>
      <button class="hoverableNoBGButton">
        <i class="bx bx-dots-vertical-rounded"></i>
      </button>
    </div>
    <img src="" alt="User photo" />
    <div>
      <p>Nombre</p>
      <p>Cargo</p>
    </div>
    <div class="techStack">
      <TechStack v-for="tech in techStack" :key="tech" :tech="tech" />
    </div>
    <div class="userInfo">Componente para los 3</div>
    <div class="connectionInfo">
      <button class="bottomRightSectionButton">
        <img src="@/assets/icons/VerifiedUser_icon.svg" alt="" />
        Connected
      </button>
      <button>mensajeria</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import TechStack from "@/components/TechStack.vue";
const techStack = ["Vue", "React", "Angular"];
</script>

<style scoped>
.projectCard {
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 340px;
  border-radius: 5px;
  padding: 10px;
  /* background: yellow; */
}

.projectCard img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.projectCard div {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.bottomRightSectionButton {
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.connectionInfo button {
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
}

.techStack {
  display: flex;
  border-radius: 5px;
}
</style>
