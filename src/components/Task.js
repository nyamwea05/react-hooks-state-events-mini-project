import React from "react";

function Task({ task, onDeleteTask }) {
  const handleDelete = () => {
    onDeleteTask(task);
  };

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default Task;