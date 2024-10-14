import { useState } from "react";
import { useAddTask } from "../services/taskService";

export const AddTaskForm = () => {
  const [description, setDescription] = useState("");
  const addTask = useAddTask();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const task = { description: description };
    addTask(task);
    setDescription("");
  };

  return (
    <div
      style={{
        display: "flex",
        textAlign: "left",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          alignContent: "center",
        }}
      >
        <h2>Add Task</h2>
        <form
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          onSubmit={handleSubmit}
        >
          <div style={{ width: "250px" }}>
            <label htmlFor="description">Description (required):</label>
            <input
              style={{ width: "inherit" }}
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <button type="submit">Add Task</button>
        </form>
      </div>
    </div>
  );
};
