import "../../css/components/NovelsCard.css";

export default function NovelsCard({ data }) {
    return (
        <div className="flex gap-2">
            <div style={{ height: "80px", minWidth: "56px", maxWidth: "56px" }}>
                <a href=""><img src={data.image_url} alt={data.title} /></a>
            </div>
            <div className="flex-grow flex flex-col justify-evenly">
                {/* Link to the novel */}
                <a href=""><p className="text-base line-clamp-1 break-all">{data.title}</p></a>
                {/* Link to the chapter */}
                <a href=""><p className="line-clamp-1 font-montserrat" >link to the chapter</p></a>
                {/* Link to the author */}
                <a href=""><p className="line-clamp-1 font-montserrat" style={{fontWeight: "500"}}>{data.author_name}</p></a>
            </div>
        </div>
    );
}

