import React from "react";
import Parent from "../Parent/parent";


const Assignment2 = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-between">
            <h1 className="text-center bg-black text-white text-2xl min-w-full">Assignment 2</h1>
            <div className="w-screen h-full flex items-center justify-center">
                <Parent />
            </div>
            <h1 className="text-center bg-black text-white text-2xl min-w-full">End of assignment 2</h1>

        </div>
    )
}

export default Assignment2;