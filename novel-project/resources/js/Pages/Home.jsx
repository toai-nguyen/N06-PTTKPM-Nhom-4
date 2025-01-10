import HomeLayout from '@/Layouts/HomeLayout';
import { usePage } from '@inertiajs/react';
import MainContent from '@/Components/Home/MainContent';
import LatestUpdates from '@/Components/Home/LastestUpdates';
import Popular from '@/Components/Home/Popular';
export default function Home() {
    return (
        <HomeLayout>
            <div className="p-6 text-gray-900 dark:text-gray-100">
                <MainContent />
                <LatestUpdates />
                <Popular />
            </div>
        </HomeLayout>
    );
}