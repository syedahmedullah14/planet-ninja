
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold font-display text-ninja-purple mb-4">404</h1>
          <h2 className="text-3xl font-semibold font-display mb-6">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="bg-ninja-purple hover:bg-ninja-purple/90 text-white px-8 py-3 rounded-full transition-all duration-300 font-medium">
            Return to Homepage
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
