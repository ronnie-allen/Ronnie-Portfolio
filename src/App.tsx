import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Blog } from "./sections/Blog";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import {TechCarousel} from "./sections/TechCarousel";
import Navbar from "./sections/Navbar";

function App() {
  return (
    <div className="font-inter">
      {/* Main Container */}
      <div className="relative h-full w-full bg-black overflow-x-hidden">
        {/* Background Gradient and Shapes */}
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] z-0"></div>
        <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)] z-0"></div>

        {/* Navbar */}
        <Navbar />

        {/* Main Sections with Spacing */}
        <div className="z-10 relative mt-20 md:mt-0"> {/* Adjust margin-top for mobile */}
          <Hero />
        </div>
        
        <div className="z-10 relative mt-10 md:mt-20">
          <TechCarousel />
        </div>

        <div className="z-10 relative mt-10 md:mt-20">
          <Projects />
        </div>

        <div className="z-10 relative mt-10 md:mt-20">
          <Blog />
        </div>

        <div className="z-10 relative mt-10 md:mt-20">
          <Contact />
        </div>

        <div className="z-10 relative mt-10 md:mt-20">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
