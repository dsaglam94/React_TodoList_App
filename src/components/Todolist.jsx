import React from 'react'
import {BsTrash} from 'react-icons/bs'
import {MdOutlineDone} from 'react-icons/md'

const Todolist = ({todos, setTodos, handleMarkTodos, handleDeleteTodos,filteredTodos}) => {


    const todoList = filteredTodos.map(todo => {

        return (
            <div key={todo.id} className={todo.completed ? 'w-full flex items-center justify-between p-4 border-2 border-gray-400 rounded-md' : 'w-full flex items-center justify-between p-4 border-2 border-yellow-500 rounded-md '}>
                
                <div className='w-full flex items-center space-x-4 justify-between'>
                    <p className={todo.completed ? 'text-md font-bolb line-through tracking-wider w-[55%] break-words' : 'text-md font-bold tracking-wider w-[55%] break-words'}>{todo.text}</p>
                    <div className='flex items-center space-x-4'>
                        <p className='text-xs md:text-sm text-gray-500 '>
                                    {todo.date}
                                </p>
                            <div className='flex items-center space-x-2'>
                                <button onClick={() => handleMarkTodos(todo.id)} className='p-4 rounded-md bg-green-600 text-white hover:opacity-80'><MdOutlineDone /></button>
                                <button onClick={() => handleDeleteTodos(todo.id)} className='p-4 rounded-md bg-red-600 text-white hover:opacity-80'><BsTrash /></button>
                            </div>
                    </div>
                       
                </div>
            </div>
        )
    })

  return (
    <div className='w-full max-w-[700px] mx-auto space-y-2 px-6'>
        {todoList}
    </div>
  )
}

export default Todolist