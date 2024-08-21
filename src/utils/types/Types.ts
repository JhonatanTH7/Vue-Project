export interface Project {
  id: number;
  name: string;
  client: string;
  budget: number;
  totalBudget: number;
  startDate: string;
  deadline: string;
  description: string;
  icon: string;
  type: string;
  tasksCompleted: number;
  totalTasks: number;
  totalHours: number;
  hours: number;
  daysLeft: number;
  chatMessages: number;
  team: Team;
}

export interface Team {
  id: number;
  name: string;
  description: string;
  icon: string;
  techLabels: string[];
  leader: { name: string; icon: string };
  members: { name: string; icon: string }[];
}
