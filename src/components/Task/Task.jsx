import React from 'react'

import {useContext} from 'react'
import { TaskContext } from '../../contexts/TaskContext'
import { CompletedContext } from '../../contexts/CompletedContext'




const Task = ({id,task}) => {

    let [taskList,addtask] = useContext(TaskContext)
    let [completedtasks,completetask] = useContext(CompletedContext)

    function removeTask(){
        let taskCopy = [...taskList]

        taskCopy.splice(id,1)

        addtask(taskCopy)
    }

    function completeThetask(){
        completetask([...completedtasks,task])
        removeTask()
    }


  return (
    <div className='w-full flex flex-row items-center border-solid border-2 border-black gap-4 p-3 cursor-move' draggable={true}>
        <span>::</span>
        <span className='text-4xl'>{task}</span>
        <button className='bg-red-500 font-bold border-solid border-2 border-black p-3' onClick={removeTask}>Delete</button>
        <button className='bg-green-500 font-bold border-solid border-2 border-black p-3' onClick={completeThetask}>Done</button>
    </div>
  )
}

export default Task