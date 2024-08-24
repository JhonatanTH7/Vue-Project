<template>
  <section class="connectionListContainer">
    <div class="header">
      <h2>Connection</h2>
      <button class="hoverableNoBGButton">
        <i class="bx bx-dots-vertical-rounded"></i>
      </button>
    </div>
    <ul>
      <ConnectionItem
        v-for="connection in connections.slice(0, 5)"
        :key="connection.id"
        :id="connection.id"
        :icon="connection.icon"
        :name="connection.name"
        :connectionsNumber="connection.connectionsNumber"
        :connectionStatus="connection.connectionStatus"
        :position="connection.position"
        :projects="connection.projects"
        :tasks="connection.tasks"
        :techLabels="connection.techLabels"
      />
    </ul>
    <div class="footer">
      <p>View all Connections</p>
    </div>
  </section>
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
  padding: 20px 20px 0 20px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.hoverableNoBGButton {
  height: 20px;
}

ul li:not(:last-child) {
  margin-bottom: 10px;
}

.footer {
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    color: var(--purple);
  }
}
</style>
