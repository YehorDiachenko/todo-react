import React from "react"

function TodoItem(props) {
  const itemCompleted = {
    color: "#666666",
    textDecoration: "line-through",
    fontStyle: "italic"
  };

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style={props.item.completed ? itemCompleted : null}>{props.item.text}</p>
        </div>
    )
}

export default TodoItem
