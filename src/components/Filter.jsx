import { useTasks } from "../context/TaskContext";

export const Filter = () => {
  const taskCtx = useTasks();
  const handleDropdownChange = (e) => {
    const selectedValue = e.target.value;
    taskCtx.dispatch({ type: "FILTER_TASKS", payload: selectedValue });
  };

  return (
    <div
      style={{
        width: "30vw",
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
      }}
    >
      <h2>Filter Tasks</h2>
      <label htmlFor="myDropdown">Filter Tasks by:</label>
      <select
        style={{ width: "250px" }}
        onChange={(e) => handleDropdownChange(e)}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};
