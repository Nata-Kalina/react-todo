import React from 'react';

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

const TodoList = () => {
  return (
    <ul style={{ textAlign: 'left' }}>
      {todoList.map(function (item) {
        return (
          <li key={item.id}>
            <span>
              <a href={item.url} target="_blank">
                {item.title}
              </a>
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
