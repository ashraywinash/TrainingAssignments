import React from "react";

import SmallUser from "../smallUser/smallUser";

const Userlist = (props) =>{
    return (

        <div className="container flex flex-row flex-wrap justify-center w-full content gap-8 p-3 m-auto ">
            {props.usersList.map((user,index) => <SmallUser key={index} user={user} countUpdate={props.countUpdate}/>)}
        </div>

        
    )
}

export default Userlist;