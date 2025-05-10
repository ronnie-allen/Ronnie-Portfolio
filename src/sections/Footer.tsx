// src/components/Footer.tsx

export const Footer = () => (
  <footer className="text-white py-8 px-4">
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
  </footer>
);
