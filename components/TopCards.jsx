import React from "react";

const TopCard = () => {
    return(
        <div className="grid lg:grid-cols-5 gap-4 p-4">
            <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
                <div className="flex flex-col w-full pb-4">
                    <p className="text-2xl font-bold">$7486</p>
                    <p className="text-gray-800">Daily Revenue</p>
                </div>
                <p className="bg-green-300 flex justify-center items-center p-2 rounded-lg">
                    <span className="text-green-700">+18%</span>
                </p>
            </div>
            <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
                <div className="flex flex-col w-full pb-4">
                    <p className="text-2xl font-bold">$3,457,486</p>
                    <p className="text-gray-800">Annual Revenue</p>
                </div>
                <p className="bg-green-300 flex justify-center items-center p-2 rounded-lg">
                    <span className="text-green-700">+18%</span>
                </p>
            </div>
            <div className=" bg-white flex justify-between w-full border p-4 rounded-lg">
                <div className="flex flex-col w-full pb-4">
                    <p className="text-2xl font-bold">$60,486</p>
                    <p className="text-gray-800">Last Week Revenue</p>
                </div>
                <p className="bg-red-300 flex justify-center items-center p-4 rounded-lg">
                    <span className="text-green-700">-8%</span>
                </p>
            </div>
        </div>
    )
} 

export default TopCard;