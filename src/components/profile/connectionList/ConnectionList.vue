<template>
  <div class="connectionListContainer">
    <h2>Connection</h2>
    <ul>
      <ConnectionItem
        v-for="connection in connections"
        :key="connection.id"
        :connection="connection"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import ConnectionItem from "@/components/profile/connectionList/ConnectionItem.vue";
import { connections } from "@/utils/data/Data";
</script>

<style scoped>
.connectionListContainer {
  width: 50%;
  border-radius: 5px;
  box-shadow: 1px 1px 10px var(--boxShadow);
  background-color: var(--primary);
  padding: 20px;
}
</style>
