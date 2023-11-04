import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const initialTodos = [
  {
    id: '1',
    title: 'Complete lesson 1.2 React',
    url: 'https://learn.codethedream.org/flamingo-react/',
  },
  {
    id: '2',
    title: 'Complete lesson 1.2 Ruby',
    url: 'https://learn.codethedream.org/firefish-ruby-rails/',
  },
  {
    id: '3',
    title: 'Complete lesson 1.1 DSA',
    url: 'https://github.com/a-nyx/dsa-maple-code',
  },
];

function App() {
  const [todoList, setTodoList] = React.useState(initialTodos);

  const addTodo = (newTodo) => {
    setTodoList([newTodo, ...todoList]);
  };

  return (
    <div>
      <header style={{ textAlign: 'center' }}>
        <h1>Todo List</h1>
      </header>

      <hr />
      <AddTodoForm onAddTodo={addTodo} />

      <hr />

      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
