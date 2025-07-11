import React from 'react'
import Header from '../others/Header'
import TaskNumber from '../others/TaskNumber'
import { TaskList } from '../TaskList/TaskList'

export const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header/>
        <TaskNumber/>
        <TaskList/>
    </div>
  )
}
