import { createContext, useContext, useReducer, useEffect } from "react";
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
  const initialState = {
    tasks: [],
    filter: "all",
    filteredTasks: [],
  };
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  return useContext(TaskContext);
};
