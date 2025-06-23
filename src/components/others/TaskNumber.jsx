import React from 'react'

const TaskNumber = () => {
  return (
    <div className='w-full mt-10 grid grid-cols-4 gap-5 bg-transparent'>
        <div className='rounded-md flex flex-col items-center justify-center bg-red-500 p-4'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-3xl font-semibold'>Task</h3>
        </div>
        <div className='rounded-md flex flex-col items-center justify-center bg-blue-500 p-4'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-3xl font-semibold'>Task</h3>
        </div>
        <div className='rounded-md flex flex-col items-center justify-center bg-green-500 p-4'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-3xl font-semibold'>Task</h3>
        </div>
        <div className='rounded-md flex flex-col items-center justify-center bg-red-500 p-4'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-3xl font-semibold'>Task</h3>
        </div>
    </div>
  )
}

export default TaskNumber