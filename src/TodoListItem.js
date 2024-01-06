import React from 'react';

const TodoListItem = ({ item }) => {
  return (
    <li>
      <span>
        <a href={item.url} target="_blank">
          {item.title}
        </a>
      </span>
    </li>
  );
};

export default TodoListItem;
