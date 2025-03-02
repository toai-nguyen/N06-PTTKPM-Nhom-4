import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import ApplicationLogo from "./ApplicationLogo";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CgDetailsMore } from "react-icons/cg";
import { useEffect } from "react";
import "../../css/components/Sidebar.css";

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
        <div className= " sidebar-container ">
            <div className="flex items-center justify-between w-full mb-4">
                <Link href={route("home")}>
                    <ApplicationLogo className="h-10" />
                </Link>
                <button
                    onClick={toggleSidebar}
                    className="text-gray-700 hover:text-gray-900"
                >
                    {isOpen ? (
                        <IoIosCloseCircleOutline size={20} />
                    ) : (
                        <CgDetailsMore size={20} />
                    )}
                </button>
            </div>
            <div>
                <div className="w-full">
                    <h2 className="text-lg font-semibold mb-2">
                        Categories
                    </h2>
                    <ul>
                        <li
                            className={`
                                ${getItemClass("home")} mb-2 `}
                        >
                            <Link href={route("home")}>
                                Home
                            </Link>
                        </li>
                        <li className={`${getItemClass("following")} mb-2`}>
                            <Link
                                href={route("following")}
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
                            >
                                Advanced Search
                            </Link>
                        </li>
                        <li className={`${getItemClass("create-project")} mb-2`}>
                            <Link
                                href={route("create-project")}
                            >
                                Create New Project
                            </Link>
                        </li>                   
                        <li className={`${getItemClass("list-project")} mb-2`}>
                            <Link
                                href={route("list-project")}
                            >
                                Your Project
                            </Link>
                        </li>
                        <li className={`${getItemClass("settings")} mb-2`}>
                            <Link
                                href={route("settings")}
                            >
                                Settings
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
