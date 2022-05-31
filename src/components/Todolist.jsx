import React from 'react'
import {BsTrash} from 'react-icons/bs'
import {MdOutlineDone} from 'react-icons/md'

const Todolist = ({todos, setTodos, handleMarkTodos, handleDeleteTodos,filteredTodos}) => {


    const todoList = filteredTodos.map(todo => {

        return (
            <div key={todo.id} className={todo.completed ? 'w-full flex items-center justify-between p-4 border-2 border-gray-400 rounded-md' : 'w-full flex items-center justify-between p-4 border-2 border-yellow-500 rounded-md '}>  

                    <div className='flex flex-col items-start md:items-center w-2/3 md:w-[85%] md:flex-row md:justify-between gap-1 md:gap-0'>

                        <p className={todo.completed ? 'text-md font-bolb line-through tracking-wider w-[75%] break-words' : 'text-md font-bold tracking-wider w-[75%] break-words'}>{todo.text}</p>
                        <p className='text-xs md:text-sm text-gray-500 -order-1 md:order-1'>{todo.date}</p>
                    </div>
                    
                    <div className='flex items-center space-x-2 w-3/3'>
                        <button onClick={() => handleMarkTodos(todo.id)} className='p-4 rounded-md bg-green-600 text-white hover:opacity-80'><MdOutlineDone /></button>
                        <button onClick={() => handleDeleteTodos(todo.id)} className='p-4 rounded-md bg-red-600 text-white hover:opacity-80'><BsTrash /></button>
                    </div>
            </div>
        )
    })     

  return (
    <div className='w-full max-w-[900px] mx-auto space-y-2 p-6'>
        {todoList}
    </div>
  )
}

export default Todolist