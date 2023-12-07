import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {

  const [todoList, setTodoList] = React.useState(
  //  JSON.parse(localStorage.getItem('savedTodoList')) 
  );

const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const savedTodoList = JSON.stringify(todoList);
    if (isLoading == false) {
      localStorage.setItem('savedTodoList', savedTodoList);
    }
  }, [todoList]);
  
  const fetchData = async () => {
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();
      //console.log(data);

      const todos = data.records.map((todo) => {
        const newTodo = {
          id: todo.id,
          title: todo.fields.Title,
        };

       return newTodo;
       
      });
      console.log(todos);
      setTodoList(todos);

      
    } catch (error) {
      console.log(error.message);
    }
  };

  React.useEffect(() => {
    fetchData().then((result) => {
      setTodoList(result);
      setIsLoading(false);
    });
  }, []);
  
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
