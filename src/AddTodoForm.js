import React from 'react';

const AddTodoForm = (props) => {
  const handleAddTodo = (event) => {
    event.preventDafault();
    const todoTitle = event.target.title;
    console.log(todoTitle);
    props.onAddTodo(todoTitle);
    event.target.reset();
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title: </label>
      <input id="todoTitle" type="text" name="title" />
      <button>Add</button>
    </form>
  );
};

export default AddTodoForm;
