import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Blog } from "./sections/Blog";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { TechCarousel } from "./sections/TechCarousel";
import { About } from "./sections/About";
import { BeyondTheCode } from "./sections/BeyondTheCode";
import { Experience } from "./sections/Experience";
import Navbar from "./sections/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContentProvider } from "./context/ContentContext";
import { CMS } from "./pages/CMS";
import { Me } from "./pages/Me";
import { NotFound } from "./pages/NotFound";
import { ErrorBoundary } from "./components/ErrorBoundary";

function Portfolio() {
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
        <div className="z-10 relative mt-20 md:mt-0">
          <ErrorBoundary><Hero /></ErrorBoundary>
        </div>

        <div className="z-10 relative mt-10 md:mt-20">
          <ErrorBoundary><TechCarousel /></ErrorBoundary>
        </div>

        <div className="z-10 relative mt-10 md:mt-20" id="about">
          <ErrorBoundary><About /></ErrorBoundary>
        </div>

        <div className="z-10 relative mt-10 md:mt-20">
          <ErrorBoundary><BeyondTheCode /></ErrorBoundary>
        </div>

        <div className="z-10 relative mt-10 md:mt-20">
          <ErrorBoundary><Experience /></ErrorBoundary>
        </div>

        <div className="z-10 relative mt-10 md:mt-20" id="projects">
          <ErrorBoundary><Projects /></ErrorBoundary>
        </div>

        <div className="z-10 relative mt-10 md:mt-20">
          <ErrorBoundary><Blog /></ErrorBoundary>
        </div>

        <div className="z-10 relative mt-10 md:mt-20" id="contact">
          <ErrorBoundary><Contact /></ErrorBoundary>
        </div>

        <div className="z-10 relative mt-10 md:mt-20">
          <ErrorBoundary><Footer /></ErrorBoundary>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <ContentProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/me" element={<Me />} />
          <Route path="/cms" element={<CMS />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ContentProvider>
  );
}

export default App;
