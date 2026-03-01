import React from "react";

const ControlPanel = ({
  onRun,
  onReset,
  isRunning
}) => {
  return (
    <div className="flex flex-wrap gap-4 items-center">

      {/* Run Button */}
      <button
        onClick={onRun}
        disabled={isRunning}
        className={`px-6 py-2 rounded-lg text-white font-medium transition
          ${
            isRunning
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
      >
        {isRunning ? "Running..." : "Run Simulation"}
      </button>

      {/* Reset Button */}
      <button
        onClick={onReset}
        className="px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition font-medium"
      >
        Reset
      </button>

    </div>
  );
};

export default ControlPanel;