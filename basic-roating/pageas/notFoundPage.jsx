import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="container">
            <h1>page not found</h1>
            <p>go to <Link to="/">homepage</Link></p>
        </div>
    )
};

export { NotFoundPage };