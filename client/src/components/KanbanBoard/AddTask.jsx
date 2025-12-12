import React, { useRef } from "react";

export default function AddTask({ onAddTask }) {
  const inputRef = useRef(null);
  const categoryRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = inputRef.current.value.trim();
    const category = categoryRef.current.value;

    if (!title) return;

    onAddTask(category, { id: Date.now(), title });

    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input type="text" ref={inputRef} placeholder="Add new task..." />

      <select ref={categoryRef}>
        <option value="todo">To Do</option>
        <option value="progress">In Progress</option>
        <option value="done">Done</option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
}
