export const getTechBGColor = (tech: string) => {
  switch (tech.toLowerCase()) {
    case "react":
      return "#eb94ff";
    case "mui":
      return "#c0e6ff";
    case "vuejs" || "vue":
      return "#a8f2d1";
    case "developer":
      return "#f4bbbb";
    case "hubilo":
      return "#a8f2d1";
    case "ui/ux" || "ux/ui":
      return "#a8f2d1";
    case "figma":
      return "#d0d0d0";
    case "html":
      return "#ffcebc";
    case "css":
      return "#b7f7f7";
    case "angular":
      return "#f4bbbb";
    case "photoshop":
      return "#eb94ff";
    case "sketch":
      return "#ffcebc";
    case "node.js" || "nodejs" || "node":
      return "#a8f2d1";
    case "analysis":
      return "#d0d0d0";
    case "writing":
      return "#b7f7f7";
    case "support":
      return "#eb94ff";
    case "marketing":
      return "#d0d0d0";
    case "designer":
      return "#b7f7f7";
    default:
      return "#000";
  }
};

export const getTechTextColor = (tech: string) => {
  switch (tech.toLowerCase()) {
    case "react":
      return "#80009d";
    case "mui":
      return "#40a9ee";
    case "vuejs" || "vue":
      return "#0b9154";
    case "developer":
      return "#ff0000";
    case "hubilo":
      return "#0b9154";
    case "ui/ux" || "ux/ui":
      return "#0b9154";
    case "figma":
      return "#6c6c6c";
    case "html":
      return "#e45d2b";
    case "css":
      return "#047575";
    case "angular":
      return "#ff0000";
    case "photoshop":
      return "#80009d";
    case "sketch":
      return "#e45d2b";
    case "node.js" || "nodejs" || "node":
      return "#0b9154";
    case "analysis":
      return "#6c6c6c";
    case "writing":
      return "#047575";
    case "support":
      return "#80009d";
    case "marketing":
      return "#6c6c6c";
    case "designer":
      return "#047575";
    default:
      return "#fff";
  }
};
