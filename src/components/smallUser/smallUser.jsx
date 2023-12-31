import React from "react";

const SmallUser = (props) =>{
    return (
        <div className="w-1/4 h-44 border-solid border-4 border-black p-3 hover:shadow-xl">
            <h2>{props.user.name}</h2>
            <h2>{props.user.username}</h2>
            <h2>{props.user.email}</h2>
            <div className="text-center m-2">
                <button className="bg-green-400 text-white rounded-md p-1 m-auto" onClick={props.countUpdate}>Add</button>
            </div>
            
        </div>
    )
}

export default SmallUser