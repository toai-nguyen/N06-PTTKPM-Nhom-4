import NavigatorBar from "@/Components/NavigatorBar";
import { Link, Head, usePage } from "@inertiajs/react";

export default function Home() {
    const user = usePage().props.auth.user;

    return (
        <div>
            <NavigatorBar 
                isLoggedIn={!!user}
            />
            <Head title="Home" />
            <h1>Home</h1>
            <Link href={route("login")}>Login</Link>
        </div>
    );
}
