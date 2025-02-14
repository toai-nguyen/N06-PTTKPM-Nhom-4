import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import "../../../css/components/home/TopNovels.css";

export default function TopNovels({ novels }) {
    console.log(novels);
    return (
        <div className="bg-gray-100 popular-container">
            <h2 className="popular-title">Popular Title</h2>
            <div className="popular-content">
                {novels.map((novel) => (
                    <div key={novel.id} className="flex popular-novel">
                        <div className="popular-novel-image">
                            <img
                                src={novel.image_url}
                                alt={novel.title}
                                className=""
                            />
                        </div>
                        <div className="popular-novel-info">
                            <div>
                                <h3 className="">{novel.title}</h3>
                                <p className="description">{novel.description}</p>
                            </div>
                            <div className="tag-container d-flex flex-columnb">
                                <p className="author-name">{novel.author_name}</p>
                                {novel.tags.map((tag) => (
                                    <span key={tag.id} 
                                    className="bg-gray-400 px-3 py-2 tag-item">
                                        {tag.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
