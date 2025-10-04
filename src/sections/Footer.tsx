// src/components/Footer.tsx
import { FaArrowUp } from "react-icons/fa";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="text-white py-8 px-4 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">

        {/* Left: Name / Branding */}
        <div className="text-lg font-semibold tracking-wide">
          Ronnie Allen
        </div>

        {/* Center: Made with Love */}
        <div className="text-gray-400">
          Made with ❤️
        </div>

        {/* Right: Copyright */}
        <div className="text-gray-400 text-center md:text-right">
          &copy; {new Date().getFullYear()} Ronnie A Jeffrey. All Rights Reserved.
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 opacity-75 hover:opacity-100"
        aria-label="Back to top"
      >
        <FaArrowUp className="text-lg" />
      </button>
    </footer>
  );
};
