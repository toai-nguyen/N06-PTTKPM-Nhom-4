import HomeLayout from '@/Layouts/HomeLayout';
import { usePage } from '@inertiajs/react';
export default function Home() {
    return (
        <HomeLayout>
            <div className="p-6 text-gray-900 dark:text-gray-100">
                Welcome to Monarch Project! </div>
        </HomeLayout>
    );
}