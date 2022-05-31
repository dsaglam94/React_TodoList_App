import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  return (
    <div className='w-full max-w-[350px] border-4 border-yellow-400 mx-auto px-6 py-10 my-20 rounded-md shadow-2xl shadow-black'>
      <form className='w-full space-y-6 mb-6'>
        <fieldset className='w-full'>
            <input className='border-2 px-2 py-4 rounded-md w-full' type='email' placeholder='Enter your email' required autoComplete='email'/>
        </fieldset>
        <fieldset className='w-full'>
            <input className='w-full border-2 px-2 py-4 rounded-md' type='password' placeholder='Enter your password' required autoComplete='password'/>
        </fieldset>
        <div className='w-full flex items-center justify-between'>
        <fieldset>
            <label className='text-sm font-bold text-gray-700'>Remember me? </label>
            <input className='cursor-pointer' type="checkbox"/>
        </fieldset>
        <a className='text-xs font-bold text-blue-500 hover:underline' href='/'>Forgot your password?</a>
        </div>
        <button className='block w-full bg-blue-500 rounded-md py-3 text-xl font-bold uppercase text-gray-50 hover:opacity-90'>Sign In</button>
      </form>
    <div>
      <p className='text-gray-700 text-sm'>Don't have an account?{' '}
      <Link to='/Signup'>
        <span className='text-blue-500 font-bold hover:underline'>Sign up</span>
      </Link>
        </p>
    </div>
    </div>
  )
}

export default Login