import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center bg-transparent justify-between'>
        <h1 className='bg-transparent text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold bg-transparent'>Reyan ✌</span></h1>
        <button className='bg-red-500 rounded px-5 py-2 font-semibold'>Logout</button>
    </div>
  )
}

export default Header