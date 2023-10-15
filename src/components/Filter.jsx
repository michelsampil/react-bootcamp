import { useTasks } from "../context/TaskContext";

export const Filter = () => {
  const taskCtx = useTasks();
  const handleDropdownChange = (e) => {
    const selectedValue = e.target.value;
    taskCtx.dispatch({ type: "FILTER_TASKS", payload: selectedValue });
  };

  return (
    <>
      <h2>Filter Tasks</h2>
      <label htmlFor="myDropdown">Select a fruit:</label>
      <select onChange={(e) => handleDropdownChange(e)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </>
  );
};
