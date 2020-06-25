import React, { Component } from 'react';

// styles
import './App.css';

// components
import TodoItem from './components/TodoItemComponent';

// json data
import todosData from "./shared/todosData";

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
  }

  render() {
     const todoItems = this.state.todos.map(todo => <TodoItem key={todo.id} todo={todo} />);

    return (
      <div className="todo-list">
        {todoItems}
      </div>
    );
  }
}

export default App;
