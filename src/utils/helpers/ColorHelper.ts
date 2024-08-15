export const getTechBGColor = (tech: string) => {
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

export const getTechTextColor = (tech: string) => {
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
