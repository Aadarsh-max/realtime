export const complexityMap = {
  FCFS: {
    time: "O(n)",
    space: "O(n)",
    explanation:
      "FCFS uses a simple queue structure. Each task is processed once in arrival order.",
  },
  SJF_NON_PREEMPTIVE: {
    time: "O(n log n)",
    space: "O(n)",
    explanation:
      "SJF uses a Min Heap to select the shortest job efficiently, reducing selection time to O(log n).",
  },
  SJF_PREEMPTIVE: {
    time: "O(n log n)",
    space: "O(n)",
    explanation:
      "SJF Preemptive (SRTF) uses a Min Heap and re-evaluates at every time unit for optimal selection.",
  },
  PRIORITY: {
    time: "O(n log n)",
    space: "O(n)",
    explanation:
      "Priority Scheduling uses a Min Heap based on priority values for efficient selection.",
  },
  ROUND_ROBIN: {
    time: "O(n) per cycle",
    space: "O(n)",
    explanation:
      "Round Robin uses a circular queue allowing O(1) enqueue and dequeue operations.",
  },
};