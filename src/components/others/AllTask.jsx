import React from 'react'

const AllTask = () => {
  return (
    <div id='all-task' className='mt-8 flex-1 overflow-y-scroll'>
        <div className='flex items-center justify-between rounded bg-red-400 py-2 px-4 mb-2'>
            <h2>Reyan</h2>
            <h3>Task Title</h3>
            <h5>Status</h5>
        </div>
        <div className='flex items-center justify-between rounded bg-green-400 py-2 px-4 mb-2'>
            <h2>Reyan</h2>
            <h3>Task Title</h3>
            <h5>Status</h5>
        </div>
        <div className='flex items-center justify-between rounded bg-blue-400 py-2 px-4 mb-2'>
            <h2>Reyan</h2>
            <h3>Task Title</h3>
            <h5>Status</h5>
        </div>
        <div className='flex items-center justify-between rounded bg-yellow-400 py-2 px-4 mb-2'>
            <h2>Reyan</h2>
            <h3>Task Title</h3>
            <h5>Status</h5>
        </div>
        <div className='flex items-center justify-between rounded bg-orange-400 py-2 px-4'>
            <h2>Reyan</h2>
            <h3>Task Title</h3>
            <h5>Status</h5>
        </div>
    </div>
  )
}

export default AllTask