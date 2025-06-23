import React, { useState } from 'react'

export const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(email, password);
        handleLogin(email,password)
        setEmail('');
        setPassword('');
    }

  return (
    <div className='w-full h-screen bg-black flex items-center justify-center'>
        <div className='w-[400px] h-[300px] flex items-center justify-center border-2 border-green-500 rounded-lg'>
            <form onSubmit={(e)=>{submitHandler(e)}} className='w-[70%] flex flex-col gap-4'>
                <input
                  onChange={(e)=> setEmail(e.target.value)}
                  value={email}
                  className='py-2 px-4 rounded-full outline-none bg-transparent text-white border-2 border-green-500'
                  type="email"
                  placeholder='Enter your Email'
                  required
                />
                <input
                  onChange={(e)=> setPassword(e.target.value)}
                  value={password}
                  className='py-2 px-4 rounded-full outline-none bg-transparent text-white border-2 border-green-500'
                  type="password"
                  placeholder='Enter your Password'
                  required
                />
                <button className='py-2 rounded-full outline-none text-white bg-green-500'>Login</button>
            </form>
        </div>
    </div>
  )
}
