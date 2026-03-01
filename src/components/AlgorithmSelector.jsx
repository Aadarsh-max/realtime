import React from "react";

const AlgorithmSelector = ({
  selectedAlgorithm,
  setSelectedAlgorithm,
  options,
  setOptions,
}) => {
  const handleAlgorithmChange = (e) => {
    setSelectedAlgorithm(e.target.value);
  };

  const handleQuantumChange = (e) => {
    setOptions({
      ...options,
      timeQuantum: Number(e.target.value),
    });
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4">
      {/* Algorithm Dropdown */}
      <div className="flex flex-col w-full md:w-64">
        <label className="text-sm text-gray-600 mb-1">Select Algorithm</label>

        <select
          value={selectedAlgorithm}
          onChange={handleAlgorithmChange}
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="FCFS">FCFS</option>
          <option value="SJF_NON_PREEMPTIVE">SJF (Non-Preemptive)</option>
          <option value="SJF_PREEMPTIVE">SJF (Preemptive)</option>
          <option value="PRIORITY">Priority Scheduling</option>
          <option value="ROUND_ROBIN">Round Robin</option>
        </select>
      </div>

      {/* Time Quantum (only for RR) */}
      {selectedAlgorithm === "ROUND_ROBIN" && (
        <div className="flex flex-col w-full md:w-48">
          <label className="text-sm text-gray-600 mb-1">Time Quantum</label>

          <input
            type="number"
            min="1"
            value={options.timeQuantum || 2}
            onChange={handleQuantumChange}
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}
    </div>
  );
};

export default AlgorithmSelector;
