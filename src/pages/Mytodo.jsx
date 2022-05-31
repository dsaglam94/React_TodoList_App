import React, { useEffect, useState } from 'react'
import Form from '../components/Form';
import Todolist from '../components/Todolist';

const Mytodo = () => {


  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  function handleMarkTodos(id) {
    setTodos(prevTodos => prevTodos.map(todo => {
        return id === todo.id ? {...todo, completed: !todo.completed} : todo
    }))
}

function handleDeleteTodos(id) {
  setTodos(prevTodos => prevTodos.filter(todo => {
      return id !== todo.id 
  }))
}

function filterTodos() {
  switch(status) {
    case 'completed':
      setFilteredTodos(todos.filter(todo => todo.completed === true));
      break;
    case 'uncompleted':
      setFilteredTodos(todos.filter(todo => todo.completed === false));
      break;
      default:
        setFilteredTodos(todos);
  }
}

useEffect( () => {
  getLocalTodos();
},[])

useEffect(() => {
  filterTodos()
  saveLocalTodos()
}, [todos, status])


const saveLocalTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

const getLocalTodos = () => {
  if (localStorage.getItem('todos') === null) {
    localStorage.setItem('todos', JSON.stringify([]))
  } else {
    let todoLocal = JSON.parse(localStorage.getItem('todos'));
    setTodos(todoLocal)
  }
}

  return (
    <div>
        <Form
        todos={todos} 
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText} 
        inputDate={inputDate}
        setInputDate={setInputDate} 
        setStatus={setStatus}
      />
      <Todolist 
        todos={todos}
        setTodos={setTodos} 
        handleMarkTodos={handleMarkTodos}
        handleDeleteTodos={handleDeleteTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  )
}

export default Mytodo