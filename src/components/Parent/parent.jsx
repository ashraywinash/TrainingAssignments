import React from "react";
import Child from "../Child/child";


import {useState} from "react"


const Parent = () => {

    const [counter,setCounter] = useState(0)

    function increaseValueOfCounter(){
        setCounter(counter+1)
        return
    }

    function decreaseValueOfCounter(){
        if(counter<=0) return;

        setCounter(counter-1)
    }


    return (
        <div className="bg-orange-200 min-w-max min-h-max p-14 rounded-md shadow-2xl text-3xl">

            <h1 className="h-5 text-center font-bold">Counter : {counter}</h1>
            <Child increaseValue={increaseValueOfCounter} decreaseValue={decreaseValueOfCounter}/>

        </div>
    )
}

export default Parent;