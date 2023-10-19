import { TaskProvider } from "./context/TaskContext.jsx";
import { TaskList } from "./components/TaskList.jsx";
import { AddTaskForm } from "./components/AddTaskForm.jsx";
import { Filter } from "./components/Filter.jsx";
import "./App.css";

const App = () => {
  return (
    <TaskProvider>
      <div
        style={{
          display: "flex",
          flexWrap: "no-wrap",
          justifyContent: "space-between",
          width: "100vw",
        }}
      >
        <TaskList />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "50vw",
          }}
        >
          <Filter />
          <AddTaskForm />
        </div>
      </div>
    </TaskProvider>
  );
};

export default App;
