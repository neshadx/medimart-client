import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 | Not Found - Swiftcarz</title>
        <meta name="description" content="Page not found." />
      </Helmet>

      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white to-orange-50 dark:from-gray-900 dark:to-gray-950 text-center px-6">
        <h1 className="text-7xl font-extrabold text-[#DD6B20] drop-shadow mb-4 animate-pulse">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-3">
          Uh-oh! This page doesn’t exist.
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-md mb-8">
          The page you’re trying to reach might have been moved, deleted, or never existed at all.
        </p>
        <Link
          to="/"
          className="px-6 py-2 border-2 border-[#DD6B20] text-[#DD6B20] dark:text-white font-medium hover:bg-[#DD6B20] hover:text-white transition duration-300 rounded"
        >
          ⬅ Back to Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
