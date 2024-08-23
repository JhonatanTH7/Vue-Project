<template>
  <div class="profileCarousel">
    <img
      :src="profile.icon"
      :alt="profile.name"
      v-for="(profile, index) in profiles"
      :key="index"
      class="profile"
      :style="'transform: translateX(calc(' + index + ' * 60%))'"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  profiles: { name: string; icon: string }[];
}>();
</script>
<style scoped>
.profileCarousel {
  position: relative;
  display: flex;
  align-items: center;
  height: 25px;
}

.profile {
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 2px solid #ffffff;
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
