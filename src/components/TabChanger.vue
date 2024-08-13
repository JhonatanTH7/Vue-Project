<template>
  <section>
    <button
      :class="{ buttonActive: tab.name === actualTab }"
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
  margin-bottom: 4px;
}

button {
  display: flex;
  gap: 5px;
  align-items: center;
  height: 30px;
  background: none;
  border: none;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;
  color: #808080;
  font-weight: 600;
}

button img {
  height: 15px;
}

button:hover {
  background: #e7e7e7;
}

.buttonActive {
  background: #7864ec;
  font-weight: 900;
  color: #fff;
}

.buttonActive:hover {
  background: #7864ec;
  box-shadow: 0 0 5px #7864ec;
}
</style>
