import React from 'react';

// styles
import './App.css';

// import components
import TodoItem from './components/TodoItemComponent';

// json data
import todosData from "./shared/todosData";

function App() {

  const todos = todosData.map((todo) => {
    return (
      <TodoItem key={todo.id} todo={todo} />
    );
  })

  return (
    <div className="todo-list">
      {todos}
    </div>
  );
}

export default App;
