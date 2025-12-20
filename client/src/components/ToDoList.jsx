import React, { useState} from 'react';
import './style.css';

export default function TodoList() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  const handleInput = () => {
    if (!input.trim()) return;
    let newObj = {
      id: Date.now(),
      name: input,
      isEditing: false,
      completed: false,
    };

    setList([...list, newObj]);
  };

  const handleDelete = (id) => {
    let updated = list.filter((item) => {
      return item.id != id;
    });
    setList([...updated]);
  };

  const handleEdit = (id) => {
    setList(
      list.map((item) => (item.id === id ? { ...item, isEditing: true } : item))
    );
  };

  const handleSave = (id, newName) => {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, name: newName, isEditing: false } : item
      )
    );
  };

  const handleChange = (id, value) => {
    setList(
      list.map((item) => (item.id === id ? { ...item, name: value } : item))
    );
  };
  return (
    <>
      <label> Add in list : </label>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleInput}> Add </button>

      <ul>
        {list.map((item) => (
          <li>
            {' '}
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() =>
                setList(
                  list.map((i) =>
                    i.id === item.id ? { ...i, completed: !i.completed } : i
                  )
                )
              }
            />{' '}
            {item.isEditing ? (
              <input
                type="text"
                value={item.name}
                onChange={(e) => handleChange(item.id, e.target.value)}
              />
            ) : (
              <span>{item.name}</span>
            )}
            {item.isEditing ? (
              <button onClick={() => handleSave(item.id, item.name)}>
                Save
              </button>
            ) : (
              <button onClick={() => handleEdit(item.id)}>Edit</button>
            )}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
