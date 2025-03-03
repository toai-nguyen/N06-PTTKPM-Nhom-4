import { Link } from "@inertiajs/react";
import "../../css/components/NovelsCard.css";

export default function NovelsCard({ data }) {
    return (
        <div className="flex gap-2">
            <div style={{ height: "80px", minWidth: "56px", maxWidth: "56px" }}>
                <Link href=""><img src={data.image_url} alt={data.title} /></Link>
            </div>
            <div className="flex-grow flex flex-col justify-evenly">
                {/* Link to the novel */}
                <Link href=""><p className="text-base line-clamp-1 break-all">{data.title}</p></Link>
                {/* Link to the chapter */}
                <Link href=""><p className="line-clamp-1 font-montserrat" >link to the chapter</p></Link>
                {/* Link to the author */}
                <Link href=""><p className="line-clamp-1 font-montserrat" style={{fontWeight: "500"}}>{data.author_name}</p></Link>
            </div>
        </div>
    );
}

