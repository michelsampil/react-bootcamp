import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";
const url = "http://localhost:3000/tasks";

export const useGetTasks = () => {
  const taskCtx = useTasks();
  const { dispatch } = taskCtx;

  useEffect(() => {
    const getAllTasks = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data) {
          if (data) {
            dispatch({ type: "SET_TASKS", payload: data });
          }
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    getAllTasks();
  }, [dispatch]);

  return;
};

const headers = new Headers({
  "Content-Type": "application/json",
});

export const useAddTask = () => {
  const taskCtx = useTasks();
  const { dispatch } = taskCtx;

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
      if (response.ok && data) {
        dispatch({ type: "ADD_TASK", payload: data });
      }
    } catch (error) {
      console.error("Error adding data: ", error);
    }
  };

  return addTask;
};

const editTask = async (task) => {
  // 👇 ToDo Implement editTask Hook to update the task
};

export const useDeleteTasks = () => {
  const taskCtx = useTasks();
  const { dispatch } = taskCtx;

  const deleteTask = async (task) => {
    const { id: taskId } = task;
    try {
      const requestOptions = {
        method: "DELETE",
        headers,
      };
      const response = await fetch(`${url}/${taskId}`, requestOptions);

      if (response.ok) {
        dispatch({ type: "DELETE_TASK", payload: task });
      }
    } catch (error) {
      console.error("Error deleting data: ", error);
    }
  };

  return deleteTask;
};
