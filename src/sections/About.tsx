import { motion } from "framer-motion";

export const About = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.8 + i * 0.1, ease: "easeOut" },
    }),
  };

  const stats = [
    { value: "8+", label: "Projects Completed" },
    { value: "3+", label: "Years of Experience" },
    { value: "30+", label: "Technologies Used" },
    { value: "1", label: "Hackathon Winner" },
  ];

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 text-white flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-red-500 mb-16 text-center"
        >
          About Me
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <motion.div variants={itemVariants} className="relative p-6 rounded-xl bg-white/[0.03] border border-white/[0.06] border-l-red-500 border-l-2">
              <p className="text-base sm:text-lg leading-relaxed text-gray-300">
                I'm <strong className="text-white">Ronnie A Jeffrey</strong>, an AI & Data Science student
                and full-stack developer from Coimbatore. I build <strong className="text-white">AI-driven applications</strong>,
                full-stack web platforms, and mobile experiences that solve real problems.
                My work spans from hackathon-winning patient monitoring systems to
                automated blog-writing agents — always with clean code and thoughtful
                design at the core.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="relative p-6 rounded-xl bg-white/[0.03] border border-white/[0.06] border-l-cyan-500 border-l-2">
              <p className="text-base sm:text-lg leading-relaxed text-gray-300">
                I'm currently pursuing my <strong className="text-white">B.Tech in AI & Data Science</strong>,
                where I've built projects spanning <strong className="text-white">machine learning</strong>,
                <strong className="text-white"> agentic AI</strong>, and <strong className="text-white">full-stack development</strong>.
                I won the <strong className="text-white">Intel OneAPI Hackathon</strong> with a multi-modal
                AI patient monitoring platform, and have since built tools like BlogRelay
                (automated blog agent) and UNISCAN (face-recognition attendance system).
              </p>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="relative p-6 rounded-xl bg-white/[0.03] border border-white/[0.06] max-w-4xl mx-auto">
            <p className="text-base sm:text-lg leading-relaxed text-gray-300 text-center">
              Outside of tech, I create — producing <strong className="text-white">Electronic Music</strong>,
              editing <strong className="text-white">Cinematic Videos</strong>, and capturing
              <strong className="text-white"> landscapes through photography</strong>.
              I believe the best work lives where logic meets art — where a well-designed API
              feels as satisfying as a perfectly mixed track. Whether it's architecting a system
              or building a beat, I bring the same curiosity, patience, and attention to detail
              to everything I make.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-14"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={statVariants}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-red-500">{stat.value}</div>
              <div className="text-sm sm:text-base text-gray-400 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
