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
      <h2>Task List</h2>
      <div style={{ display: "flex", flexWrap: "no-wrap" }}>
        <ul>
          {tasks?.length > 0 &&
            tasks.map((e) => {
              return (
                <li key={e.id}>
                  <Task task={e} />
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
