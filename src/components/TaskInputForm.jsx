import React, { useState } from "react";

const TaskInputForm = ({ tasks, setTasks }) => {
  const [formData, setFormData] = useState({
    arrivalTime: "",
    burstTime: "",
    priority: "",
    deadline: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAddTask = () => {
    if (!formData.arrivalTime || !formData.burstTime) {
      alert("Arrival time and Burst time are required.");
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      arrivalTime: Number(formData.arrivalTime),
      burstTime: Number(formData.burstTime),
      ...(formData.priority !== "" && {
        priority: Number(formData.priority)
      }),
      ...(formData.deadline !== "" && {
        deadline: Number(formData.deadline)
      })
    };

    setTasks([...tasks, newTask]);

    setFormData({
      arrivalTime: "",
      burstTime: "",
      priority: "",
      deadline: ""
    });
  };

  return (
    <div className="space-y-4">

      <div className="grid md:grid-cols-4 gap-4">

        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">
            Arrival Time *
          </label>
          <input
            type="number"
            name="arrivalTime"
            value={formData.arrivalTime}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">
            Burst Time *
          </label>
          <input
            type="number"
            name="burstTime"
            value={formData.burstTime}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">
            Priority (Optional)
          </label>
          <input
            type="number"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">
            Deadline (Optional)
          </label>
          <input
            type="number"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

      </div>

      <button
        onClick={handleAddTask}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Add Task
      </button>

    </div>
  );
};

export default TaskInputForm;