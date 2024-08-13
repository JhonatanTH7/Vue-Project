<script setup lang="ts">
import TopBar from "@/components/TopBar.vue";
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
  <body>
    <TabShower :tab="actualTab" />
  </body>
</template>

<style scoped>
header {
  height: 50vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}

.headerBottomSection {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
}

body {
  height: 50vh;
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
}
</style>
