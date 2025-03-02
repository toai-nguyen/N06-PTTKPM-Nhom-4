import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useState, useEffect } from "react";
import "../../../css/components/home/TopNovels.css";

export default function TopNovels({ novels }) {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const handleTransitionEnd = () => {
            if (currentIndex === novels.length + 1) {
                setIsTransitioning(false);
                setCurrentIndex(1);
            } else if (currentIndex === 0) {
                setIsTransitioning(false);
                setCurrentIndex(novels.length);
            } else {
                setIsTransitioning(false);
            }
        };

        const container = document.querySelector(".carousel-container");
        container.addEventListener("transitionend", handleTransitionEnd);

        return () => {
            container.removeEventListener("transitionend", handleTransitionEnd);
        };
    }, [currentIndex, novels.length]);

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev - 1);
    };

    const allSlides = [novels[novels.length - 1], ...novels, novels[0]];

    return (
        <div className="popular-container">
            <h2 className="popular-title">Popular Title</h2>
            <div className="popular-content">
                <div
                    className="carousel-container"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                        transition: isTransitioning
                            ? "transform 0.3s ease-in-out"
                            : "none",
                    }}
                >
                    {allSlides.map((novel, index) => (
                        <div
                            key={`${novel.id}-${index}`}
                            className="flex popular-novel"
                        >
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
                                    <p className="description">
                                        {novel.description}
                                    </p>
                                </div>
                                <div className="sub-info-container d-flex flex-columnb">
                                    <p className="author-name">
                                        {novel.author_name}
                                    </p>
                                    <div className="sub-info-container flex">
                                        <div className="tag-list">
                                            {novel.tags.map((tag) => (
                                                <span
                                                    key={tag.id}
                                                    className="bg-gray-400 tag-item"
                                                >
                                                    {tag.name}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="carousel-controls">
                                            <button
                                                className="carousel-button prev"
                                                onClick={prevSlide}
                                                disabled={isTransitioning}
                                            >
                                                <MdNavigateBefore
                                                    className="btn-prev"
                                                    size={25}
                                                />
                                            </button>
                                            <button
                                                className="carousel-button next"
                                                onClick={nextSlide}
                                                disabled={isTransitioning}
                                            >
                                                <MdNavigateNext
                                                    className="btn-next"
                                                    size={25}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
