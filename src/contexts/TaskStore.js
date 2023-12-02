import { TaskContext } from "./TaskContext";
import React from 'react'
import { useState } from "react";

const TaskStore = ({children}) => {

    let [taskList,addTask] = useState([])

  return (
    <TaskContext.Provider value={[taskList,addTask]}>
        {children}
    </TaskContext.Provider>
  )
}

export default TaskStore