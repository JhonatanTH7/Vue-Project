<template>
  <div class="card">
    <div class="top">
      <div class="topLeftSide">
        <img src="" alt="" />
        <h4>{{ title }}</h4>
      </div>
      <div class="topRightSide">
        <button><img src="" alt="Star Icon" /></button>
        <button><img src="" alt="See more Icon" /></button>
      </div>
    </div>
    <div class="middle">
      <p>{{ description }}</p>
    </div>
    <div class="bottom">
      <img src="" alt="icons" />
      <div class="bottomRightSide">
        <p>React</p>
        <p>MUI</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
}>();
</script>

<style scoped>
.card {
  height: 110px;
  width: 320px;
  padding: 10px;
  margin: 5px;
  border-radius: 7px;
  box-shadow: 1px 1px 10px #937f7f;
}

.top {
  height: 35%;
  display: flex;
  justify-content: space-between;
}

.topLeftSide {
  display: flex;
  gap: 10px;
}

.middle {
  height: 30%;
  margin-top: 10px;
}

.bottom {
  height: 35%;
  display: flex;
  justify-content: space-between;
}

.bottomRightSide {
  display: flex;
  gap: 10px;
}
</style>
