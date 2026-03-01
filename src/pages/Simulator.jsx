import React, { useState } from "react";
import axios from "axios";

import TaskInputForm from "../components/TaskInputForm";
import TaskTable from "../components/TaskTable";
import AlgorithmSelector from "../components/AlgorithmSelector";
import ControlPanel from "../components/ControlPanel";
import GanttChart from "../components/GanttChart";
import MetricsPanel from "../components/MetricsPanel";
import SimulationStatus from "../components/SimulationStatus";
import ComparisonChart from "../components/ComparisonChart";
import Loader from "../components/Loader";

const Simulator = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("FCFS");
  const [options, setOptions] = useState({
    timeQuantum: 2,
    starvationThreshold: 10,
  });

  const [timeline, setTimeline] = useState([]);
  const [metrics, setMetrics] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [comparisonData, setComparisonData] = useState([]);

  // ================= Run Simulation =================
  const handleRun = async () => {
    if (tasks.length === 0) {
      alert("Please add at least one task.");
      return;
    }

    try {
      setIsRunning(true);

      const response = await axios.post(
        "https://realtimeback-tau.vercel.app/api/scheduler/run",
        {
          algorithm: selectedAlgorithm,
          tasks,
          options,
        },
      );

      setTimeline(response.data.timeline);
      setMetrics(response.data.metrics);
    } catch (error) {
      console.error("Simulation Error:", error);
      alert("Error running simulation.");
    } finally {
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setTimeline([]);
    setMetrics(null);
    setIsRunning(false);
  };

  const handleCompare = async () => {
    const response = await axios.post(
      "https://realtimeback-tau.vercel.app/api/scheduler/compare",
      { tasks, options },
    );

    setComparisonData(response.data.comparison);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-10">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            RTOS Task Scheduler Simulator
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Simulate and analyze real-time scheduling algorithms
          </p>
        </div>

        {/* Task Configuration */}
        <section className="bg-gray-50 p-6 rounded-2xl border shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Task Configuration</h2>

          <TaskInputForm tasks={tasks} setTasks={setTasks} />
          <TaskTable tasks={tasks} setTasks={setTasks} />
        </section>

        {/* Algorithm Selection & Controls */}
        <section className="bg-gray-50 p-6 rounded-2xl border shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Scheduling Controls</h2>

          <AlgorithmSelector
            selectedAlgorithm={selectedAlgorithm}
            setSelectedAlgorithm={setSelectedAlgorithm}
            options={options}
            setOptions={setOptions}
          />

          <div className="mt-6">
            <ControlPanel
              onRun={handleRun}
              onReset={handleReset}
              isRunning={isRunning}
              onCompare={handleCompare}
            />
          </div>
        </section>

        {/* Status */}
        <SimulationStatus isRunning={isRunning} metrics={metrics} />

        {/* Timeline */}
        <section className="bg-gray-50 p-6 rounded-2xl border shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Execution Timeline</h2>

          {isRunning ? (
            <Loader message="Running simulation..." />
          ) : (
            <GanttChart timeline={timeline} />
          )}
        </section>

        {/* Metrics */}
        <section className="bg-gray-50 p-6 rounded-2xl border shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Performance Metrics</h2>

          <MetricsPanel metrics={metrics} />
        </section>
        <ComparisonChart data={comparisonData} />
      </div>
    </div>
  );
};

export default Simulator;
