export default function NovelsSecondary({ novel })
{
    return (
        <div style={{ width:"128px", marginLeft:"10px"}}>
            <a href="">
                <img src={novel.image_url} alt={novel.title} />
            </a>
            <a href="" className="mt-2 text-sm line-clamp-2">
                <p>{novel.title}</p>
            </a>
        </div>
    );
}