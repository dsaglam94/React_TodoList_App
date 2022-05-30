import React from 'react'
import {GrAdd} from 'react-icons/gr'
import {nanoid} from 'nanoid'

const Form = ({todos, setTodos, inputText, setInputText, inputDate, setInputDate, setStatus}) => {

    function handleInputText(e) {
        setInputText(e.target.value)
    }

    function handleInputDate(e){
        setInputDate(e.target.value)
    }

    function handleStatus(e){
        setStatus(e.target.value)
    }

    function handleCreateTodos(e) {
        e.preventDefault();
        if(!inputText || !inputDate) {
            return 
        }

        setTodos([
            ...todos,{
                text: inputText,
                date: inputDate,
                completed: false,
                id: nanoid()
            }
        ])
        setInputText('')
        setInputDate('')
    }


  return (
    <div className='w-full p-10'>
        <form className='w-full max-w-[1100px] flex flex-col items-center justify-between space-y-4 mx-auto md:flex-row md:space-y-0'>
            <select onChange={handleStatus} className='p-2 rounded-md bg-white border-2 border-yellow-400' name="todos">
                <option value="all">all</option>
                <option value="completed">completed</option>
                <option value="uncompleted">uncompleted</option>
            </select>
            <label className='text-lg font-bold' htmlFor="todo_input">What to do?</label>
            <input
                className='py-2 indent-4 border-2 border-gray-400 rounded-md' 
                id='todo_input'
                value={inputText}
                type="text" 
                placeholder='Todos'
                name='todo'
                onChange={handleInputText}
            />
            <label className='text-lg font-bold' htmlFor="date_input">When to do?</label>
            <input 
                className='py-2 indent-4 border-2 border-gray-400 rounded-md' 
                id='date_input'
                value={inputDate}
                type="date" 
                placeholder='Todos'
                name='todo'
                onChange={handleInputDate}
            />
            <button
            onClick={handleCreateTodos}
            type='submit'
            className='bg-yellow-400 p-4 rounded-full group hover:bg-yellow-500 border-none outline-none'
            >
                <GrAdd
                    size={25} 
                />
            </button>
        </form>
    </div>
  )
}

export default Form