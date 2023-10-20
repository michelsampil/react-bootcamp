import { useState } from "react";

export const EditTaskForm = ({ task, onEdit }) => {
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);

  const handleSaveClick = () => {
    onEdit({
      ...task,
      description: editedDescription,
      isCompleted: isCompleted,
    });
  };

  return (
    <div
      style={{
        width: "30vw",
        height: "32vh",
        backgroundColor: "#242424",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <h2>TASK EDITION</h2>
        <label style={{ display: "flex", justifyContent: "start" }}>
          Task Description
        </label>
        <input
          type="text"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
        />
        <div style={{ display: "flex", justifyContent: "start" }}>
          <label style={{ display: "flex", justifyContent: "start" }}>
            {" "}
            Completed:{" "}
          </label>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => setIsCompleted(!isCompleted)}
          />
        </div>

        <button onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  );
};
