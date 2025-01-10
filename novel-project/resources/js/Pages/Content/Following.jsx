import HomeLayout from "@/Layouts/HomeLayout";
import NotAuth from "@/Components/Home/NotAuth";
import react, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
export default function Following({ auth }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const items = [
        {
            id: 1,
            title: "Go! Fight !",
            image: "https://upload.wikimedia.org/wikipedia/vi/b/b9/Elden_Ring_Box_art.jpg",
            flag: "gb",
        },
        {
            id: 2,
            title: "Shikanokonokoktantan",
            image: "https://upload.wikimedia.org/wikipedia/vi/b/b9/Elden_Ring_Box_art.jpg",
            flag: "jp",
        },
        // Add more items
    ];
    const showNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(items.length / 5));
    };

    const showPrevSlide = () => {
        setCurrentSlide(
            (prev) =>
                (prev - 1 + Math.ceil(items.length / 5)) %
                Math.ceil(items.length / 5)
        );
    };
    return (
        <HomeLayout>
            {!auth.user ? (
                <NotAuth />
            ) : (
                <div className="w-full max-w-7xl mx-auto p-4">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="genshin-font text-2xl font-bold">
                            Your following page
                        </h2>
                        <button className="p-2">
                            <FaChevronLeft className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="relative">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-300 ease-in-out"
                                style={{
                                    transform: `translateX(-${
                                        currentSlide * 100
                                    }%)`,
                                }}
                            >
                                {items.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex-none w-1/5 px-2"
                                    >
                                        <div className="relative group">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full aspect-[3/4] object-cover rounded-lg shadow-md"
                                            />
                                            {/* {item.flag && (
                                            <img
                                                src={`/api/placeholder/20/20`}
                                                alt={`${item.flag} flag`}
                                                className="absolute top-2 right-2 w-5 h-5 rounded-sm"
                                            />
                                        )} */}
                                            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg">
                                                <h3 className="text-white text-sm font-medium line-clamp-2">
                                                    {item.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={showPrevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
                        >
                            <FaChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={showNextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
                        >
                            <FaChevronRight className="w-6 h-6" />
                        </button>

                        <div className="flex justify-center mt-4 gap-2">
                            {Array.from({
                                length: Math.ceil(items.length / 5),
                            }).map((_, idx) => (
                                <button
                                    key={idx}
                                    className={`w-2 h-2 rounded-full ${
                                        idx === currentSlide
                                            ? "bg-red-500"
                                            : "bg-gray-300"
                                    }`}
                                    onClick={() => setCurrentSlide(idx)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </HomeLayout>
    );
}
