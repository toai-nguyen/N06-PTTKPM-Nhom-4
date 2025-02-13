import HomeLayout from '@/Layouts/ParentsLayout';
import { usePage } from '@inertiajs/react';
import MainContent from '@/Components/Home/MainContent';
import LatestUpdates from '@/Components/Home/LastestUpdates';
import Popular from '@/Components/Home/Popular';
import ParentsLayout from '@/Layouts/ParentsLayout';
export default function Home({novels}) {
    return (
        <ParentsLayout>
            <div className="p-6 text-gray-900 dark:text-gray-100">
                <h1>List of stories here</h1>
                <ul>
                    {novels.map((novel) => (
                        <li key={novel.id}>
                            <h2>{novel.title}</h2>
                            <img src={novel.image_url} alt="" />
                        </li>
                        
                    ))}
                </ul>
                {/* <MainContent />
                <LatestUpdates />
                <Popular /> */}
            </div>
        </ParentsLayout>
    );
}