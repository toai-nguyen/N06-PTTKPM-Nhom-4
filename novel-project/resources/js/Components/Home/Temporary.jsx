import { useState } from "react";
import { Menu } from "lucide-react";

const Layout = ({ children, auth }) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="flex h-screen w-full">
            {/* Sidebar */}
            <div
                className={`transition-all duration-300 ease-in-out bg-white shadow-md 
        ${sidebarOpen ? "w-64" : "w-0 -ml-6"}`}
            >
                {sidebarOpen && <Sidebar />}
            </div>

            {/* Main content area */}
            <div className="flex flex-col flex-1 overflow-hidden">
                <div className="flex items-center shadow-sm h-16 px-4">
                    {!sidebarOpen && (
                        <button
                            className="mr-4 focus:outline-none"
                            onClick={toggleSidebar}
                        >
                            <Menu size={24} />
                        </button>
                    )}

                    <div className="flex justify-between items-center w-full">
                        {/* Logo can be conditionally shown based on sidebar state */}
                        {!sidebarOpen && (
                            <div className="logo mr-4">MangaDex</div>
                        )}

                        {/* Rest of navbar content */}
                        <NavigatorBar
                            auth={auth}
                            onMenuClick={
                                sidebarOpen ? toggleSidebar : undefined
                            }
                        />
                    </div>
                </div>

                <main className="flex-1 overflow-auto p-4">{children}</main>
            </div>
        </div>
    );
};

// Sidebar component with close button
const Sidebar = ({ onClose }) => {
    return (
        <div className="h-full p-4">
            <div className="flex items-center justify-between mb-6">
                <div className="logo">MangaDex</div>
                {onClose && (
                    <button className="focus:outline-none" onClick={onClose}>
                        <XIcon size={18} />
                    </button>
                )}
            </div>

            {/* Sidebar content similar to MangaDex */}
            <nav className="space-y-6">
                <div>
                    <a
                        href="#"
                        className="flex items-center p-2 bg-red-200 text-red-900 rounded"
                    >
                        <HomeIcon size={18} className="mr-3" />
                        <span>Home</span>
                    </a>
                </div>

                <div>
                    <a
                        href="#"
                        className="flex items-center p-2 hover:bg-gray-100 rounded"
                    >
                        <BookmarkIcon size={18} className="mr-3" />
                        <span>Follows</span>
                    </a>
                    <div className="pl-8 mt-2 space-y-2">
                        <a href="#" className="block text-gray-600">
                            Updates
                        </a>
                        <a href="#" className="block text-gray-600">
                            Library
                        </a>
                        <a href="#" className="block text-gray-600">
                            MDLists
                        </a>
                        <a href="#" className="block text-gray-600">
                            My Groups
                        </a>
                        <a href="#" className="block text-gray-600">
                            Reading History
                        </a>
                    </div>
                </div>

                {/* Additional sidebar sections similar to MangaDex */}
            </nav>
        </div>
    );
};

{
    /* <div className="popular-novel">
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
                                        </div>
                                    </div>
                                </div>
                            </div> */
}
