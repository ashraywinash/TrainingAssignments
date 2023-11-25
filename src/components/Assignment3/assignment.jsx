import React from "react";
import Userlist from "../userList/userList";

import {useEffect,useState} from 'react'

const Assignment3 = () => {

    const [userList,UpdateUserList] = useState([])
    const [count,updateCount] = useState(0)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((data)=>data.json())
        .then((res)=>UpdateUserList(res))
    },[])


    function countUpdate() {
        updateCount(count+1)
    }
    

    return (
        <div className="h-screen w-screen">
            <h1 className="text-center bg-black text-white text-2xl">End of assignment 2</h1>
            <hr></hr>
            <h1 className="text-center bg-black text-white text-2xl">Assignment 3</h1>
            <h1 className="text-center p-3 font-bold">User Count : {count}</h1>
            <Userlist usersList={userList} countUpdate={countUpdate}/>
            <h1 className="text-center bg-black text-white m-1 text-2xl">End of Assignment 3</h1>
        </div>
    )
}


export default Assignment3;