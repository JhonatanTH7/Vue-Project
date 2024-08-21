<template>
  <table>
    <thead>
      <tr class="theadTr">
        <th colspan="6">
          <div class="tableHeader">
            <h2>Projects List</h2>
            <input type="text" placeholder="Search Project" />
          </div>
        </th>
      </tr>
      <tr>
        <th>
          <input type="checkbox" />
        </th>
        <th>PROJECT</th>
        <th>LEADER</th>
        <th>TEAM</th>
        <th>PROGRESS</th>
        <th>ACTION</th>
      </tr>
    </thead>
    <tbody>
      <ProjectTableItem
        v-for="project in projects"
        :key="project.id"
        :id="project.id"
        :name="project.name"
        :client="project.client"
        :budget="project.budget"
        :totalBudget="project.totalBudget"
        :startDate="project.startDate"
        :deadline="project.deadline"
        :description="project.description"
        :icon="project.icon"
        :type="project.type"
        :tasksCompleted="project.tasksCompleted"
        :totalTasks="project.totalTasks"
        :totalHours="project.totalHours"
        :hours="project.hours"
        :daysLeft="project.daysLeft"
        :chatMessages="project.chatMessages"
        :team="project.team"
      />
    </tbody>
    <tfoot>
      <tr>
        <td colspan="6">
          <div class="tableFooter">
            <div class="entriesInformation">
              <p>Showing 1 to 5 of {{ projects.length }} entries</p>
            </div>
            <div class="entriesPagination">
              <button><i class="bx bxs-chevrons-left"></i></button>
              <button><i class="bx bxs-chevron-left"></i></button>
              <button>1</button>
              <button>2</button>
              <button><i class="bx bxs-chevron-right"></i></button>
              <button><i class="bx bxs-chevrons-right"></i></button>
            </div>
          </div>
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script setup lang="ts">
import ProjectTableItem from "@/components/profile/projectTable/ProjecTableItem.vue";
import type { Project } from "@/utils/data/Data";
defineProps<{
  projects: Project[];
}>();
</script>

<style scoped>
table {
  width: 100%;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 10px var(--boxShadow);
  padding: 10px;
  font-size: 10px;
  background-color: var(--primary);
  border-collapse: collapse;
}

.tableHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 15px 20px 15px;
}

.tableHeader input {
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #eae8e8;
}

tr {
  height: 30px;
  border-bottom: 1px solid #eae8e8;
}

.tableFooter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 15px 8px 15px;
}

.entriesPagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.tableFooter button {
  border: none;
  border-radius: 5px;
  height: 20px;
  width: 20px;
  font-size: 10px;
  color: #808080;
}
</style>
