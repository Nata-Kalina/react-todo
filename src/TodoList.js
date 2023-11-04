import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = (props) => {
  return (
    <ul>
      {props.todoList.map((item) => (
        <TodoListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default TodoList;
