import React from 'react';
import style from './TodoListItem.module.css';


const TodoListItem = ({ todo, onRemoveTodo }) => {
  return (
    <li className={style.ListItem}>
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
          className={style.removeButton}
        >
          Remove
        </button>
      </span>
    </li>
  );
};

export default TodoListItem;
