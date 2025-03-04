import { Link } from "@inertiajs/react";
import NothingToShow from "../NothingToShow";
import ChapterCard from "../ChapterCard";
import Header from "../Header";

export default function ListChapter({chapters, isAuthor}) {
    const len = chapters.length;
    // formatDate = (date) => {
    //     return new Date(date).toLocaleDateString();
    // };
    return (
        <div className="w-3/4 p-4">
            {len > 0 ? (
                <div>
                    <Header title="List of chapter"/>
                    {chapters.map((chapter) => (
                        <Link href="">
                            <ChapterCard chapter={chapter} />
                        </Link>
                    ))}
                </div>
            ) : (
                <NothingToShow isAuthor = {isAuthor} />
            )}
        </div>
    );
}