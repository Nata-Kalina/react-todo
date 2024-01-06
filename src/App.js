import React, { useState, useEffect, useCallback } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [todoList, setTodoList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;

  const fetchData = useCallback(async () => {
    try {
      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
        },
      };

      const response = await fetch(url, options);

      if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();
      console.log(data);

      const todos = data.records.map((todo) => ({
        id: todo.id,
        title: todo.fields.Title,
        createdTime: todo.createdTime,
      }));
       console.log(todos);
      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.error(error.message);
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [isLoading, todoList]);

  const addTodo = async (title) => {
    try {
      const airtableData = {
        fields: {
          Title: title,
        },
      };
      const options = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
        },
        body: JSON.stringify(airtableData),
      };

      const response = await fetch(url, options);

      if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
      }

      const responseData = await response.json();
      //console.log(data);

      const newTodo = {
        id: responseData.id,
        title: responseData.fields.Title,
        createdTime: responseData.createdTime,
      };

      setTodoList([newTodo, ...todoList]);
    } catch (error) {
      console.error(error.message);
    }
  };

  const removeTodo = async (id) => {
    try {
      const options = {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
        },
      };

      const response = await fetch(`${url}/${id}`, options);

      if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
      }

      const newTodoList = todoList.filter((todo) => id !== todo.id);
      setTodoList(newTodoList);
    } catch (error) {
      console.error(error.message);
    }
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
