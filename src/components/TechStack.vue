<template>
  <p
    :style="{
      backgroundColor: getTechBGColor(tech),
      color: getTechTextColor(tech),
    }"
    class="tech"
  >
    {{ tech }}
  </p>
</template>

<script setup lang="ts">
import { getTechBGColor, getTechTextColor } from "@/utils/helpers/ColorHelper";

defineProps<{
  tech: string;
}>();
</script>

<style scoped>
.tech {
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  font-size: 11px;
  letter-spacing: 0.6px;
}
</style>
