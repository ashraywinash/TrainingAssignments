import React from "react";
import User from "../User/user";

const UserList = (props) => {

    return (

        <div className="flex flex-row flex-wrap justify-evenly">
            {props.listOfUsers.map((value,index) => <User key={index} user={value}/>)}
        </div>

    )

}

export default UserList;