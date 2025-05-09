// src/sections/Hero.tsx
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaCode, FaMobileAlt, FaRobot, FaBrain, FaMusic } from "react-icons/fa";
import RonPic from "../assets/ra1.png";

export const Hero = () => {
  return (
    <section className="relative text-white h-screen w-full overflow-hidden flex flex-col justify-between">
      {/* Bible Verse */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-50 font-mono font-light text-red-00 text-sm md:text-base text-center px-4">
        “Commit your work to the Lord, and your plans will be established.” –
        Proverbs 16:3
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center flex-grow px-6 z-10">
        {/* Left Content - 60% */}
        <div className="md:w-3/5 w-full text-left space-y-6 mx-4">
          <h1 className="text-5xl md:text-6xl font-bold font-inter">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-[#6dd5ed] via-[#2193b0] to-[#ffffff] text-transparent bg-clip-text">
              Ronnie A Jeffrey
            </span>
          </h1>

          <div className="text-[#5ddcff] font-semibold text-xl md:text-2xl flex items-center gap-2">
            <span>
              <Typewriter
                words={[
                  "Full-stack Developer",
                  "Mobile App Developer",
                  "AI Enthusiast",
                  "ML Explorer",
                  "Singer & Musician",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
              />
            </span>
          </div>

          <div className="flex gap-4 text-[#f02d5a] text-xl">
            <FaCode title="Full-stack" />
            <FaMobileAlt title="Mobile Apps" />
            <FaRobot title="AI" />
            <FaBrain title="ML" />
            <FaMusic title="Music" />
          </div>

          <p className="text-gray-300 leading-relaxed max-w-xl text-lg font-light">
            I craft code with creativity—building smart, scalable apps by day,
            and composing melodies by night. Whether it's writing elegant
            full-stack solutions or performing live on stage, I bring the same
            passion and precision. I believe in blending logic with
            emotion—because great tech, like great music, moves people.
          </p>
        </div>

        {/* Right Image - 40% */}
        <div className="md:w-2/5 w-full relative mt-10 md:mt-0 flex justify-center items-center">
          {/* Animated background shape */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1.5 }}
            transition={{ duration: 1.5, type: "spring" }}
            className="absolute w-[340px] h-[340px] bg-gradient-to-r from-red-500 via-blue-400 to-black opacity-30 rounded-full blur-2xl z-0"
          />

          {/* Developer Image with glow outline */}
          <img
            src={RonPic}
            alt="Ronnie A Jeffrey"
            className="relative z-10 h-auto object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]"
          />
        </div>
      </div>
    </section>
  );
};
