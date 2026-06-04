import { motion } from "framer-motion";

const highlights = [
  "Organized hands-on workshops on AI/ML fundamentals",
  "Mentored students on project-based learning and tech exploration",
  "Fostered a collaborative community around emerging technologies",
];

export const Leadership = () => {
  return (
    <section id="leadership" className="py-20 px-4 sm:px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-red-500 mb-14 text-center"
        >
          Leadership & Mentoring
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-stretch gap-0 md:gap-0 rounded-xl overflow-hidden bg-white/[0.03] border border-white/[0.06]"
        >
          {/* Photo */}
          <div className="w-full md:w-[45%] min-h-[320px] md:min-h-[420px]">
            <img
              src="/leadership.jpg"
              alt="Leadership activity"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Divider — only on desktop */}
          <div className="hidden md:block w-px bg-white/[0.08] shrink-0" />

          {/* Content */}
          <div className="flex-1 flex flex-col justify-center p-8 md:p-10">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-red-400 mb-3">
              AI Club Coordinator
            </span>

            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
              Building a Community of Builders
            </h3>

            <p className="text-base leading-relaxed text-gray-300 mb-6">
              As the <strong className="text-white">AI Club Coordinator</strong> for my division,
              I organize workshops, lead discussions on emerging AI technologies, and mentor students
              on exploring modern tech stacks — from Python and web development to AI/ML and agentic
              systems. My goal is to create a space where curiosity meets practice, and where every
              student feels empowered to build.
            </p>

            <ul className="space-y-2.5">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                  <span className="text-red-400 mt-0.5 shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Quote strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center border-t border-white/[0.06] pt-8"
        >
          <p className="text-base italic text-gray-500 max-w-2xl mx-auto leading-relaxed">
            "The best way to learn is to teach. The best way to grow is to help others grow."
          </p>
        </motion.div>
      </div>
    </section>
  );
};
