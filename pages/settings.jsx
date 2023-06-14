import React from "react";
import { BsSearch } from "react-icons/bs";

const settings = () => {
    return(
        <div className="bg-gray-100 min-h-screen">
            <div className="flex justify-between px-4 pt-4">
                <h1 className="text-[25px] font-bold">Settings</h1>

                <input type="text" placeholder= "🔍 Search" className="border p-2 rounded-lg" />
            </div>
        </div>
    )
}

export default settings;