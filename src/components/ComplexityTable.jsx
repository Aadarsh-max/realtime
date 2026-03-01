import React from "react";

const ComplexityTable = () => {
  const data = [
    {
      algorithm: "FCFS",
      time: "O(n)",
      space: "O(n)",
      ds: "Queue",
    },
    {
      algorithm: "SJF (Non-Preemptive)",
      time: "O(n log n)",
      space: "O(n)",
      ds: "Min Heap",
    },
    {
      algorithm: "SJF (Preemptive)",
      time: "O(n log n)",
      space: "O(n)",
      ds: "Min Heap",
    },
    {
      algorithm: "Priority Scheduling",
      time: "O(n log n)",
      space: "O(n)",
      ds: "Min Heap",
    },
    {
      algorithm: "Round Robin",
      time: "O(n) per cycle",
      space: "O(n)",
      ds: "Circular Queue",
    },
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-2xl border shadow-sm">
      <h2 className="text-xl font-semibold mb-4">
        Algorithm Complexity Analysis
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border">Algorithm</th>
              <th className="p-3 border">Time Complexity</th>
              <th className="p-3 border">Space Complexity</th>
              <th className="p-3 border">Data Structure Used</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="p-3 border">{row.algorithm}</td>
                <td className="p-3 border font-medium">{row.time}</td>
                <td className="p-3 border">{row.space}</td>
                <td className="p-3 border">{row.ds}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComplexityTable;