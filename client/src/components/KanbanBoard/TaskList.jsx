import React, { useState } from "react";

export default function TaskList({ title, category, tasks, onEditTask }) {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const startEdit = (task) => {
    setEditingTaskId(task.id);
    setEditValue(task.title);
  };

  const submitEdit = () => {
    onEditTask(category, editingTaskId, editValue);
    setEditingTaskId(null);
  };

  return (
    <div>
      <h2>{title}</h2>

      {tasks.map((task) => (
        <div
          key={task.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "5px",
          }}
        >
          {editingTaskId === task.id ? (
            <>
              <input
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
              <button onClick={submitEdit}>Save</button>
            </>
          ) : (
            <>
              <span>{task.title}</span>
              <button onClick={() => startEdit(task)}>Edit</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
