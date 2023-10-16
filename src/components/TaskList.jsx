import { Task } from "./TaskItem";
import { useTasks } from "../context/TaskContext";
import { useGetTasks } from "../services/taskService";

export const TaskList = () => {
  const taskCtx = useTasks();
  const { state } = taskCtx;
  const tasks = state.filteredTasks;
  useGetTasks();

  console.log("taskLIst now has: ", tasks);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2 style={{ margin: "1rem 1rem 0 1rem", paddingLeft: "2rem" }}>
        Task List
      </h2>
      {/* <div > */}
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {tasks?.length > 0 &&
          tasks.map((e) => {
            return (
              <li
                key={e.id}
                style={{
                  borderRadius: "5px",
                  padding: "1rem",
                  listStyle: "none",
                  margin: "1rem",
                  border: "2px solid white",
                }}
              >
                <Task task={e} />
              </li>
            );
          })}
      </ul>
      {/* </div> */}
    </div>
  );
};
