import { Link } from "@inertiajs/react";
import NothingToShow from "../NothingToShow";
import ChapterCard from "../ChapterCard";
import Header from "../Header";

export default function ListChapter({chapters, isAuthor}) {
    const len = chapters.length;

    return (
        <div className="w-3/4 p-4">
            {len > 0 ? (
                <div>
                    <Header title="List of chapter"/>
                    {chapters.map((chapter) => (
                        <Link href="" key={chapter.id}>
                            <ChapterCard chapter={chapter} isAuthor={isAuthor} />
                        </Link>
                    ))}
                </div>
            ) : (
                <NothingToShow isAuthor = {isAuthor} />
            )}
        </div>
    );
}