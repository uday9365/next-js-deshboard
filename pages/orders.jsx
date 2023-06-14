import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import {data} from "../data/Data";

const orders = () => {
    return(
        <div className="bg-gray-100 min-h-screen">
            <div className="flex justify-between px-4 pt-4">
                <h2>Orders</h2>
                <h2>Welcome Back, Clint</h2>
            </div>
            <div className="p-4">
                <div className="w-full m-auto p-4 border rounded-lg bg-white oerflow-y-auto">
                    <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                        <span>Order</span>
                        <span className="sm:text-left text-right">Status</span>
                        <span className="hidden md:grid">Last Order</span>
                        <span className="hidden sm:grid">Method</span>
                    </div>
                    <ul>
                        {data.map((order, id) => (
                            <li key={id} className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center cursor-pointer">
                                <div className="flex items-center">
                                    <div className="bg-purple-100 hover:bg-purple-200 p-4 rounded-lg">
                                        <FaShoppingBag className="text-purple-800"/>
                                    </div>
                                    <div className="pl-3">
                                        <p className="text-gray-800 font-bold">${order.total.toLocaleString()}</p>
                                        <p className="text-gray-800 text-sm">{order.name.first}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 sm:text-left text-right">
                                    <span className={
                                        order.status == "Completed" ? "bg-green-200 p-2 rounded-lg" 
                                        : order.status == "Processing" ? "bg-yellow-200 p-2 rounded-lg" 
                                        : "bg-pink-200 p-2 rounded-lg"
                                    }>{order.status}</span>
                                </p>
                                <p className="hidden md:flex">{order.date}</p>
                                <div className="hidden sm:flex justify-between items-center">
                                    <p>{order.method}</p>
                                    <BsThreeDotsVertical/>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default orders;