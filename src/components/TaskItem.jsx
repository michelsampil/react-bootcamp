import { useState } from "react";
import { useDeleteTasks, useEditTask } from "../services/taskService";
import { Modal } from "./Modal";
import { EditTaskForm } from "./EditTaskForm";

export const Task = ({ task }) => {
  const { id, description, isCompleted } = task;
  const [isModalOpen, setModalOpen] = useState(false);
  const deleteTask = useDeleteTasks();
  const editTask = useEditTask();

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const onEditHandler = (task) => {
    editTask(task);
    closeModal();
  };

  const onDeleteHandler = () => {
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
        <button onClick={openModal}>Edit</button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <EditTaskForm task={task} onEdit={onEditHandler} />
        </Modal>
        <button onClick={onDeleteHandler}>Delete</button>
      </div>
    </div>
  );
};
