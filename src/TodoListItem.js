import React from 'react';

const TodoListItem = ({ item, onRemoveTodo }) => {
  return (
    <li>
      <span>
        <a href={item.url} target="_blank">
          {item.title}
        </a>
      </span>
      <span>
      <button type="button" onClick={() => onRemoveTodo(item)}>
          Remove
        </button>
      </span>
    </li>
  );
};

export default TodoListItem;
