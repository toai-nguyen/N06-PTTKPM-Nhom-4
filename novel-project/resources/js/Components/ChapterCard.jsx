export default function ChapterCard({chapter}) {
    return (
        <div className="flex bg-accent m-2 p-2 chapter-card" style={{justifyContent: "space-between"}}>
            <p className="font-montserrat" style={{fontWeight: "bold", marginLeft: "1rem"}}>
                Chapter {chapter.chapter_number}: {chapter.title}
            </p>
            <p className="font-montserrat" style={{marginRight: "1rem", color: "gray"}}>
                {chapter.updated_at}
            </p>
        </div>
    );
}