import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="text-center justify-center items-center md:mt-40 mt-20">
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link className="text-blue-500" to="/">Go back to the homepage</Link>
        </div>
    );
};

export default Error;