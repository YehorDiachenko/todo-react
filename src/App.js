import React from 'react';
import './App.css';

// import components
import TodoItem from './components/TodoItemComponent';

function App() {
  return (
    <div className="todo-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default App;
