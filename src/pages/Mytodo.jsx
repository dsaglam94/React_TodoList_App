import React, { useEffect, useState } from 'react'
import Form from '../components/Form';
import Todolist from '../components/Todolist';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';

const Mytodo = () => {

  const {user} = UserAuth();

  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setTodos(doc.data()?.savedTodos);
    });
  }, [user?.email]);

const todoRef = doc(db, 'users', `${user?.email}`)

async function handleMarkTodos(id) {
  
  try {
    const result = todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    await updateDoc(todoRef, {
        savedTodos: result
    })
  } catch (error) {
      console.log(error)
  }
}

async function handleDeleteTodos(id) {
  
  try {
        const result = todos.filter((todo) => todo.id !== id)
        await updateDoc(todoRef, {
            savedTodos: result
        })
      } catch (error) {
          console.log(error)
      }

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

useEffect(() => {
  filterTodos()
}, [todos, status])

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