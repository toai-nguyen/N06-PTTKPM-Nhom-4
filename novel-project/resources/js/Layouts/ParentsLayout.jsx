import NavigatorBar from "@/Components/NavigatorBar";
import Sidebar from "@/Components/Sidebar";
import { Head, usePage } from "@inertiajs/react";
import { useState } from "react";
import "../../css/layouts/ParentsLayout.css";

export default function ParentsLayout({ header, children }) {
    const { auth } = usePage().props;
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="flex flex-row">
            <Head title="Monarch Project" />
            <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            <div className={`flex-col flex container ${sidebarOpen ? "" : "sidebar-closed"}`}>
                <NavigatorBar auth={auth} isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
                <main className={`main-content ${sidebarOpen ? "" : "sidebar-closed"}`}>
                    {children}
                </main>
            </div>
        </div>
    );
}
