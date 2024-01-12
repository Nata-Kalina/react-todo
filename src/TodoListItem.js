import React from 'react';

const TodoListItem = ({ todo, onRemoveTodo }) => {
  return (
    <li>
      <span>
        <a href={todo.url} target="_blank">
          {todo.title}
        </a>
      </span>
      <span>
        <button
          type="button"
          onClick={() => {
            return onRemoveTodo(todo.id);
          }}
        >
          Remove
        </button>
      </span>
    </li>
  );
};

export default TodoListItem;
