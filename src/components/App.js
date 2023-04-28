import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const onTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const onDeleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(updatedTasks);
  };

  const onCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  let tasksToDisplay = tasks;
  if (selectedCategory !== "All") {
    tasksToDisplay = tasks.filter(
      (task) => task.category === selectedCategory
    );
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={onCategorySelect}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={tasksToDisplay} onDeleteTask={onDeleteTask} />
    </div>
  );
}

export default App;
