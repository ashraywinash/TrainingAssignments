import React from 'react'
import {useContext} from 'react'
import { TaskContext } from '../../contexts/TaskContext'
import Task from '../Task/Task'

const TaskManager = () => {

    let [taskList] = useContext(TaskContext)
    


  return (
    <div className='flex items-start justify-center  w-1/2'>

        <ul className='w-full bg-red-200'>
            {taskList.map((task,index) => <Task key={index} id={index} task={task}/>)}
        </ul>

    </div>
  )
}

export default TaskManager