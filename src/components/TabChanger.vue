<template>
  <section>
    <button
      :class="{
        purpleBGIconButton: tab.name === actualTab,
        hoverableNoBGButton: tab.name !== actualTab,
      }"
      @click="changeTab(tab.name)"
      v-for="tab in tabs"
      :key="tab.name"
    >
      <img :src="tab.image" alt="icon" />
      {{ tab.name }}
    </button>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["changeTab"]);
const actualTab = ref("Profile");
const changeTab = (tab: string) => {
  emit("changeTab", tab);
  actualTab.value = tab;
};
const tabs = [
  { name: "Profile", image: "./src/assets/icons/VerifiedUser_icon.svg" },
  { name: "Team", image: "./src/assets/icons/Team_icon.svg" },
  { name: "Projects", image: "./src/assets/icons/Projects_icon.svg" },
  { name: "Connections", image: "./src/assets/icons/Connections_icon.svg" },
];
</script>

<style scoped>
section {
  display: flex;
  gap: 5px;
  height: 30px;
  width: 80%;
  justify-content: start;
  margin-bottom: 10px;
  margin-top: 10px;
}

button {
  padding-left: 10px;
  padding-right: 10px;
  font-weight: 600;
}

button img {
  height: 15px;
}
</style>
