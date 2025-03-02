import Header from "../Header";
export default function RowNovels({ title, novels }) {
    return (
        <div className="header">
            <Header title={title} is_expand={true} />
            <div>
                <h3>This is something big</h3>
            </div>
        </div>
    );
}