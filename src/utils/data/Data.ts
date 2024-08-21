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

export const teams: Team[] = [
  {
    id: 1,
    name: "React Developers",
    description:
      "We don't make assumptions about the rest of your technology stack, so you can develop new features in React.",
    icon: "./src/assets/icons/React_icon.png",
    techLabels: ["React", "MUI"],
    leader: { name: "John Doe", icon: "./src/assets/icons/Profile_icon.jpg" },
    members: [
      { name: "John Doe", icon: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Jane Smith", icon: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Anna Taylor", icon: "./src/assets/icons/Profile_icon.jpg" },
    ],
  },
  {
    id: 2,
    name: "Vue.js Dev Team",
    description:
      "The development of Vue and its ecosystem is guided by an international team, some of whom have chosen to be featured below.",
    icon: "./src/assets/icons/Vuejs_icon.png",
    techLabels: ["Vuejs", "Developer"],
    leader: { name: "Jane Smith", icon: "./src/assets/icons/Profile_icon.jpg" },
    members: [
      { name: "John Doe", icon: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Jane Smith", icon: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Mike Ross", icon: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Anna Taylor", icon: "./src/assets/icons/Profile_icon.jpg" },
    ],
  },
  {
    id: 3,
    name: "Event",
    description:
      "Event is defined as a particular contest wich is a part of a program of contest. An example of an event is the long jump competition.",
    icon: "./src/assets/icons/GoogleCalendar_icon.png",
    techLabels: ["Hubilo"],
    leader: { name: "Mike Ross", icon: "./src/assets/icons/Profile_icon.jpg" },
    members: [
      { name: "John Doe", icon: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Jane Smith", icon: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Mike Ross", icon: "./src/assets/icons/Profile_icon.jpg" },
    ],
  },
  {
    id: 4,
    name: "Figma Resources",
    description:
      "Explore, install, use, and remix thousands of plugins and files published to the Figma Community by designers and developers.",
    icon: "./src/assets/icons/Figma_icon.png",
    techLabels: ["UI/UX", "Figma"],
    leader: {
      name: "Anna Taylor",
      icon: "./src/assets/icons/Profile_icon.jpg",
    },
    members: [
      { name: "John Doe", icon: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Jane Smith", icon: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Mike Ross", icon: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Anna Taylor", icon: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Daniel Taylor", icon: "./src/assets/icons/Profile_icon.jpg" },
    ],
  },
  {
    id: 5,
    name: "Native Mobile App",
    description:
      "React Native lets you create user friendly native apps ad doesn't compromse your users' experiences. With its robust framework.",
    icon: "./src/assets/icons/React_icon.png",
    techLabels: ["React"],
    leader: { name: "Mike Ross", icon: "./src/assets/icons/Profile_icon.jpg" },
    members: [
      { name: "John Doe", icon: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Jane Smith", icon: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Mike Ross", icon: "./src/assets/icons/Profile_icon.jpg" },
    ],
  },
  {
    id: 6,
    name: "Only Beginners",
    description:
      "Learn the basics of how websites work, front-end vs back-end, and using a code editor. Learn basic HTML, CSS, and...",
    icon: "./src/assets/icons/Html_icon.png",
    techLabels: ["HTML", "CSS"],
    leader: {
      name: "Sarah Adams",
      icon: "./src/assets/icons/Profile_icon.jpg",
    },
    members: [
      { name: "John Doe", icon: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Jane Smith", icon: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Mike Ross", icon: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Anna Taylor", icon: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Daniel Taylor", icon: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Mike Johnson", icon: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Sarah Adams", icon: "./src/assets/icons/Profile_icon.jpg" },
      { name: "David Brown", icon: "./src/assets/icons/Profile_icon.jpg" },
      { name: "Emily Davis", icon: "./src/assets/icons/Profile_icon.jpg" },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    name: "Project 1",
    icon: "./src/assets/icons/Vuejs_icon.png",
    type: "Type 1",
    tasksCompleted: 43,
    totalTasks: 124,
    client: "Client 1",
    budget: 5000,
    totalBudget: 10000,
    startDate: "2021-09-01",
    deadline: "2021-12-01",
    description: "Description 1",
    totalHours: 100,
    hours: 50,
    daysLeft: 30,
    chatMessages: 100,
    team: teams[0],
  },
  {
    id: 2,
    name: "Project 2",
    icon: "./src/assets/icons/React_icon.png",
    type: "Type 2",
    tasksCompleted: 68,
    totalTasks: 243,
    client: "Client 2",
    budget: 10000,
    totalBudget: 20000,
    startDate: "2021-09-01",
    deadline: "2021-12-01",
    description: "Description 2",
    totalHours: 200,
    hours: 100,
    daysLeft: 60,
    chatMessages: 200,
    team: teams[1],
  },
  {
    id: 3,
    name: "Project 3",
    icon: "./src/assets/icons/Figma_icon.png",
    type: "Type 3",
    tasksCompleted: 10,
    totalTasks: 34,
    client: "Client 3",
    budget: 15000,
    totalBudget: 30000,
    startDate: "2021-09-01",
    deadline: "2021-12-01",
    description: "Description 3",
    totalHours: 300,
    hours: 150,
    daysLeft: 90,
    chatMessages: 300,
    team: teams[2],
  },
  {
    id: 4,
    name: "Project 4",
    icon: "./src/assets/icons/Html_icon.png",
    type: "Type 4",
    tasksCompleted: 74,
    totalTasks: 112,
    client: "Client 4",
    budget: 20000,
    totalBudget: 40000,
    startDate: "2021-09-01",
    deadline: "2021-12-01",
    description: "Description 4",
    totalHours: 400,
    hours: 200,
    daysLeft: 120,
    chatMessages: 400,
    team: teams[3],
  },
  {
    id: 5,
    name: "Project 5",
    icon: "./src/assets/icons/GoogleCalendar_icon.png",
    type: "Type 5",
    tasksCompleted: 25,
    totalTasks: 42,
    client: "Client 5",
    budget: 25000,
    totalBudget: 50000,
    startDate: "2021-09-01",
    deadline: "2021-12-01",
    description: "Description 5",
    totalHours: 500,
    hours: 250,
    daysLeft: 150,
    chatMessages: 500,
    team: teams[4],
  },
];
