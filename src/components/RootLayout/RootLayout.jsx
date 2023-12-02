import React from 'react'
import { NavLink } from 'react-router-dom'
import './RootLayout.css'

const RootLayout = () => {
  return (
    <div className='bg-gray-800'>
        <ul className="flex sticky flex-row justify-evenly bg-grey-800 w-full bg-inherit p-5 m-0 top-0">
            <NavLink to={'/TrainingAssignments/Assignment1'} className='bg-gray-700 rounded-lg'><li className='bg-inherit text-white rounded p-3'>Assignment-1</li></NavLink>
            <NavLink to={'/TrainingAssignments/Assignment2'} className='bg-gray-700 rounded-lg'><li className='bg-inherit text-white rounded p-3'>Assignment-2</li></NavLink>
            <NavLink to={'/TrainingAssignments/Assignment3'} className='bg-gray-700 rounded-lg'><li className='bg-inherit text-white rounded p-3'>Assignment-3</li></NavLink>
            <NavLink to={'/TrainingAssignments/Assignment4'} className='bg-gray-700 rounded-lg'><li className='bg-inherit text-white rounded p-3'>Assignment-4</li></NavLink>
            <NavLink to={'/TrainingAssignments/Assignment5'} className='bg-gray-700 rounded-lg'><li className='bg-inherit text-white rounded p-3'>Assignment-5</li></NavLink>
        </ul>

    </div>
  )
}

export default RootLayout