<template>
  <li class="listItem">
    <div class="entityInfo">
      <img :src="icon" alt="icon" />
      <div>
        <h4>{{ title }}</h4>
        <p>{{ subtitle }}</p>
      </div>
    </div>
    <slot></slot>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
  title: string;
  subtitle: string;
}>();
</script>

<style scoped>
.listItem {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

li:not(:last-child) {
  margin-bottom: 10px;
}

.entityInfo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.entityInfo img {
  height: 25px;
  width: 27px;
  border-radius: 50%;
}
</style>
