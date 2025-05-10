import { useState } from "react";
import { FaGithub } from "react-icons/fa"; 
import { GiHamburgerMenu } from "react-icons/gi"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 flex items-center justify-between bg-transparent backdrop-blur-lg rounded-full shadow-xl">
      {/* Name on the Left */}
      <div className="text-white font-inter text-xl font-bold ml-8">
        Ronnie A Jeffrey
      </div>

      {/* Navbar content for desktop */}
      <div className="space-x-6 mr-8 hidden md:flex items-center">
        {/* Navbar links */}
        <a href="#about" className="text-white hover:text-red-400 transition duration-300">About</a>
        <a href="#projects" className="text-white hover:text-red-400 transition duration-300">Projects</a>
        <a href="#contact" className="text-white hover:text-red-400 transition duration-300">Contact</a>

        {/* GitHub Icon */}
        <div className="text-white hover:text-red-400">
          <a href="https://github.com/ronnie-allen" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
        </div>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center" onClick={toggleMenu}>
        <GiHamburgerMenu size={20} className="text-white" />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 right-0 bg-transparent backdrop-blur-lg p-6 md:hidden flex flex-col items-center space-y-4 mt-16">
          <a href="#about" className="text-white hover:text-red-400 transition duration-300" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#projects" className="text-white hover:text-red-400 transition duration-300" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#contact" className="text-white hover:text-red-400 transition duration-300" onClick={() => setIsMenuOpen(false)}>Contact</a>

          {/* GitHub Icon */}
          <div className="text-white hover:text-red-400">
            <a href="https://github.com/ronnie-allen" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
