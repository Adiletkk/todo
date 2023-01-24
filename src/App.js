import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import { CreateTodo } from "./components/CreateTodo/CreateTodo"
import TodoItem from './components/todoItem/TodoItem';

function App() {
const todosLocal = JSON.parse(localStorage.getItem('todos')) || []
  const [todos, setTodos] = useState(todosLocal);
  useEffect(() => { 
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])

  const addTodo = (str => {
    setTodos([...todos, { text: str, status: false, id: Date.now() }])

  })

  const changeStatus = (id) => {
    const newArr = todos.map((item) => {
      console.log(item.id, id)
      if (item.id === id) {
        return { ...item, status: !item.status }
      }
      return item
    })
    setTodos(newArr)
  }

  const deleteStatus = (id) => {
    const newArray = todos.filter((elem) => elem.id !== id)
    setTodos(newArray)
  }
  const editTodo = (newText, id) => {
    const newArr = todos.map((item) => {
      console.log(item.id, id)
      if (item.id === id) {
        return { ...item, text: newText }
      }
      return item
    })
    console.log(newArr);
    setTodos(newArr)
  }
  const newTodos = todos.map((item) =>
    <TodoItem

      deleteStatus={deleteStatus}
      changeStatus={changeStatus}
      title={item.text}
      status={item.status}
      onEdit={editTodo}
      id={item.id}
      key={item.id} />)

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }, [])


  if (loading) {
    return <div>
      <h1>Wait</h1>
    </div>

  }
  const result = todos.reduce((akk,item) =>akk + item.status,0)
  return (
    <div className="App">
      <Header todosLen = {todos.length} complete = {result}/>
      <CreateTodo onAddTodo={addTodo} todosLen={todos.length} />
      <div className='todo_list'>
        {newTodos.length ? newTodos : <h1>what do you want? </h1>}
      </div>
    </div>
  );
}

export default App; 
