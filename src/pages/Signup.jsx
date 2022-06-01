import React, { useState, useSyncExternalStore } from 'react'
import { Link, useNavigate, Navigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Signup = () => {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState('')
  const {user, signUp} = UserAuth()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if( password === confirmPassword ) {

      try {
        await signUp(email, password)
        navigate('/')
        // {<Navigate to='/' />}
      } catch (error) {
        console.log(error)
      }
    } else { 
      alert('Passwords must match')
    }
  }



  return (
    <div className='w-full max-w-[350px] border-4 border-yellow-400 mx-auto px-6 py-10 my-32 rounded-md shadow-2xl shadow-black'>
      <p className='text-xl font-bold mb-6 tracking-wider'>Sign Up</p>
          <form onSubmit={handleSubmit} className='w-full space-y-6 mb-6'>
            <fieldset className='w-full'>
                <input onChange={(e) => setEmail(e.target.value)} className='border-2 px-2 py-4 rounded-md w-full' type='email' placeholder='Enter your email' required autoComplete='email'/>
            </fieldset>
            <fieldset className='w-full'>
                <input onChange={(e) => setPassword(e.target.value)} className='w-full border-2 px-2 py-4 rounded-md' type='password' placeholder='Enter your password' required autoComplete='password'/>
            </fieldset>
            <fieldset className='w-full'>
                <input onChange={(e) => setConfirmPassword(e.target.value)} className='w-full border-2 px-2 py-4 rounded-md' type='password' placeholder='Confirm your password' required autoComplete='password'/>
            </fieldset>
            <button className='block w-full bg-blue-500 rounded-md py-3 text-xl font-bold uppercase text-gray-50 hover:opacity-90'>Sign Up</button>
          </form>
        <div>
        <p className='text-blue-500'>
                  <span className='text-gray-700'>
                    Already subscribed to Netflix?
                  </span>{' '}
                  <Link to='/signin'>Sign In</Link>
                </p>
          {/* <p className='text-gray-700 text-sm'>Already have an account?{' '}
          <Link to='/signin'>
            <span className='text-blue-500 font-bold hover:underline'>Sign in</span>
          </Link>
            </p> */}
        </div>
        </div>
  )
}

export default Signup