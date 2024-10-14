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
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <TaskList />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            flex: "1",
          }}
        >
          <div>
            <Filter />
            <AddTaskForm />
          </div>
        </div>
      </div>
    </TaskProvider>
  );
};

export default App;
