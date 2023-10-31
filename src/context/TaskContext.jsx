import { createContext, useContext, useReducer } from "react";
const TaskContext = createContext();

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
  return filteredTasks;
};

const editTask = (state, editedTask) => {
  //TODO implement edit task...

  const findAndReplace = (item, collection) => {
    const index = collection.findIndex((e) => e.id === item.id);
    if (index !== -1) {
      collection[index] = item;
    }
    return collection;
  };

  const newState = {
    ...state,
    tasks: findAndReplace(editedTask, state.tasks),
    filteredTasks: findAndReplace(editedTask, state.filteredTasks),
  };
  return newState;
};

const deleteTask = (state, taskToDelete) => {
  const newState = {
    ...state,
    tasks: state.tasks.filter((todo) => todo.id !== taskToDelete.id),
    filteredTasks: state.filteredTasks.filter(
      (todo) => todo.id !== taskToDelete.id
    ),
  };
  return newState;
};

const taskReducer = (state, action) => {
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
      return editTask(state, action.payload);
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
