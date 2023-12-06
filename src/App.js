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
  //const [todoList, setTodoList] = useSemiPersistentState();

  const [todoList, setTodoList] = React.useState(
    JSON.parse(localStorage.getItem('savedTodoList')) || initialTodos
  );

  const [isLoading, setIsLoading] = React.useState(true);

  const getTodoList = () =>
    new Promise((resolve, reject) =>
      setTimeout(
        () =>
          resolve({
            data: { todoList: initialTodos },
          }),
        2000
      )
    );

  React.useEffect(() => {
    getTodoList().then((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    });
  }, []);

  React.useEffect(() => {
    const savedTodoList = JSON.stringify(todoList);
    if (isLoading === false) {
      localStorage.setItem('savedTodoList', savedTodoList);
    }
  }, [todoList, isLoading]);

  // return [todoList, setTodoList];

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (item) => {
    const newTodo = todoList.filter((todo) => item.id !== todo.id);
    setTodoList(newTodo);
  };

  return (
    <>
      <header style={{ textAlign: 'center' }}>
        <h1>Todo List</h1>
      </header>

      <hr />
      <AddTodoForm onAddTodo={addTodo} />

      <hr />

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
    </>
  );
}

export default App;
