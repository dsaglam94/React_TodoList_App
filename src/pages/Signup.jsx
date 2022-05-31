import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='w-full max-w-[350px] border-4 border-yellow-400 mx-auto px-6 py-10 my-20 rounded-md shadow-2xl shadow-black'>
          <form className='w-full space-y-6 mb-6'>
            <fieldset className='w-full'>
                <input className='border-2 px-2 py-4 rounded-md w-full' type='email' placeholder='Enter your email' required autoComplete='email'/>
            </fieldset>
            <fieldset className='w-full'>
                <input className='w-full border-2 px-2 py-4 rounded-md' type='password' placeholder='Enter your password' required autoComplete='password'/>
            </fieldset>
            <fieldset className='w-full'>
                <input className='w-full border-2 px-2 py-4 rounded-md' type='password' placeholder='Confirm your password' required autoComplete='password'/>
            </fieldset>
            <button className='block w-full bg-blue-500 rounded-md py-3 text-xl font-bold uppercase text-gray-50 hover:opacity-90'>Sign Up</button>
          </form>
        <div>
          <p className='text-gray-700 text-sm'>Already have an account?{' '}
          <Link to='/'>
            <span className='text-blue-500 font-bold hover:underline'>Sign in</span>
          </Link>
            </p>
        </div>
        </div>
  )
}

export default Signup