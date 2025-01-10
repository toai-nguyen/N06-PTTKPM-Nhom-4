import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import ApplicationLogo from "./ApplicationLogo";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CgDetailsMore } from "react-icons/cg";
import { useEffect } from "react";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const [selected, setSelected] = useState("");
    const { url } = usePage();

    useEffect(() => {
        const path = url.split("/").pop() || "home";
        setSelected(path);
    }, [url]);
    const getItemClass = (routeName) => {
        return `w-full p-2 rounded-md mb-2 ${
            selected === routeName ? "bg-genshin-green" : "text-gray-700"
        }`;
    };
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`fixed top-0 left-0 h-screen bg-gray-200 flex flex-col p-4 ${
                isOpen ? "width-1-6-vw" : "w-16"
            }`}
        >
            <div className="flex items-center justify-between w-full mb-4">
                <Link href={route("home")}>
                    <ApplicationLogo className="h-10" />
                </Link>
                <button
                    onClick={toggleSidebar}
                    className="text-gray-700 hover:text-gray-900"
                >
                    {isOpen ? (
                        <CgDetailsMore size={20} />
                    ) : (
                        <IoIosCloseCircleOutline size={20} />
                    )}
                </button>
            </div>
            {isOpen && (
                <div>
                    <button className="mb-4 bg-blue-500 text-white py-2 px-4 rounded">
                        Create
                    </button>
                    <div className="w-full">
                        <h2 className="text-lg genshin-font font-semibold mb-2">
                            Categories
                        </h2>
                        <ul>
                            <li
                                className={`
                                ${getItemClass("home")} mb-2 `}
                            >
                                <Link
                                    href={route("home")}
                                    className="genshin-font"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className={`${getItemClass("following")} mb-2`}>
                                <Link
                                    href={route("following")}
                                    className="genshin-font"
                                >
                                    Following
                                </Link>
                            </li>
                            <li
                                className={`${getItemClass(
                                    "advanced-search"
                                )} mb-2`}
                            >
                                <Link
                                    href={route("advanced-search")}
                                    className="genshin-font"
                                >
                                    Advanced Search
                                </Link>
                            </li>
                            <li
                                className={`${getItemClass(
                                    "create-project"
                                )} mb-2`}
                            >
                                <Link
                                    href={route("create-project")}
                                    className="genshin-font"
                                >
                                    Create Project
                                </Link>
                            </li>
                            <li className={`${getItemClass("settings")} mb-2`}>
                                <Link
                                    href={route("settings")}
                                    className="genshin-font"
                                >
                                    Settings
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}
