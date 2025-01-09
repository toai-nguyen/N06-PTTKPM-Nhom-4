import React, { useState } from 'react';
import { Link } from "@inertiajs/react";
import ApplicationLogo from "./ApplicationLogo";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CgDetailsMore } from "react-icons/cg";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`
        h-screen 
        bg-gray-200 
        fixed top-0 left-0
        flex flex-col 
        p-4 
        ${isOpen ? 'width-1-6-vw' : 'w-16'}`}>
            <div className="flex items-center justify-between w-full mb-4">
                <Link href={route("home")}>
                    <ApplicationLogo className="h-10" />
                </Link>
                <button onClick={toggleSidebar} className="text-gray-700 hover:text-gray-900">
                    {isOpen ? <CgDetailsMore size={20} /> : <IoIosCloseCircleOutline size={20} />}
                </button>
            </div>
            {isOpen && (
                <div>
                    <button className="mb-4 bg-blue-500 text-white py-2 px-4 rounded">
                        Create
                    </button>
                    <div className="w-full">
                        <h2 className="text-lg genshin-font font-semibold mb-2">Categories</h2>
                        <ul>
                            <li className="mb-2">
                                <Link href= {route("home")} 
                                className='text-gray-700 hover:text-gray-900'>
                                    Home
                                </Link>
                            </li>
                            <li className="mb-2">
                            <Link href= {route("project")} 
                                className='text-gray-700 hover:text-gray-900'>
                                    Project
                                </Link>
                            </li>
                            <li className="mb-2">
                            <Link href= {route("following")} 
                                className='text-gray-700 hover:text-gray-900'>
                                    Following
                                </Link>
                            </li>
                            <li className="mb-2">
                            <Link href= {route("advanced-search")} 
                                className='text-gray-700 hover:text-gray-900'>
                                    Advanced Search
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}
