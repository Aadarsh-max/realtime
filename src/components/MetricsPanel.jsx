import React from "react";

const MetricCard = ({ label, value, unit = "" }) => {
  return (
    <div className="bg-white border rounded-xl p-5 shadow-sm text-center">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-2xl font-semibold mt-2 text-gray-800">
        {value !== undefined ? `${value}${unit}` : "--"}
      </p>
    </div>
  );
};

const MetricsPanel = ({ metrics }) => {
  if (!metrics) {
    return (
      <div className="text-gray-400 text-sm">
        No metrics available.
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-5 gap-6">

      <MetricCard
        label="CPU Utilization"
        value={metrics.cpuUtilization}
        unit="%"
      />

      <MetricCard
        label="Avg Turnaround Time"
        value={metrics.averageTurnaroundTime}
      />

      <MetricCard
        label="Avg Waiting Time"
        value={metrics.averageWaitingTime}
      />

      <MetricCard
        label="Deadline Miss Ratio"
        value={metrics.deadlineMissRatio}
        unit="%"
      />

      <MetricCard
        label="Starvation Ratio"
        value={metrics.starvationRatio}
        unit="%"
      />

    </div>
  );
};

export default MetricsPanel;