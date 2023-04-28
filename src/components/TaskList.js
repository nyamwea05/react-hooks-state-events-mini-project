import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [updatedTasks, setTasks] = useState(tasks);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleDeleteTask = (taskToDelete) => {
    const newTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(newTasks);
  };

  let displayedTasks = updatedTasks;

  if (selectedCategory !== "All") {
    displayedTasks = updatedTasks.filter((task) => task.category === selectedCategory);
  }

  return (
    <div className="tasks">
      {displayedTasks.map((task) => (
        <Task key={task.text} task={task} onDeleteTask={handleDeleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
