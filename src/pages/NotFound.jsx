import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 | Not Found - MediMart</title>
        <meta name="description" content="Page not found on MediMart." />
      </Helmet>

      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-green-50 text-center px-4">
        <h1 className="text-[100px] font-extrabold text-green-600 drop-shadow-lg leading-none mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 max-w-md mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="btn bg-green-600 text-white hover:bg-green-700 transition-all duration-300"
        >
          ⬅ Back to Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
