import React from "react";

const ComplexityPanel = ({ algorithm, complexityMap }) => {
  const data = complexityMap[algorithm];

  if (!data) return null;

  return (
    <div className="bg-gray-50 p-6 rounded-2xl border shadow-sm mt-6">
      <h2 className="text-xl font-semibold mb-4">
        Complexity Analysis
      </h2>

      <div className="space-y-3">
        <p>
          <span className="font-medium">Time Complexity:</span>{" "}
          <span className="text-green-600 font-semibold">
            {data.time}
          </span>
        </p>

        <p>
          <span className="font-medium">Space Complexity:</span>{" "}
          <span className="text-green-600 font-semibold">
            {data.space}
          </span>
        </p>

        <p className="text-gray-600 text-sm">
          {data.explanation}
        </p>
      </div>
    </div>
  );
};

export default ComplexityPanel;