import { Link } from "@inertiajs/react";
import SecondaryButton from "@/Components/SecondaryButton";
import PrimaryButton from "../PrimaryButton";
import DangerButton from "../DangerButton";

export default function AuthorInfo({ novel, isAuthor }) {
    return (
        <div className="author-info w-1/3 ml-4 p-4 bg-white rounded shadow">
            <h3 className="text-lg font-bold mb-3">Author</h3>
            
            <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <span className="font-medium">{novel.author_name}</span>
            </div>
            
            <div className="mb-4">
                <div className="flex justify-between py-1">
                    <span className="text-gray-600">Status:</span>
                    <span>{novel.status}</span>
                </div>
                <div className="flex justify-between py-1">
                    <span className="text-gray-600">Followers:</span>
                    <span>{novel.followers}</span>
                </div>
                <div className="flex justify-between py-1">
                    <span className="text-gray-600">Chapters:</span>
                    <span>{novel.number_of_chapters}</span>
                </div>
            </div>
            {isAuthor ? (
                <div className="author-actions mt-4 flex" style={{ justifyContent: "space-between" }}>
                    <Link href="">
                        <PrimaryButton className="">
                            Add new chapter
                        </PrimaryButton>
                    </Link>
                    <Link href={route("edit-novel", novel.id)}>
                        <SecondaryButton className="">
                            Edit
                        </SecondaryButton>
                    </Link>
                    <Link href="">
                        <DangerButton className="">
                            Delete
                        </DangerButton>
                    </Link>
                </div>
            ):(
                <div className="author-actions mt-4">
                    <Link href="">
                        <PrimaryButton className="">
                            Follow
                        </PrimaryButton>
                    </Link>
                </div>
            )}
            
            <div className="mt-4">
                <h4 className="font-medium mb-2">Tags</h4>
                <div className="flex flex-wrap gap-1">
                    {novel.tags.map(tag => (
                        <span key={tag.id} className="px-2 py-1 bg-gray-100 text-sm rounded">
                            {tag.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}