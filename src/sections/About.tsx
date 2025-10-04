// AboutMeSection.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="min-h-screen py-1 px-6 text-gray-800 flex items-center">
      <div className="max-w-6xl mx-auto text-center" ref={ref}>
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#f02d5a] mb-8"
        >
          About Me
        </motion.h2>

        {/* Paragraphs */}
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg leading-relaxed text-white mb-6 text-justify max-w-4xl mx-auto"
        >
          I'm <strong>Ronnie A Jeffrey</strong>, a passionate tech enthusiast
          and aspiring developer with a deep interest in Artificial Intelligence
          and Data Science. Currently pursuing my B.Tech in AI & DS, I have
          always been driven by a desire to build impactful, intuitive, and
          elegant digital experiences that connect people and solve real-world
          problems. My philosophy centers around writing clean code, designing
          with empathy, and continually learning in this ever-evolving tech
          landscape.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg leading-relaxed text-white mb-6 text-justify max-w-4xl mx-auto"
        >
          I hail from <strong>Coimbatore, Tamil Nadu</strong> — a vibrant city
          that nurtured my curiosity and creativity from a young age. My journey
          into technology began with self-initiated projects and gradually
          expanded into freelancing, internships, and collaborative real-time
          application development. From mobile app development using Flutter to
          experimenting with web technologies and AI models, each milestone has
          deepened my understanding and sharpened my skills across domains.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg leading-relaxed text-white mb-6 text-justify max-w-4xl mx-auto"
        >
          Outside of my academic and professional interests, I find joy in the
          world of creativity — especially through{" "}
          <strong>music production</strong>, <strong>video editing</strong>, and{" "}
          <strong>photography</strong>. I love combining the logical precision
          of tech with the expressive nature of art. Whether it's crafting a user
          interface or composing a track, I thrive in spaces where innovation
          meets emotion. My goal is to bridge the gap between technology and
          creativity — building experiences that are not just functional, but also
          beautiful.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-8 mt-12"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-red-500">4+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-500">3+</div>
            <div className="text-gray-400">Years Learning</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-500">15+</div>
            <div className="text-gray-400">Skills Acquired</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-500">1</div>
            <div className="text-gray-400">Hackathon Winner</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
