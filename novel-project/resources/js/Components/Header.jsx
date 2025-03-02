import { FaArrowRight } from "react-icons/fa";
export default function Header({ title, is_expand }) {
    return (
        <div className="flex justify-between items-center text-2xl mb-4">
            <a href=""><h2>{title}</h2></a>
            {is_expand && <a href="" style={{ paddingRight: "1rem" }}><FaArrowRight /></a>}
        </div>
    );
}