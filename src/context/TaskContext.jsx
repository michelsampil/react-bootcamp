import { createContext, useContext, useReducer, useEffect } from "react";
// import { useGetTasks } from "../services/taskService";
const TaskContext = createContext();
const url = "http://localhost:3000/tasks";

const filterTasks = (list, filterTerm) => {
  const taskStatusEvaluation = (element) => {
    switch (filterTerm) {
      case "all":
        return true;
      case "completed":
        return element.isCompleted === true;
      case "uncompleted":
        return element.isCompleted === false;
      default:
        break;
    }
  };

  const filteredTasks = list.filter((e) => taskStatusEvaluation(e));
  console.log("filteredTask have: ", filterTasks);
  return filteredTasks;
};

// const addTask = async (state, newTask) => {
//   console.log("RUNNING adding task", state.tasks, newTask);
//   try {
//     const headers = new Headers({
//       "Content-Type": "application/json",
//     });

//     const requestOptions = {
//       body: JSON.stringify(newTask),
//       method: "POST",
//       headers,
//     };
//     const response = await fetch(url, requestOptions);
//     const data = await response.json();
//     const updatedTaskList = [...state.tasks, data];
//     const newState = { tasks: updatedTaskList, filteredTasks: updatedTaskList };
//     return newState;
//   } catch (error) {
//     console.error("Error adding data: ", error);
//   }
// };

// const addTask = async () => {};

const editTask = (editedTask) => {};

const deleteTask = (state, taskToDelete) => {
  console.log("Reducer - task to delete:", taskToDelete);
  const newState = {
    ...state,
    tasks: state.tasks.filter((todo) => todo.id !== taskToDelete.id),
    filteredTasks: state.filteredTasks.filter(
      (todo) => todo.id !== taskToDelete.id
    ),
  };
  console.log("newState: ", newState);
  return newState;
};

const taskReducer = (state, action) => {
  console.log("action", action);
  switch (action.type) {
    case "SET_TASKS":
      return { tasks: action.payload, filteredTasks: action.payload };
    case "FILTER_TASKS":
      return {
        ...state,
        filteredTasks: filterTasks(state.tasks, action.payload),
      };
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        filteredTasks: [...state.filteredTasks, action.payload],
      };
    case "EDIT_TASK":
      return {
        ...state,
        tasks: action.payload.tasks,
        filteredTasks: action.payload.filteredTasks,
      };
    case "DELETE_TASK":
      return deleteTask(state, action.payload);
    default:
      break;
  }
};

export const TaskProvider = ({ children }) => {
  // const url = "http://localhost:3000/tasks";

  // const { tasks } = useGetTasks(url);
  const initialState = {
    tasks: [],
    filter: "all",
    filteredTasks: [],
  };
  const [state, dispatch] = useReducer(taskReducer, initialState);

  // if (tasks) {
  //   dispatch({ type: "SET_TASKS", payload: tasks });
  // }

  // useEffect(() => {
  //   const fetchTasks = () => {
  //     // const data = await getAllTasks();
  //     // const { tasks, isLoadingTasks, loadingTasksError } = useGetTasks();
  //     if (tasks) {
  //       dispatch({ type: "SET_TASKS", payload: tasks });
  //     }
  //   };
  //   fetchTasks();
  // }, [tasks]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  return useContext(TaskContext);
};
