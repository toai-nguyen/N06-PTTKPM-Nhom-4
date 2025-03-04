import { Link } from "@inertiajs/react";
import "../../css/components/NovelsCardMD.css";

export default function NovelsCardMD({ novel }) {
    return (
        <div
            className="relative md-novel-card"
            style={{ marginLeft: "10px", marginBottom: "2rem" }}
        >
            <Link href="">
                <img className="md-image" src={novel.image_url} alt={novel.title} />
            </Link>
            <Link
                href=""
            >
                <p className="font-white md-title absolute bottom-2 mt-2 text-sm line-clamp-2">
                    {novel.title}
                </p>
            </Link>
        </div>
    );
}
