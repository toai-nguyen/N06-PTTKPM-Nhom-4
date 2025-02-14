import ParentsLayout from '@/Layouts/ParentsLayout';
import Random from '@/Components/Home/Random';
import LatestUpdate from '@/Components/Home/LastestUpdate';
import TopNovels from '@/Components/Home/TopNovels';
export default function Home({topNovels, lastestNovels, randomNovels}) {
    return (
        <ParentsLayout>
            {/* passing data to child components */}
                <TopNovels novels={topNovels} />
                <LatestUpdate lastest = {lastestNovels} />
                <Random random = {randomNovels} />
        </ParentsLayout>
    );
}