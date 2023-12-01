import React from "react";
import Userlist from "../userList/userList";
import RootLayout from "../RootLayout/RootLayout";
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
        <div className="min-h-screen w-screen">
            <RootLayout />

            <h1 className="text-center p-3 font-bold text-2xl">User Count : {count}</h1>
            <Userlist usersList={userList} countUpdate={countUpdate}/>

        </div>
    )
}


export default Assignment3;