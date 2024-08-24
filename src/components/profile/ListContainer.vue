<template>
  <section class="listContainer">
    <div class="header">
      <h2>{{ headerMessage }}</h2>
      <button class="hoverableNoBGButton">
        <i class="bx bx-dots-vertical-rounded"></i>
      </button>
    </div>
    <ul>
      <slot name="items"></slot>
    </ul>
    <div class="footer">
      <p>{{ footerMessage }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  headerMessage: string;
  footerMessage: string;
}>();
</script>

<style scoped>
.listContainer {
  width: 100%;
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
