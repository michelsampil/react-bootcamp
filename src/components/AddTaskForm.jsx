import { useState } from "react";
import { useTasks } from "../context/TaskContext";

export const AddTaskForm = () => {
  const [description, setDescription] = useState("");
  const taskCtx = useTasks();
  const url = "http://localhost:3000/tasks";

  const addTask = async (newTask) => {
    try {
      const headers = new Headers({
        "Content-Type": "application/json",
      });

      const requestOptions = {
        body: JSON.stringify(newTask),
        method: "POST",
        headers,
      };
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error adding data: ", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (description.trim() === "") {
      // Description is required, so you can handle the error or display a message here.
      alert("Please enter a description.");
      return;
    }

    // If the description is valid, you can proceed with the task creation logic.
    // For this example, we'll just print the description to the console.
    try {
      const newAddedTask = await addTask({
        description: description,
        isCompleted: false,
      });
      console.log("newAddedTask: ", newAddedTask);
      taskCtx.dispatch({
        type: "ADD_TASK",
        payload: newAddedTask,
      });
    } catch (error) {
      console.log("error", error);
    }

    // Reset the form field after submission
    setDescription("");
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="description">Description (required):</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};
