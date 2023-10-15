import { useDeleteTasks } from "../services/taskService";

export const Task = ({ task }) => {
  const { id, description, isCompleted } = task;
  const deleteTask = useDeleteTasks();

  const onEditHandler = () => {
    console.log("onEditHandler");
  };

  const onDeleteHandler = () => {
    console.log("onDeleteHandler");
    deleteTask(task);
  };

  return (
    <div>
      <h4>
        {id} - {description}
      </h4>
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <label>Completed: </label>
        <input type="checkbox" disabled checked={isCompleted} />
        <button onClick={onEditHandler}>Edit</button>
        <button onClick={onDeleteHandler}>Delete</button>
      </div>
    </div>
  );
};
