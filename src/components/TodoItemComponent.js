import React from 'react';
import '../index.css';

function TodoItem() {
  return (
    <div className="todo-item">
      <input type="checkbox" />
      <p>Important stuff</p>
    </div>
  );
}

export default TodoItem;
