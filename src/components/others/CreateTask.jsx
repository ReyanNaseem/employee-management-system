import React from 'react'

const CreateTask = () => {
  return (
    <div className='flex items-center justify-between mt-8'>
        <div className='w-[50%]'>
          <form className='w-[80%] flex flex-col gap-2'>
            <div className='flex flex-col'>
              <p>Task Title</p>
              <input
                className='p-1 bg-transparent border outline-none border-gray-400 rounded placeholder:text-gray-400'
                type="text"
                placeholder='Add your title'
              />
            </div>
            <div className='flex flex-col'>
              <p>Task Title</p>
              <input
                className='p-1 bg-transparent border outline-none border-gray-400 rounded placeholder:text-gray-400'
                type="text"
                placeholder='Add your title'
              />
            </div>
            <div className='flex flex-col'>
              <p>Task Title</p>
              <input
                className='p-1 bg-transparent border outline-none border-gray-400 rounded placeholder:text-gray-400'
                type="text"
                placeholder='Add your title'
              />
            </div>
            <div className='flex flex-col'>
              <p>Task Title</p>
              <input
                className='p-1 bg-transparent border outline-none border-gray-400 rounded placeholder:text-gray-400'
                type="text"
                placeholder='Add your title'
              />
            </div>
          </form>
        </div>
        <div className='w-[50%]'>
          <div className='w-[80%] flex flex-col float-right gap-2'>
            <div className='flex flex-col'>
              <p>Description</p>
              <textarea className='bg-transparent border border-gray-400' name="" id="" rows={8}></textarea>
            </div>
            <button className='p-2 rounded bg-green-500'>Add</button>
          </div>
        </div>
      </div>
  )
}

export default CreateTask