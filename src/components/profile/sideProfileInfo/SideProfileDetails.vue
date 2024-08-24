<template>
  <section class="sideProfileDetailsContainer">
    <h4>About</h4>
    <SideProfileItem
      v-for="item in sideAboutItems"
      :classBoxIcons="item.classBoxIcons"
      :title="item.title"
      :value="item.value"
    />
    <h4>Contacts</h4>
    <SideProfileItem
      v-for="item in sideContactsItems"
      :classBoxIcons="item.classBoxIcons"
      :title="item.title"
      :value="item.value"
    />

    <h4>Teams</h4>
    <div class="team" v-for="team in sideTeamsItems">
      <span>{{ team.title }}</span>
      <span>{{ team.value }}</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import SideProfileItem from "@/components/profile/sideProfileInfo/SideProfileItem.vue";

const sideAboutItems: {
  classBoxIcons: string;
  title: string;
  value: string;
}[] = [
  {
    classBoxIcons: "bx bx-user",
    title: "Full Name",
    value: "John Doe",
  },
  {
    classBoxIcons: "bx bx-check",
    title: "Status",
    value: "active",
  },
  {
    classBoxIcons: "bx bx-crown",
    title: "Role",
    value: "Developer",
  },
  {
    classBoxIcons: "bx bx-flag",
    title: "Country",
    value: "COL",
  },
  {
    classBoxIcons: "bx bx-globe",
    title: "Language",
    value: "English",
  },
];
const sideContactsItems: {
  classBoxIcons: string;
  title: string;
  value: string;
}[] = [
  {
    classBoxIcons: "bx bx-phone-call",
    title: "Contact",
    value: "(123) 456-7890",
  },
  {
    classBoxIcons: "bx bx-conversation",
    title: "Skype",
    value: "john.doe",
  },
  {
    classBoxIcons: "bx bx-envelope",
    title: "Email",
    value: "john.doe@example.com",
  },
];

const sideTeamsItems: {
  title: string;
  value: string;
}[] = [
  {
    title: "Backend Developer",
    value: "(126 Members)",
  },
  {
    title: "VueJS Developer",
    value: "(98 Members)",
  },
];
</script>

<style scoped>
.sideProfileDetailsContainer {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 5px;
  box-shadow: 1px 1px 10px var(--boxShadow);
  background-color: var(--primary);
  padding: 20px;
}

.team {
  display: flex;
  gap: 10px;
}
</style>
