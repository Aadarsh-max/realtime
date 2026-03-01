import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const generateData = (type) => {
  const data = [];

  for (let n = 1; n <= 10; n++) {
    let value;

    switch (type) {
      case "O(1)":
        value = 1;
        break;
      case "O(log n)":
        value = Math.log2(n + 1);
        break;
      case "O(n)":
        value = n;
        break;
      case "O(n log n)":
        value = n * Math.log2(n + 1);
        break;
      case "O(n^2)":
        value = n * n;
        break;
      case "O(n) per cycle":
        value = n;
        break;
      default:
        value = n;
    }

    data.push({ n, value });
  }

  return data;
};

const ComplexityModal = ({ algorithm, complexityMap, onClose }) => {
  const data = complexityMap[algorithm];
  if (!data) return null;

  const timeData = generateData(data.time);
  const spaceData = generateData(data.space);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[800px] p-8 rounded-2xl shadow-xl relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-6">
          Complexity Analysis — {algorithm}
        </h2>

        {/* TIME GRAPH */}
        <div className="mb-10">
          <h3 className="font-medium mb-3">
            Time Complexity: {data.time}
          </h3>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={timeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="n" label={{ value: "Input Size (n)", position: "insideBottom", offset: -5 }} />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#16a34a"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* SPACE GRAPH */}
        <div>
          <h3 className="font-medium mb-3">
            Space Complexity: {data.space}
          </h3>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={spaceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="n" label={{ value: "Input Size (n)", position: "insideBottom", offset: -5 }} />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#15803d"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ComplexityModal;