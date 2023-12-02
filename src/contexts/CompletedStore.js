import { CompletedContext } from './CompletedContext';
import React from 'react'
import { useState } from "react";

const CompletedStore = ({children}) => {

    let [CompletedTasklist,completeTask] = useState([])

  return (
    <CompletedContext.Provider value={[CompletedTasklist,completeTask]}>
        {children}
    </CompletedContext.Provider>
  )
}

export default CompletedStore