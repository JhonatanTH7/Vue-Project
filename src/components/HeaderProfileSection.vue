<template>
  <section class="container">
    <div class="topSection"></div>
    <div class="bottomSection">
      <div class="bottomLeftSection">
        <div class="profileAvatar">
          <img src="@/assets/icons/Profile_icon.jpg" alt="Profile Icon" />
        </div>
        <section>
          <p class="userName">John Doe</p>
          <div class="buttonsContainer">
            <button
              v-for="button in disabledButtonsInfo"
              :key="button.name"
              disabled
              class="buttons"
            >
              <i :class="button.classBoxIcon"></i>
              {{ button.name }}
            </button>
          </div>
        </section>
      </div>
      <button class="hoverablePurpleBGIconButton">
        <i class="bx bx-user-check"></i>
        Connected
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
const disabledButtonsInfo = [
  { name: "Coder", classBoxIcon: "bx bx-palette" },
  { name: "Medellin", classBoxIcon: "bx bx-map" },
  {
    name: "Joined April 2021",
    classBoxIcon: "bx bx-calendar",
  },
];
</script>

<style scoped>
.container {
  height: 100%;
  width: 80%;
  margin-top: 10px;
  border-radius: 5px;
  box-shadow: 1px 1px 10px var(--boxShadow);
  background-color: var(--primary);
}

.topSection {
  height: 60%;
  border-radius: 5px 5px 0 0;
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
  max-height: 40%;
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding: 0 25px 1% 25px;
}

.bottomLeftSection {
  height: 100%;
  width: 70%;
  display: flex;
  align-items: end;
  gap: 30px;
}

.profileAvatar {
  position: relative;
  height: 130%;
  aspect-ratio: 1.1 / 1;
}

.profileAvatar img {
  height: 100%;
  width: 100%;
  position: absolute;
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
