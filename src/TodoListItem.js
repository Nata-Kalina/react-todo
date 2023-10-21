import React from 'react';

const TodoListItem = (props) => {
  return (
    <li>
      <span>
        <a href={props.item.url} target="_blank">
          {props.item.title}
        </a>
      </span>
    </li>
  );
};

export default TodoListItem;
