import React from 'react'
import RootLayout from '../RootLayout/RootLayout'
import TaskStore from '../../contexts/TaskStore'
import TaskAdder from '../TaskAdder/TaskAdder'
import TaskManager from '../TaskManager/TaskManager'
import CompletedStore from '../../contexts/CompletedStore'
import './assignment.css'




const Assignment5 = () => {
  return (
    <div className='assignment5'>
        <RootLayout />
        <TaskStore>
          <CompletedStore>
            <div className='w-full flex flex-row p-5'>
              <TaskAdder />
              <TaskManager />
            </div>
          </CompletedStore> 
        </TaskStore>
    </div>
  )
}

export default Assignment5