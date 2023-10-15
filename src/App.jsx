import { TaskProvider } from "./context/TaskContext.jsx";
import { TaskList } from "./components/TaskList.jsx";
import { AddTaskForm } from "./components/AddTaskForm.jsx";
import { Filter } from "./components/Filter.jsx";

const App = () => {
  return (
    <TaskProvider>
      <div style={{ display: "flex", flexWrap: "no-wrap" }}>
        <TaskList />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "20rem",
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
