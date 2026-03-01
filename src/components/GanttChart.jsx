import React from "react";
import { getTaskColor } from "../utils/colorGenerator";

const GanttChart = ({ timeline }) => {
  if (!timeline || timeline.length === 0) {
    return (
      <div className="h-32 flex items-center justify-center text-gray-400">
        No simulation data yet.
      </div>
    );
  }

  const totalTime = timeline[timeline.length - 1].end;

  return (
    <div className="w-full">

      {/* Scroll wrapper */}
      <div className="overflow-x-auto">

        {/* Chart */}
        <div className="flex border rounded-xl overflow-hidden min-w-max">

          {timeline.map((block, index) => {
            const duration = block.end - block.start;
            const widthPercent = (duration / totalTime) * 100;

            return (
              <div
                key={index}
                className="flex items-center justify-center text-white text-sm font-medium border-r"
                style={{
                  width: `${widthPercent}%`,
                  backgroundColor: getTaskColor(block.taskId)
                }}
              >
                Task {block.taskId}
              </div>
            );
          })}
        </div>

        {/* Time markers */}
        <div className="flex text-xs text-gray-500 mt-2 relative">

          {timeline.map((block, index) => {
            const leftPercent = (block.start / totalTime) * 100;

            return (
              <span
                key={index}
                className="absolute"
                style={{ left: `${leftPercent}%` }}
              >
                {block.start}
              </span>
            );
          })}

          <span className="ml-auto">{totalTime}</span>
        </div>
      </div>
    </div>
  );
};

export default GanttChart;