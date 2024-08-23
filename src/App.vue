<script setup lang="ts">
import TopBar from "@/components/topBar/TopBar.vue";
import "/src/assets/styles/index.css";
import TabChanger from "@/components/TabChanger.vue";
import TabShower from "@/components/TabShower.vue";
import HeaderProfileSection from "@/components/HeaderProfileSection.vue";
import { ref } from "vue";
const actualTab = ref("Profile");

const handleTabChange = (tab: string) => {
  actualTab.value = tab;
};
</script>

<template>
  <header>
    <TopBar />
    <div class="headerBottomSection">
      <HeaderProfileSection />
      <TabChanger @changeTab="handleTabChange" />
    </div>
  </header>
  <main>
    <TabShower :tab="actualTab" />
  </main>
</template>

<style scoped>
header {
  height: 45vh;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.headerBottomSection {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

main {
  height: 55vh;
  display: flex;
  justify-content: center;
}
</style>
