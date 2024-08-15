<template>
  <div class="profileCarousel">
    <div
      v-for="(profile, index) in profiles"
      :key="index"
      class="profile"
      :style="'transform: translateX(calc(' + index + ' * 60%))'"
    >
      <img :src="profile.image" :alt="profile.name" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  profiles: Array<{ name: string; image: string }>;
}>();
</script>

<style scoped>
.profileCarousel {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
}

.profile {
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  overflow: hidden;
  background: blue;
  border: 2px solid white;
  img {
    width: 100%;
    height: 100%;
  }
}

.profile:hover {
  z-index: 1;
  transition: 0.5s;
}
</style>
