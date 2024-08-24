<template>
  <section>
    <button
      :class="
        tab.name === actualTab
          ? 'hoverablePurpleBGIconButton'
          : 'hoverableNoBGButton'
      "
      @click="changeTab(tab.name)"
      v-for="tab in tabs"
      :key="tab.name"
    >
      <i :class="tab.classBoxIcons"></i>
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
  { name: "Profile", classBoxIcons: "bx bx-user-check" },
  { name: "Team", classBoxIcons: "bx bx-group" },
  { name: "Projects", classBoxIcons: "bx bx-category" },
  { name: "Connections", classBoxIcons: "bx bx-link-alt" },
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

.hoverableNoBGButton i {
  font-size: 15px;
}
</style>
