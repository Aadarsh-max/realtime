import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Main Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Real-Time Operating System <br />
            <span className="text-blue-600">Task Scheduler Simulator</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            A capstone project demonstrating real-time task scheduling,
            algorithm analysis, deadline handling, priority inversion
            management, and CPU utilization visualization using interactive
            Gantt charts.
          </p>

          <button
            onClick={() => navigate("/simulator")}
            className="mt-10 px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold text-lg shadow-sm hover:bg-blue-700 transition duration-300 cursor-pointer"
          >
            Start Simulation
          </button>
        </div>
      </div>

      {/* Feature Section */}
      <div className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              Scheduling Algorithms
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              FCFS, SJF (Preemptive & Non-Preemptive), Priority Scheduling, and
              Round Robin with configurable time quantum.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              Real-Time Constraints
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Deadline detection, preemption handling, starvation analysis,
              overload management, and CPU utilization metrics.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              Interactive Visualization
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Animated Gantt charts, execution timelines, task state
              transitions, and structured performance comparison metrics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
