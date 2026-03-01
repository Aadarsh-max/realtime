import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

const ComparisonChart = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="bg-white p-6 rounded-xl border mt-6">
      <h2 className="text-lg font-semibold mb-4">
        Algorithm Comparison (Avg Waiting Time)
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="algorithm" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="averageWaitingTime" fill="#2563eb" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComparisonChart;