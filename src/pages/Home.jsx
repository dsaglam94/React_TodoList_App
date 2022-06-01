import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import {BiLogInCircle} from 'react-icons/bi'

const Home = () => {
    
    const {user} = UserAuth();

    return (
        <div className='w-full mt-[50%] md:mt-[25%] flex justify-center'>
            <div className='flex flex-col items-center space-y-6'>
                <h1 className='text-3xl'>Start Creating Your Notes!</h1>
                <div className='bg-green-600 p-4 inline-block rounded-full cursor-pointer hover:opacity-80'>
                {user ? <Link to="/mytodo"><BiLogInCircle 
                    className='text-white'
                    size={50}
                /></Link> : <Link to="/signin"><BiLogInCircle 
                className='text-white'
                size={50}
            /></Link> }        
                

                </div>
            </div>
        </div>
    )
}

export default Home