import React from 'react'
import Header from '../others/Header.jsx'
import CreateTask from '../others/CreateTask.jsx'
import AllTask from '../others/AllTask.jsx'

export const AdminDashboard = () => {
  return (
    <div className='p-10 flex flex-col bg-[#1C1C1C] h-screen'>
      <Header/>
      <CreateTask/>
      <AllTask/>
    </div>
  )
}
