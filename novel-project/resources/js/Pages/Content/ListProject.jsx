import HomeLayout from '@/Layouts/ParentsLayout';
import NotAuth from '@/Components/Home/NotAuth';
export default function ListProject({ auth}) {
    return (
        <HomeLayout>
            {!auth.user ? (
                <NotAuth />
            ) : (
                <div>
                    <h1>Your project show here</h1>
                </div>
            )}
        </HomeLayout>
    );
}