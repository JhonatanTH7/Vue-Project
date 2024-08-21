<template>
  <div class="card">
    <div class="top">
      <div class="topLeftSide">
        <img :src="icon" alt="icon" />
        <h4>{{ name }}</h4>
      </div>
      <div class="topRightSide">
        <button class="hoverableNoBGButton"><i class="bx bx-star"></i></button>
        <button class="hoverableNoBGButton">
          <i class="bx bx-dots-vertical-rounded"></i>
        </button>
      </div>
    </div>
    <div class="middle">
      <p>{{ description }}</p>
    </div>
    <div class="bottom">
      <ProfileCarousel :profiles="members.slice(0,4)" />
      <div class="bottomRightSide">
        <TechStack v-for="label in techLabels" :key="label" :tech="label" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import "boxicons/css/boxicons.min.css";
import TechStack from "@/components/TechStack.vue";
import ProfileCarousel from "@/components/ProfileCarousel.vue";
import type { Team } from "@/utils/data/Data";

defineProps<Team>();
</script>

<style scoped>
.card {
  height: 138px;
  width: 320px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 1px 1px 10px var(--boxShadow);
  background-color: #ffffff;
}

.top {
  height: 38px;
  display: flex;
  justify-content: space-between;
}

.topLeftSide {
  display: flex;
  align-items: center;
  width: 70%;
  gap: 10px;
  img {
    height: 33px;
    width: 35px;
    border-radius: 50%;
  }
}

.topRightSide {
  width: 30%;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: end;
  font-size: 20px;
  button {
    height: 30px;
    width: 30px;
    font-size: 20px;
  }
}

.middle p {
  max-height: 47px;
  font-size: small;
}

.bottom {
  height: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bottomRightSide {
  display: flex;
  gap: 10px;
}
</style>
