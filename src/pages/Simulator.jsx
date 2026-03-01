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

import { complexityMap } from "../utils/complexityMap";

const Simulator = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("FCFS");
  const [options, setOptions] = useState({
    timeQuantum: 2,
    starvationThreshold: 10,
  });

  const [timeline, setTimeline] = useState([]);
  const [metrics, setMetrics] = useState(null);
  const [comparisonData, setComparisonData] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [showComplexity, setShowComplexity] = useState(false);

  const handleRun = async () => {
    if (tasks.length === 0) {
      alert("Please add at least one task.");
      return;
    }

    try {
      setIsRunning(true);
      setComparisonData([]);
      setShowComplexity(false);

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

  const handleCompare = async () => {
    if (tasks.length === 0) {
      alert("Please add tasks first.");
      return;
    }

    try {
      setIsRunning(true);
      setTimeline([]);
      setMetrics(null);
      setShowComplexity(false);

      const response = await axios.post(
        "https://realtimeback-tau.vercel.app/api/scheduler/compare",
        { tasks, options },
      );

      setComparisonData(response.data.comparison);
    } catch (error) {
      console.error("Comparison Error:", error);
      alert("Error comparing algorithms.");
    } finally {
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setTimeline([]);
    setMetrics(null);
    setComparisonData([]);
    setShowComplexity(false);
    setIsRunning(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-10">
      <div className="max-w-6xl mx-auto space-y-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            RTOS Task Scheduler Simulator
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Simulate and analyze real-time scheduling algorithms
          </p>
        </div>

        <section className="bg-gray-50 p-6 rounded-2xl border shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Task Configuration</h2>
          <TaskInputForm tasks={tasks} setTasks={setTasks} />
          <TaskTable tasks={tasks} setTasks={setTasks} />
        </section>

        <section className="bg-gray-50 p-6 rounded-2xl border shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Scheduling Controls</h2>

          <AlgorithmSelector
            selectedAlgorithm={selectedAlgorithm}
            setSelectedAlgorithm={setSelectedAlgorithm}
            options={options}
            setOptions={setOptions}
          />

          <div className="flex flex-wrap gap-4 mt-6">
            <ControlPanel
              onRun={handleRun}
              onReset={handleReset}
              onCompare={handleCompare}
              isRunning={isRunning}
            />

            <button
              onClick={() => setShowComplexity(!showComplexity)}
              className="px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
            >
              Analyze Complexity
            </button>
          </div>
        </section>

        {showComplexity && (
          <section className="bg-gray-50 p-6 rounded-2xl border shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Complexity Analysis</h2>

            <p>
              <span className="font-medium">Time Complexity:</span>{" "}
              <span className="text-green-600 font-semibold">
                {complexityMap[selectedAlgorithm]?.time}
              </span>
            </p>

            <p className="mt-2">
              <span className="font-medium">Space Complexity:</span>{" "}
              <span className="text-green-600 font-semibold">
                {complexityMap[selectedAlgorithm]?.space}
              </span>
            </p>

            <p className="mt-3 text-gray-600 text-sm">
              {complexityMap[selectedAlgorithm]?.explanation}
            </p>
          </section>
        )}

        <SimulationStatus isRunning={isRunning} metrics={metrics} />
        <section className="bg-gray-50 p-6 rounded-2xl border shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Execution Timeline</h2>

          {isRunning ? (
            <Loader message="Running simulation..." />
          ) : (
            <GanttChart timeline={timeline} />
          )}
        </section>

        {metrics && (
          <section className="bg-gray-50 p-6 rounded-2xl border shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Performance Metrics</h2>
            <MetricsPanel metrics={metrics} />
          </section>
        )}

        {comparisonData.length > 0 && (
          <section className="bg-gray-50 p-6 rounded-2xl border shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Algorithm Comparison</h2>
            <ComparisonChart data={comparisonData} />
          </section>
        )}
      </div>
    </div>
  );
};

export default Simulator;
