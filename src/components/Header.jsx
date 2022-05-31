import React from 'react'
import {BiNotepad} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='w-full py-6 flex items-center bg-blue-400 space-x-2 justify-center'>
      <Link to="/">
        <h1 className='text-4xl font-bold tracking-wider text-white'>Todolist</h1>
      </Link>
        <BiNotepad className='text-yellow-400' size={30}/>
    </header>
  )
}

export default Header