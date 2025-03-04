import { Link } from "@inertiajs/react";
export default function NovelsSecondary({ novel })
{
    return (
        <div style={{ marginLeft:"10px", marginBottom:"2rem" }}>
            <Link href="">
                <img src={novel.image_url} alt={novel.title} />
            </Link>
            <Link href="" className="mt-2 text-sm line-clamp-2">
                <p>{novel.title}</p>
            </Link>
        </div>
    );
}
// width:"128px",