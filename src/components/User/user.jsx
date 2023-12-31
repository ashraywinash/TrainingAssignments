import React from "react";


function User({user}) {
    return (
        <div className="border-solid border-2 p-2 border-emerald-950 m-5 m-w-2xl h-auto">
            <div className="w-full h-60">
                <img src={user.avatar} alt="" className="w-full h-full object-cover"/>
            </div>
            
            <h3>{user.first_name + " " + user.last_name}</h3>
            <h3>{user.email}</h3>

        </div>

    )
}

export default User;