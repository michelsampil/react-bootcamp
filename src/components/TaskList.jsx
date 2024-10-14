import { Task } from "./TaskItem";
import { useTasks } from "../context/TaskContext";
import { useGetTasks } from "../services/taskService";

export const TaskList = () => {
  const taskCtx = useTasks();
  const { state } = taskCtx;
  const tasks = state.filteredTasks;
  useGetTasks();

  return (
    <div style={{ display: "flex", flexDirection: "column", maxWidth: "60vw" }}>
      <h2
        style={{
          textAlign: "left",
        }}
      >
        Task List
      </h2>
      <ul style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {tasks?.length > 0 &&
          tasks.map((e) => {
            return (
              <li
                key={e.id}
                style={{
                  borderRadius: "5px",
                  padding: "1rem",
                  listStyle: "none",
                  border: "2px solid white",
                }}
              >
                <Task task={e} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};
