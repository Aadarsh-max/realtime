import React from "react";

const TaskTable = ({ tasks, setTasks }) => {
  if (!tasks || tasks.length === 0) {
    return (
      <div className="text-gray-400 text-sm mt-4">
        No tasks added yet.
      </div>
    );
  }

  const handleDelete = (id) => {
    const filtered = tasks.filter((task) => task.id !== id);

    // Reassign IDs to keep order clean
    const updated = filtered.map((task, index) => ({
      ...task,
      id: index + 1
    }));

    setTasks(updated);
  };

  return (
    <div className="overflow-x-auto mt-6">
      <table className="w-full border rounded-xl overflow-hidden text-sm">
        <thead className="bg-gray-100 text-gray-600">
          <tr>
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Arrival</th>
            <th className="p-3 text-left">Burst</th>
            <th className="p-3 text-left">Priority</th>
            <th className="p-3 text-left">Deadline</th>
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-t">
              <td className="p-3">{task.id}</td>
              <td className="p-3">{task.arrivalTime}</td>
              <td className="p-3">{task.burstTime}</td>
              <td className="p-3">
                {task.priority !== undefined ? task.priority : "-"}
              </td>
              <td className="p-3">
                {task.deadline !== undefined ? task.deadline : "-"}
              </td>
              <td className="p-3">
                <button
                  onClick={() => handleDelete(task.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;