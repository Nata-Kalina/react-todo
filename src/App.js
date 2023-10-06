import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  return (
    <div>
      <header style={{ textAlign: 'center' }}>
        <h1>Todo List</h1>
      </header>

      <hr />

      <AddTodoForm />

      <hr />

      <TodoList />
    </div>
  );
}

export default App;
