import { useState } from 'react';
import InputWithLabel from './InputWithLabel';
import style from './App.module.css';

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState('');

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (todoTitle === '')
      //console.log(todoTitle);
      return;
    onAddTodo(todoTitle);
    setTodoTitle('');
  };

  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel
        id="todoTitle"
        value={todoTitle}
        onInputChange={handleTitleChange}
      >
        <span className={style.addTodoTitle}>Title </span>
      </InputWithLabel>
      <button type="submit" className={style.addTodoButton}>Add</button>
    </form>
  );
};

export default AddTodoForm;
