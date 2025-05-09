// src/sections/Navbar.tsx
import React from "react";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 flex items-center justify-between bg-transparent backdrop-blur-lg rounded-full shadow-xl">
      {/* Name on the Left */}
      <div className="text-white font-inter text-xl font-bold ml-8">
        Ronnie A Jeffrey
      </div>

      {/* Additional navbar content */}
      <div className="space-x-6 mr-8 flex items-center">
        {/* Navbar links */}
        <a href="#about" className="text-white hover:text-red-400">About</a>
        <a href="#projects" className="text-white hover:text-red-400">Projects</a>
        <a href="#contact" className="text-white hover:text-red-400">Contact</a>
        
        {/* GitHub Icon */}
        <div className="text-white hover:text-red-400">
          <a href="https://github.com/ronnieaj" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
