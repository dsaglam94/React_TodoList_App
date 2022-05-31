import React from 'react'
import {BiNotepad} from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import {MdPowerSettingsNew} from 'react-icons/md'
import { UserAuth } from '../context/AuthContext'

const Header = () => {

  const {user, logOut} = UserAuth();
  const navigate = useNavigate();

  const handleSingOut = async () => {
    try {
      await logOut();
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
 
  return (
    <header className='w-full py-6 px-10 flex items-center bg-blue-400 space-x-2 justify-center'>
      <div className='flex items-center w-full space-x-2'>
        
        {user ? <Link to="/mytodo">
          <h1 className='text-4xl font-bold tracking-wider text-white'>Todolist</h1>
        </Link> : <Link to="/">
          <h1 className='text-4xl font-bold tracking-wider text-white'>Todolist</h1>
        </Link>}
          <BiNotepad className='text-yellow-400' size={30}/>
      </div>
        <MdPowerSettingsNew onClick={handleSingOut} className={user?.email ? 'text-white hover:text-red-600 cursor-pointer' : 'hidden'} size={30}/>
    </header>
  )
}

export default Header