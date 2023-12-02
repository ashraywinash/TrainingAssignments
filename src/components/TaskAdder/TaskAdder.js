import {React,useContext,useState} from 'react'
import { TaskContext } from '../../contexts/TaskContext'
import { CompletedContext } from '../../contexts/CompletedContext'

import TaskComp from '../Task_c/TaskComp'


const TaskAdder = () => {

    let [taskList,addTask] = useContext(TaskContext)

    let [localTask,updateLocalTask] = useState("")

    let [completedTasks] = useContext(CompletedContext)

    function handleLocalTaskUpdate(e){

      updateLocalTask(e.target.value)

    }

    function handleTaskSubmission(){

      if(localTask.length === 0) return

      addTask([...taskList,localTask])
      
    }




  return (
    <div className='flex flex-col lg:w-[50%] lg:h-screen items-center justify-start mt-5 '>

        <h1 className='font-bold text-8xl mb-9 p-5'>tasky&trade;</h1>

        <input id='addtask' type='text' placeholder='Enter your task' className='p-5 outline-none rounded-full border-solid border-black border-2 shadow-cyan-950 shadow-lg text-3xl w-2/3' onChange={handleLocalTaskUpdate} ></input>

        <button type='submit' className='bg-yellow-400 mt-8 border-solid border-black border-2 font-bold text-4xl mb-9 rounded-full p-5 hover:bg-blue-500 hover:text-white shadow-lg shadow-black active:translate-y-2 active:shadow-none' onClick={handleTaskSubmission}>commit</button>

        
      

        <div className='bg-green-100 w-full h-fit'>
            {completedTasks && completedTasks.map((task,index) => <TaskComp key={index} task={task}/>)}
        </div>
        
    </div>
  )
}

export default TaskAdder