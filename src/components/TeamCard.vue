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
      <img src="" alt="icons" />
      <div class="bottomRightSide">
        <p
          v-for="tech in techStack"
          :key="tech"
          :style="{
            backgroundColor: getTechBGColor(tech),
            color: getTechTextColor(tech),
          }"
          class="tech"
        >
          {{ tech }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import "boxicons/css/boxicons.min.css";

defineProps<{
  title: string;
  description: string;
  imageSrc: string;
  techStack: Array<string>;
}>();

const getTechBGColor = (tech: string) => {
  switch (tech) {
    case "React":
      return "#eb94ff";
    case "MUI":
      return "#c0e6ff";
    case "Vuejs":
      return "#a8f2d1";
    case "Developer":
      return "#f4bbbb";
    case "Hubilo":
      return "#a8f2d1";
    case "UI/UX":
      return "#a8f2d1";
    case "Figma":
      return "#d0d0d0";
    case "HTML":
      return "#ffcebc";
    case "CSS":
      return "#b7f7f7";
    default:
      return "#000";
  }
};

const getTechTextColor = (tech: string) => {
  switch (tech) {
    case "React":
      return "#80009d";
    case "MUI":
      return "#40a9ee";
    case "Vuejs":
      return "#0b9154";
    case "Developer":
      return "#ff0000";
    case "Hubilo":
      return "#0b9154";
    case "UI/UX":
      return "#0b9154";
    case "Figma":
      return "#6c6c6c";
    case "HTML":
      return "#e45d2b";
    case "CSS":
      return "#047575";
    default:
      return "#fff";
  }
};
</script>

<style scoped>
.card {
  height: 128px;
  width: 320px;
  padding: 10px;
  margin: 5px;
  border-radius: 7px;
  box-shadow: 1px 1px 10px #937f7f;
}

.top {
  height: 30%;
  display: flex;
  justify-content: space-between;
  /* background-color: yellow; */
  margin: 0;
  padding: 0;
}

.topLeftSide {
  display: flex;
  align-items: center;
  width: 70%;
  gap: 10px;
}

.topLeftSide img {
  height: 33px;
  width: 35px;
  border-radius: 50%;
}

.topRightSide {
  width: 30%;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: end;
  font-size: 20px;
}

.topRightSide button {
  height: 30px;
  width: 30px;
  font-size: 20px;
}

.middle {
  height: 40%;
  /* background-color: blue; */
}

.middle p {
  margin: 0;
  padding-top: 5px;
  font-size: 14px;
}

.bottom {
  height: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: red; */
}

.bottomRightSide {
  display: flex;
  gap: 10px;
}

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
