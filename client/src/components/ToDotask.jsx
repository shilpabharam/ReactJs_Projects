import React, { useState, useRef } from 'react';

export default function App() {
  const [task, setTask] = useState({
    todo: [
      { id: 1, name: 'shilpa' },
      { id: 2, name: 'shilpaB' },
    ],
    progress: [
      { id: 4, name: 'prof' },
      { id: 3, name: 'progreeB' },
    ],
    completed: [
      { id: 5, name: 'com' },
      { id: 6, name: 'compld' },
    ],
  });

  const [editingInfo, setEditingInfo] = useState(null);

  const inputRef = useRef(null);
  const categoryRef = useRef(null);

  const handleAddOrEdit = (e) => {
    e.preventDefault();

    const value = inputRef.current.value;
    const category = categoryRef.current.value;
    if (!value.trim()) return;

    if (editingInfo) {
      setTask((prev) => ({
        ...prev,
        [editingInfo.category]: prev[editingInfo.category].map((item) =>
          item.id === editingInfo.id ? { ...item, name: value } : item
        ),
      }));

      setEditingInfo(null);
      inputRef.current.value = '';
      return;
    }

    const newTask = {
      id: Date.now(),
      name: value,
    };

    setTask((prev) => ({
      ...prev,
      [category]: [...prev[category], newTask],
    }));

    inputRef.current.value = '';
  };

  const handleStartDelete = (category, childID) => {
    setTask((prev) => ({
      ...prev,
      [category]: prev[category].filter((item) => item.id != childID),
    }));
  };

  const handleStartEdit = (category, child) => {
    setEditingInfo({ category, id: child.id });
    inputRef.current.value = child.name;
    categoryRef.current.value = category;
  };

  return (
    <div>
      <form>
        <input ref={inputRef} placeholder="Description" type="text" />

        <select ref={categoryRef}>
          <option value="todo">todo</option>
          <option value="progress">progress</option>
          <option value="completed">completed</option>
        </select>

        <button onClick={handleAddOrEdit}>
          {editingInfo ? 'Save Task' : 'Add Task'}
        </button>
      </form>

      <TaskList
        title="To Do"
        category="todo"
        task={task.todo}
        onStartEdit={handleStartEdit}
        onDelete={handleStartDelete}
      />

      <TaskList
        title="In Progress"
        category="progress"
        task={task.progress}
        onStartEdit={handleStartEdit}
        onDelete={handleStartDelete}
      />

      <TaskList
        title="Done"
        category="completed"
        task={task.completed}
        onStartEdit={handleStartEdit}
        onDelete={handleStartDelete}
      />
    </div>
  );
}

export function TaskList({ category, title, task, onStartEdit, onDelete }) {
  return (
    <>
      <h2>{title}</h2>

      {task.map((child) => (
        <div key={child.id} style={{ display: 'flex', gap: '10px' }}>
          <span>{child.name}</span>

          <button onClick={() => onStartEdit(category, child)}>Edit</button>
          <button onClick={() => onDelete(category, child.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}
