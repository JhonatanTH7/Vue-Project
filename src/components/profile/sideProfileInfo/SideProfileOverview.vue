<template>
  <section class="sideProfileOverviewContainer">
    <h4>Overview</h4>
    <SideProfileItem
      v-for="item in sideOverviewItems"
      :classBoxIcons="item.classBoxIcons"
      :title="item.title"
      :value="item.value"
    />
  </section>
</template>

<script setup lang="ts">
import SideProfileItem from "@/components/profile/sideProfileInfo/SideProfileItem.vue";

const sideOverviewItems: {
  classBoxIcons: string;
  title: string;
  value: string;
}[] = [
  {
    classBoxIcons: "bx bx-check",
    title: "Task Compiled",
    value: "13.5k",
  },
  {
    classBoxIcons: "bx bx-group",
    title: "Connections",
    value: "897",
  },
  {
    classBoxIcons: "bx bx-category",
    title: "Projects Compiled",
    value: "146",
  },
];
</script>

<style scoped>
.sideProfileOverviewContainer {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 5px;
  box-shadow: 1px 1px 10px var(--boxShadow);
  background-color: var(--primary);
  padding: 20px;
}
</style>
