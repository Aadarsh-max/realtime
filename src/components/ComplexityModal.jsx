import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const complexityScoreMap = {
  "O(1)": 1,
  "O(log n)": 2,
  "O(n)": 3,
  "O(n log n)": 4,
  "O(n^2)": 5,
  "O(n) per cycle": 3,
};

const ComplexityModal = ({ algorithm, complexityMap, onClose }) => {
  const data = complexityMap[algorithm];

  if (!data) return null;

  const timeData = [
    {
      name: algorithm,
      value: complexityScoreMap[data.time] || 3,
    },
  ];

  const spaceData = [
    {
      name: algorithm,
      value: complexityScoreMap[data.space] || 3,
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-175 p-8 rounded-2xl shadow-xl relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-6">
          Complexity Analysis — {algorithm}
        </h2>

        {/* Time Graph */}
        <div className="mb-8">
          <h3 className="font-medium mb-3">Time Complexity</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={timeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis hide />
              <Tooltip />
              <Bar dataKey="value" fill="#16a34a" />
            </BarChart>
          </ResponsiveContainer>
          <p className="mt-2 text-sm text-gray-600">
            {data.time}
          </p>
        </div>

        {/* Space Graph */}
        <div>
          <h3 className="font-medium mb-3">Space Complexity</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={spaceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis hide />
              <Tooltip />
              <Bar dataKey="value" fill="#15803d" />
            </BarChart>
          </ResponsiveContainer>
          <p className="mt-2 text-sm text-gray-600">
            {data.space}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComplexityModal;