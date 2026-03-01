import React from "react";

const SimulationStatus = ({ isRunning, metrics }) => {
  if (isRunning) {
    return (
      <div className="p-4 rounded-lg border bg-blue-50 text-blue-700 text-sm">
        Simulation running...
      </div>
    );
  }

  if (!metrics) {
    return (
      <div className="p-4 rounded-lg border bg-gray-50 text-gray-500 text-sm">
        No simulation executed yet.
      </div>
    );
  }

  const hasDeadlineMiss = metrics.deadlineMissRatio > 0;
  const hasStarvation = metrics.starvationRatio > 0;

  return (
    <div className="space-y-2">

      <div className="p-4 rounded-lg border bg-green-50 text-green-700 text-sm">
        Simulation completed successfully.
      </div>

      {hasDeadlineMiss && (
        <div className="p-4 rounded-lg border bg-red-50 text-red-600 text-sm">
          Warning: {metrics.deadlineMissRatio}% tasks missed their deadlines.
        </div>
      )}

      {hasStarvation && (
        <div className="p-4 rounded-lg border bg-yellow-50 text-yellow-700 text-sm">
          Warning: {metrics.starvationRatio}% tasks experienced starvation.
        </div>
      )}

    </div>
  );
};

export default SimulationStatus;