import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import TextInput from "./TextInput";
import UserAvatar from "./UserAvatar";
import { React, useState, useEffect } from "react";
import ApplicationLogo from "./ApplicationLogo";
import { Link } from "@inertiajs/react";
import Dropdown from "./Dropdown";
import { CgDetailsMore } from "react-icons/cg";
import image from "../../../public/image/default_avatar.jpg";
import "../../css/components/NavigatorBar.css";

export default function NavigatorBar({ auth, userName, isOpen, toggleSidebar }) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    
    return (
        <nav
            className={`
                navigator-bar
                fixed 
                top-0 
                transition-colors
                duration-300
                ${!isOpen ? "sidebar-closed" : ""}
                ${isScrolled ? "bg-white" : "bg-transparent"}`}
        >
            <div
                className="
                flex
                items-center
                h-full
                px-4
                lg:px-8
                "
            >
                {/* Hiển thị nút mở sidebar khi sidebar đang đóng */}
                {!isOpen && (
                    <div className="flex items-center">
                        <button
                            className="text-gray-700 hover:text-gray-900 mr-4"
                            onClick={toggleSidebar}
                            aria-label="Open sidebar"
                        >
                            <CgDetailsMore size={20} />
                        </button>
                        <Link href=""><ApplicationLogo className="h-10" /></Link>
                    </div>
                )}

                <div className="flex-grow"></div>

                <TextInput className="text-input" placeholder="Search" />

                {auth.user ? (
                    <div className="flex items-center bg-white space-x-4">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <UserAvatar
                                    src={image}
                                    alt={userName}
                                    className="h-10 w-10 cursor-pointer"
                                />
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                <Dropdown.Link href={route("profile.edit")}>
                                    Profile
                                </Dropdown.Link>
                                <Dropdown.Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                >
                                    Sign out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                ) : (
                    <div className="flex items-center space-x-4">
                        <Link href={route("login")}>
                            <SecondaryButton>Login</SecondaryButton>
                        </Link>
                        <Link href={route("register")}>
                            <PrimaryButton>Register</PrimaryButton>
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}