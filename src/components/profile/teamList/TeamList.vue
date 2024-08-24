<template>
  <section class="teamListContainer">
    <div class="header">
      <h2>Teams</h2>
      <button class="hoverableNoBGButton">
        <i class="bx bx-dots-vertical-rounded"></i>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.teamListContainer {
  width: 50%;
  border-radius: 5px;
  box-shadow: 1px 1px 10px var(--boxShadow);
  background-color: var(--primary);
  padding: 20px;
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
</style>
