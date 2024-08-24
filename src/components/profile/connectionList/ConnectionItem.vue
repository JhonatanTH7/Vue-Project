<template>
  <li class="connectionItem">
    <div class="userInfo">
      <img :src="icon" alt="avatar" />
      <div>
        <h4>{{ name }}</h4>
        <p>{{ connectionsNumber }} Connections</p>
      </div>
    </div>
    <button
      :class="
        connectionStatus
          ? 'hoverablePurpleBGIconButton'
          : 'hoverableBGIconButton'
      "
    >
      <i :class="connectionStatus ? 'bx bx-user-x' : 'bx bx-user-check'"></i>
    </button>
  </li>
</template>

<script setup lang="ts">
import type { Connection } from "@/utils/types/Types";
defineProps<Connection>();
</script>

<style scoped>
.connectionItem {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.userInfo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.userInfo img {
  height: 25px;
  width: 27px;
  border-radius: 50%;
}
</style>
