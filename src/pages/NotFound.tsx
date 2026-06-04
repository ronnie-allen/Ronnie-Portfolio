import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <Helmet>
        <title>404 - Page Not Found | Ronnie A Jeffrey</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <h1 className="text-8xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl text-gray-300 mb-8">Page not found</p>
      <p className="text-gray-500 mb-8 max-w-md text-center">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition"
      >
        Go Home
      </Link>
    </div>
  );
};
