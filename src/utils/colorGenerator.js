const colors = [
  "#2563eb", // blue
  "#16a34a", // green
  "#dc2626", // red
  "#7c3aed", // purple
  "#ea580c", // orange
  "#0891b2", // cyan
  "#be123c", // rose
  "#0f766e"  // teal
];

export const getTaskColor = (taskId) => {
  return colors[(taskId - 1) % colors.length];
};