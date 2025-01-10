import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

export default function MainContent() {
    return (
        <div className="main-content">
            <img
                src="https://static.bandainamcoent.eu/high/elden-ring/elden-ring-nightreign/00-page-product/ERN-header-mobile.jpg"
                alt="Cover"
                className="cover-image"
            />
            <div className="content">
                <div className="mb-4">
                    <h1 className="genshin-font text-2xl font-bold pt-4 pl-4">Popular titles</h1>
                </div>
                <div className=" flex justify-between">
                    <div className="novel-image">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/vi/b/b9/Elden_Ring_Box_art.jpg"
                            alt=""
                        />
                    </div>
                    <div className="novel-info ml-4 flex flex-col justify-between">
                        <div>
                            <h1 className="genshin-font">Title of Novel</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsum asperiores maxime
                                cumque? Consequatur officiis officia, tempora
                                consequuntur perferendis possimus architecto
                                vero ab porro alias explicabo? Illum quis quas
                                distinctio quae.
                            </p>
                        </div>
                        <div className="next-previous flex justify-end">
                            <MdNavigateBefore size={40} className="hover-shadow" />
                            <MdNavigateNext size={40} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
