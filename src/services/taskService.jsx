import { useState, useEffect } from "react";
import { useTasks } from "../context/TaskContext";
const url = "http://localhost:3000/tasks";

export const useGetTasks = () => {
  const taskCtx = useTasks();
  const { dispatch } = taskCtx;

  console.log("running fetching hook");

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

// export const getAllTasks = async () => {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching data: ", error);
//   }
// };

const addTask = async (newTask) => {
  try {
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

const editTask = async (task) => {
  const { id: taskId } = task;

  try {
    const requestOptions = {
      body: JSON.stringify(task),
      method: "PATCH",
      headers,
    };
    const response = await fetch(`${url}/${taskId}`, requestOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error editing data: ", error);
  }
};

export const useDeleteTasks = (task) => {
  const taskCtx = useTasks();
  const { dispatch } = taskCtx;

  console.log("running deleting hook");

  // useEffect(() => {
  const deleteTask = async (task) => {
    const { id: taskId } = task;
    try {
      const requestOptions = {
        method: "DELETE",
        headers,
      };
      const response = await fetch(`${url}/${taskId}`, requestOptions);
      // const task = await response.json();
      // return data;
      if (response.ok) {
        console.log("ready to dispatch");
        dispatch({ type: "DELETE_TASK", payload: task });
      }
    } catch (error) {
      console.error("Error deleting data: ", error);
    }
  };

  // }, [dispatch]);
  return deleteTask;
};
