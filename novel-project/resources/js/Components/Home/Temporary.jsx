import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MangaCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Mock data for manga titles
    const items = [
        {
            id: 1,
            title: "Bouken ni Iku Fuku ga Nai!",
            cover: "/api/placeholder/280/400",
            author: "Negi Tojou",
            tags: ["ACTION", "ADVENTURE", "COMEDY", "FANTASY"],
            description:
                "A certain village was attacked by a monster army and fell into a dire situation. At that moment, the strongest hero, Eric, appeared and instantly mowed down the enemies...",
        },
        {
            id: 2,
            title: "Sample Manga 2",
            cover: "/api/placeholder/280/400",
            author: "Author 2",
            tags: ["ACTION", "DRAMA"],
            description: "Another exciting story...",
        },
        {
            id: 3,
            title: "Sample Manga 3",
            cover: "/api/placeholder/280/400",
            author: "Author 3",
            tags: ["ROMANCE", "COMEDY"],
            description: "A romantic comedy...",
        },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Popular New Titles</h2>

            <div className="relative overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="w-full flex-shrink-0 flex gap-6 p-4"
                        >
                            <div className="w-72">
                                <img
                                    src={item.cover}
                                    alt={item.title}
                                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                                />
                            </div>

                            <div className="flex-1">
                                <h3 className="text-2xl font-bold mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 mb-2">
                                    {item.author}
                                </p>

                                <div className="flex gap-2 mb-4">
                                    {item.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-gray-700 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100"
            >
                <ChevronLeft size={24} />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100"
            >
                <ChevronRight size={24} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {items.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentIndex
                                ? "bg-blue-600"
                                : "bg-gray-300"
                        }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default MangaCarousel;
