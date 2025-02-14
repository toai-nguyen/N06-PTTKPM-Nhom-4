import { FaRegClock, FaRegMessage } from "react-icons/fa6";
export default function LastestUpdate({ lastest }) {
    return (
        <div>
            
        </div>
        // <div className="w-full max-w-7xl mx-auto p-4">
        //     <div className="flex justify-between items-center mb-6">
        //         <h2 className="genshin-font text-2xl font-bold">Latest Updates</h2>
        //         <button className="p-2">
        //             <svg
        //                 className="w-6 h-6"
        //                 viewBox="0 0 24 24"
        //                 fill="none"
        //                 stroke="currentColor"
        //             >
        //                 <path
        //                     strokeLinecap="round"
        //                     strokeLinejoin="round"
        //                     strokeWidth={2}
        //                     d="M9 5l7 7-7 7"
        //                 />
        //             </svg>
        //         </button>
        //     </div>

        //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        //         {chapters.map((chapter) => (
        //             <div
        //                 key={chapter.id}
        //                 className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
        //             >
        //                 {/* Thumbnail */}
        //                 <div className="flex-shrink-0">
        //                     <img
        //                         src={chapter.thumbnail}
        //                         alt={chapter.title}
        //                         className="w-16 h-20 object-cover rounded"
        //                     />
        //                 </div>

        //                 {/* Content */}
        //                 <div className="flex-grow min-w-0">
        //                     <h3 className="font-medium text-gray-900 truncate">
        //                         {chapter.title}
        //                     </h3>

        //                     {/* Chapter info with flag if present */}
        //                     <div className="flex items-center space-x-2 mt-1">
        //                         {chapter.hasFlag && (
        //                             <img
        //                                 src={`/api/placeholder/16/16`}
        //                                 alt={`${chapter.language} flag`}
        //                                 className="w-4 h-4"
        //                             />
        //                         )}
        //                         <span className="text-sm text-gray-600">
        //                             {chapter.chapter}
        //                         </span>
        //                     </div>

        //                     {/* Author and timestamp */}
        //                     <div className="flex items-center space-x-2 mt-2 text-sm text-gray-500">
        //                         <span className="flex items-center">
        //                             <svg
        //                                 className="w-4 h-4 mr-1"
        //                                 viewBox="0 0 24 24"
        //                                 fill="none"
        //                                 stroke="currentColor"
        //                             >
        //                                 <path
        //                                     strokeLinecap="round"
        //                                     strokeLinejoin="round"
        //                                     strokeWidth={2}
        //                                     d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        //                                 />
        //                             </svg>
        //                             {chapter.author}
        //                         </span>
        //                         <span className="flex items-center">
        //                             <FaRegClock className="w-4 h-4 mr-1" />
        //                             {chapter.timeAgo}
        //                         </span>
        //                     </div>
        //                 </div>

        //                 {/* Comment button */}
        //                 <button className="flex-shrink-0 p-1 text-gray-400 hover:text-gray-600">
        //                     <FaRegMessage className="w-5 h-5" />
        //                 </button>
        //             </div>
        //         ))}
        //     </div>
        // </div>
    );
}
