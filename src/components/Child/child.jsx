import React from "react";

const Child = (props) => {
    return (

        <div className="m-4">

            <button className="bg-green-500 m-3 p-3 rounded-md " onClick={props.increaseValue}>Increment</button>
            <button className="bg-red-500 p-3 rounded-md" onClick={props.decreaseValue}>Decrement</button>

        </div>

    )

}

export default Child;