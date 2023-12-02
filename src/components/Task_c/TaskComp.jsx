import React from 'react'

const TaskComp = ({task}) => {
  return (
        <div>   
            <div className='flex flex-row items-center border-solid border-2 border-black gap-4 p-3 cursor-move text-lg' draggable={true}>
            <span>::</span>
            <span className='text-4xl'>{task}  <span className='text-green-600'>&#10003;</span></span>
        </div>
    </div>
  )
}

export default TaskComp