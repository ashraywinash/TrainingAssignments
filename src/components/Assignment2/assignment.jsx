import React from "react";
import Parent from "../Parent/parent";
import RootLayout from "../RootLayout/RootLayout";


const Assignment2 = () => {
    return (
        <div className="h-screen w-screen items-center justify-between">
            <RootLayout />
            <div className="w-full h-full flex items-center justify-center">
                <Parent />
            </div>

        </div>
    )
}

export default Assignment2;