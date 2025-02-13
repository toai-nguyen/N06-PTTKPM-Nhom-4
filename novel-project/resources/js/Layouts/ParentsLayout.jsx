import NavigatorBar from "@/Components/NavigatorBar";
import Sidebar from "@/Components/Sidebar";
import { Link, Head, usePage } from "@inertiajs/react";

export default function ParentsLayout({ header,children }) {
    const { auth } = usePage().props;
    return (
        <div className="flex flex-row">
            <Head title="Monarch Project" />
                <Sidebar />
            <div className="flex-col flex vw-85 margin-left-15">
                <NavigatorBar auth={auth} />
                <main>{children}</main>
            </div>
        </div>
    );
}
