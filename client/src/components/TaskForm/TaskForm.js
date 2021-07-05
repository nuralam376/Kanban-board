import axios from "axios";
import React, { useState } from "react";
import "./TaskForm.css";

function TaskForm() {
  const [task, setTask] = useState("");

  const handleTaskName = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const task = {
          name : e.target.task.value
      };
      const response = await axios.post("/tasks", task);
      if(response.status === 200)
      {
          alert("Task created successfully");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="task-form">
      <form action="" method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write your task..."
          name="task"
          id="task-text"
          value={task}
          onChange={handleTaskName}
        />
        <button type="submit" className="form-button">
          Add
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
