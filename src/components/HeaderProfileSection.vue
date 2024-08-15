<template>
  <section class="container">
    <div class="topSection"></div>
    <div class="bottomSection">
      <div class="bottomLeftSection">
        <img src="@/assets/icons/Profile_icon.jpg" alt="Profile Icon" />
        <section>
          <p class="userName">John Doe</p>
          <div class="buttonsContainer">
            <button
              v-for="button in disabledButtonsInfo"
              :key="button.name"
              disabled
              class="buttons"
            >
              <img :src="button.image" alt="icon" />
              {{ button.name }}
            </button>
          </div>
        </section>
      </div>
      <button class="bottomRightSectionButton purpleBGIconButton">
        <img src="@/assets/icons/VerifiedUser_icon.svg" alt="" />
        Connected
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
const disabledButtonsInfo = [
  { name: "Coder", image: "./src/assets/icons/Palette_icon.svg" },
  { name: "Medellin", image: "./src/assets/icons/Location_icon.svg" },
  { name: "Joined April 2021", image: "./src/assets/icons/Calendar_icon.svg" },
];
</script>

<style scoped>
.container {
  height: 100%;
  width: 80%;
  margin-top: 10px;
  border-radius: 5px;
  box-shadow: 0 0 2px 0 #000;
  overflow: hidden;
}

.topSection {
  height: 60%;
  background: rgb(255, 1, 202);
  background: linear-gradient(
    120deg,
    rgba(255, 1, 202, 1) 0%,
    rgba(58, 187, 205, 1) 80%,
    rgba(0, 255, 255, 1) 100%
  );
}

.bottomSection {
  height: 40%;
  display: flex;
  align-items: end;
  justify-content: space-between;
}

.bottomLeftSection {
  display: flex;
  align-items: end;
  gap: 30px;
  width: 70%;
  margin-left: 20px;
  margin-bottom: 10px;
}

.bottomLeftSection img {
  height: 100px;
  box-shadow: 0 0 0 5px #fff;
  border-radius: 5px;
}

.userName {
  font-size: 20px;
  font-weight: 900;
  margin: 0;
}

.buttonsContainer {
  display: flex;
}

.bottomRightSectionButton {
  margin-right: 20px;
  margin-bottom: 10px;
}

.buttons {
  display: flex;
  gap: 5px;
  align-items: center;
  height: 30px;
  background: none;
  border: none;
  border-radius: 5px;
  padding-left: 0px;
  padding-right: 10px;
  font-weight: 600;
}

.buttons img {
  height: 15px !important;
}
</style>
