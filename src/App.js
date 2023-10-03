import React from 'react';

const todoList = [
  {
    id: '1',
    title: 'Complete lesson 1.1 React',
  },
  {
    id: '2',
    title: 'Complete lesson 1.1 Ruby',
  },
  {
    id: '3',
    title: 'Complete lesson 1.1 DSA',
  },
];

function App() {
  return (
    <div>
      <header style={{ textAlign: 'center' }}>
        <h1>Todo List</h1>
      </header>
      <ul style={{ textAlign: 'left' }}>
        {todoList.map(function (item) {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
