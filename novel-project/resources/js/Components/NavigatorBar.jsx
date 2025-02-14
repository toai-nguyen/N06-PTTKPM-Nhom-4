import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import ApplicationLogo from "./ApplicationLogo";
import TextInput from "./TextInput";
import UserAvatar from "./UserAvatar";
import { React, useState, useEffect } from "react";
import { Link, usePage } from "@inertiajs/react";
import Dropdown from "./Dropdown";
import image from "../../../public/image/default_avatar.jpg";
import "../../css/components/NavigatorBar.css";

export default function NavigatorBar({ auth, userName }) {
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
                ${isScrolled ? "bg-white" : "bg-transparent"}`}
        >
            <div
                className="
                flex
                items-center
                justify-end
                h-full
                px-4
                "
            >
                {/* <div>
                    <Link href="/">
                        <ApplicationLogo className="h-10 fill-current text-gray-800" />
                    </Link>
                </div> */}
                {auth.user ? (
                    <div className="flex items-center bg-white space-x-4">
                        <TextInput placeholder="Search" />
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
