<script setup lang="ts">
import TopBar from "@/components/TopBar.vue";
import "@/assets/styles/index.css";
</script>

<template>
  <header>
    <TopBar />
  </header>
  <body></body>
  <footer></footer>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 30vh;
  background: red;
}
body {
  height: 65vh;
  background: aquamarine;
}
footer {
  height: 5vh;
  background: green;
}
</style>
