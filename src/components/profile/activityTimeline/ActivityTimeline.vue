<template>
  <div class="activityTimelineContainer">
    <div class="header">
      <i class="bx bx-bar-chart-alt-2"></i>
      <h2>Activity Timeline</h2>
    </div>
    <!-- desde aqui lo que pegue -->
    <ul>
      <TimeLineItem
        title="12 Invoices have been paid"
        description="Invoices have been paid to the company"
        timePassed="12 min"
        background="var(--purple)"
      >
        <template #footer>
          <a
            href="./src/assets/docs/invoice_example.pdf"
            download="invoice.pdf"
            class="pdfLink"
          >
            <img src="@/assets/icons/PDF_icon.png" alt="PDF" />
            invoice.pdf
          </a>
        </template>
      </TimeLineItem>

      <TimeLineItem
        title="Client Meeting"
        description="Project meeting with John at 10:15am"
        timePassed="45 min"
        background="#00c851"
      >
        <template #footer>
          <div class="clientInfo">
            <img
              src="@/assets/icons/Profile_icon.jpg"
              alt="User Avatar"
              class="clientAvatar"
            />
            <p>
              <strong>Lester McCarthy (Client)</strong><br />
              <span> CEO of Pixinvent </span>
            </p>
          </div>
        </template>
      </TimeLineItem>

      <TimeLineItem
        title="Create a new project for client"
        :description="`${teams[0].members.length} team members in a project`"
        timePassed="2 Day"
        background="#33b5e5"
      >
        <template #footer>
          <ProfileCarousel :profiles="teams[0].members" />
        </template>
      </TimeLineItem>
    </ul>
  </div>
</template>

<script setup lang="ts">
import ProfileCarousel from "@/components/ProfileCarousel.vue";
import TimeLineItem from "@/components/profile/activityTimeline/TimeLineItem.vue";
import { teams } from "@/utils/data/Data";
</script>

<style scoped>
.activityTimelineContainer {
  display: flex;
  flex-direction: column;
  height: 307px;
  width: 100%;
  border-radius: 5px;
  box-shadow: 1px 1px 10px var(--boxShadow);
  background-color: var(--primary);
  padding: 20px;
}

.header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.header i {
  font-size: 20px;
}

/* lo que pegue desde aqui */

.pdfLink {
  width: fit-content;
  display: flex;
  align-items: center;
  background-color: #ededed;
  border-radius: 5px;
  padding: 3px 7px;
  text-decoration: none;
  img {
    width: 16px;
    height: 16px;
    margin-right: 5px;
  }
}

.pdfLink:hover {
  background-color: #d0d0d7;
  box-shadow: 1px 1px 10px var(--boxShadow);
}

.clientInfo {
  display: flex;
  gap: 10px;
  align-items: center;
}

.clientAvatar {
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
</style>
