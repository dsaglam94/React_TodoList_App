import React from 'react'
import {BiNotepad} from 'react-icons/bi'

const Header = () => {
  return (
    <header className='w-full p-10 flex items-center bg-blue-400 space-x-2 justify-center'>
        <h1 className='text-4xl font-bold tracking-wider text-white'>Todolist</h1>
        <BiNotepad className='text-yellow-400' size={30}/>
    </header>
  )
}

export default Header