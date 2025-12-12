import React, { useState } from "react";
import AddTask from "./AddTask.jsx";
import TaskList from "./TaskList.jsx";

export default function KanbanBoard({ taskList }) {
  // Ensure defaults so nothing becomes undefined
  const [tasks, setTasks] = useState(
  {
      todo: [],
      progress: [],
      done: [],
    }
  );

  const handleAddTask = (category, newTask) => {
    setTasks((prev) => ({
      ...prev,
      [category]: [...prev[category], newTask],
    }));
  };

  const handleEditTask = (category, taskId, newTitle) => {
    const updatedTitle = newTitle.trim();

    setTasks((prev) => ({
      ...prev,
      [category]: prev[category].map((task) =>
        task.id === taskId ? { ...task, title: updatedTitle } : task
      ),
    }));
  };

  return (
    <div>
      <h1>Kanban Board</h1>

      <AddTask onAddTask={handleAddTask} />

      <div className="board" style={{ display: "flex", gap: "20px" }}>
        <TaskList
          title="To Do"
          category="todo"
          tasks={tasks.todo}
          onEditTask={handleEditTask}
        />

        <TaskList
          title="In Progress"
          category="progress"
          tasks={tasks.progress}
          onEditTask={handleEditTask}
        />

        <TaskList
          title="Done"
          category="done"
          tasks={tasks.done}
          onEditTask={handleEditTask}
        />
      </div>
    </div>
  );
}
