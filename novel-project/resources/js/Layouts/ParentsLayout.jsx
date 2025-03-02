import NavigatorBar from "@/Components/NavigatorBar";
import Sidebar from "@/Components/Sidebar";
import { Link, Head, usePage } from "@inertiajs/react";
import "../../css/layouts/ParentsLayout.css";

export default function ParentsLayout({ header,children }) {
    const { auth } = usePage().props;
    return (
        <div className="flex flex-row">
            <Head title="Monarch Project" />
            <Sidebar />
            <div className="flex-col flex container">
                <NavigatorBar auth={auth} />
                <main className="main-content">{children}</main>
            </div>
        </div>
    );
}
