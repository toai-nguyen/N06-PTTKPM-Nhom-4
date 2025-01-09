import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import ApplicationLogo from "./ApplicationLogo";
import TextInput from "./TextInput";
import UserAvatar from "./UserAvatar";
import { React, useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import DefaultAvartar from "../../../public/image/default_avatar.jpg";
import Dropdown from "./Dropdown";

export default function NavigatorBar({isLoggedIn, userAvatar, userName}) {
    return (
        <nav
            className="
        w-full 
        bg-white 
        shadow dark:bg-gray-800
        h-12"
        >
            <div
                className="
            flex
            items-center
            justify-between
            mt-4
            mx-auto
            max-w-7xl"
            >
                <div>
                    <Link href="/">
                        <ApplicationLogo className="h-10 fill-current text-gray-800" />
                    </Link>
                </div>
                {isLoggedIn ? (
                    <div className="flex items-center space-x-4">
                        <TextInput placeholder="Search" />
                        <Dropdown>
                            <Dropdown.Trigger>
                                <UserAvatar
                                    src={DefaultAvartar}
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
