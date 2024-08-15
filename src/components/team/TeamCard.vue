<template>
  <div class="card">
    <div class="top">
      <div class="topLeftSide">
        <img :src="imageSrc" alt="icon" />
        <h4>{{ title }}</h4>
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
      <ProfileCarousel :profiles="profiles" />
      <div class="bottomRightSide">
        <TechStack v-for="tech in techStack" :key="tech" :tech="tech" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import "boxicons/css/boxicons.min.css";
import TechStack from "@/components/TechStack.vue";
import ProfileCarousel from "@/components/team/ProfileCarousel.vue";
import { getTechBGColor, getTechTextColor } from "@/utils/helpers/ColorHelper";

defineProps<{
  title: string;
  description: string;
  imageSrc: string;
  techStack: Array<string>;
}>();

const profiles = [
  { name: "John Doe", image: "./src/assets/icons/Profile_icon.jpg" },
  { name: "Jane Smith", image: "./src/assets/icons/Profile_icon.jpg" },
  { name: "Mike Ross", image: "./src/assets/icons/Profile_icon.jpg" },
  { name: "Anna Taylor", image: "./src/assets/icons/Profile_icon.jpg" },
];
</script>

<style scoped>
.card {
  height: 138px;
  width: 320px;
  padding: 10px;
  border-radius: 7px;
  box-shadow: 1px 1px 10px #937f7f;
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

.middle {
  height: 57px;
  padding-top: 5px;
  p {
    max-height: 47px;
    margin: 0;
    font-size: small;
  }
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
