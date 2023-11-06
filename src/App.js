import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const todoList = [
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

function App(props) {
  const [newTodo, setNewTodo] = React.useState('');
  return (
    <div>
      <header style={{ textAlign: 'center' }}>
        <h1>Todo List</h1>
      </header>

      <hr />

      <AddTodoForm onAddTodo={setNewTodo} />
      <p>{newTodo}</p>

      <hr />

      <TodoList todo={todoList} />
    </div>
  );
}

export default App;
