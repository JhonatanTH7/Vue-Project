<template>
  <section class="container">
    <div class="leftContent">
      <label for="searchInput" class="searchLabel"
        ><img src="@/assets/icons/Search_icon.svg" alt="SearchIcon"
      /></label>
      <input type="text" placeholder="Search" id="searchInput" />
    </div>
    <div class="rightContent">
      <TopBarItem v-for="path in imagesPaths" :key="path" :imageSrc="path" />
      <button disabled class="profileIconButton hoverableNoBGButton">
        <img src="@/assets/icons/Profile_icon.jpg" alt="Profile Icon" />
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import TopBarItem from "@/components/topBar/TopBarItem.vue";

const imagesPaths = [
  "./src/assets/icons/Language_icon.svg",
  "./src/assets/icons/Sun_icon.svg",
  "./src/assets/icons/Apps_icon.svg",
  "./src/assets/icons/Notification_icon.svg",
];
</script>

<style scoped>
.container {
  width: 80%;
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  box-shadow: 1px 1px 10px var(--boxShadow);
  margin-top: 10px;
  background-color: var(--primary);
}

.leftContent {
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  gap: 8px;
}

.searchLabel {
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 20px;
}

.searchLabel img {
  height: 30px;
  width: 30px;
}

#searchInput {
  height: 70%;
  width: 50%;
  border: none;
  border-radius: 5px;
  padding-left: 10px;
}

.rightContent {
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 8px;
}

.profileIconButton {
  height: 35px;
  width: 40px;
  margin-right: 20px;
}

.profileIconButton img {
  height: 100%;
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
}
</style>
