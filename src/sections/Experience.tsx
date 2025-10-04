import { motion } from "framer-motion";
import { FaBriefcase, FaUserGraduate, FaLaptopCode } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    type: "education",
    title: "B.Tech in Artificial Intelligence & Data Science",
    company: "Sri Krishna College of Engineering and Technology",
    duration: "2021 - Present",
    description: "Currently pursuing undergraduate studies in AI & DS, where I've developed a strong foundation in machine learning, data analytics, and computer science fundamentals. Engaged in various projects and internships.",
    icon: FaUserGraduate,
  },
  {
    id: 2,
    type: "freelance",
    title: "Freelance Full-Stack Developer",
    company: "Various Clients",
    duration: "2023 - Present",
    description: "Working on multiple freelance projects including e-commerce platforms, AI-powered applications, and responsive web designs. Collaborated with clients to deliver high-quality, scalable solutions.",
    icon: FaLaptopCode,
  },
  {
    id: 3,
    type: "project",
    title: "MindKraft '25 - Event Website Developer",
    company: "Sri Krishna College of Engineering and Technology",
    duration: "2024",
    description: "Led the frontend development for the university's annual tech fest website. Integrated payment APIs, user authentication, and built a fully functional platform handling hundreds of registrations.",
    icon: FaLaptopCode,
  },
  {
    id: 4,
    type: "achievement",
    title: "Intel OneAPI Hackathon Winner",
    company: "Patient Monitoring System Project",
    duration: "2024",
    description: "Developed an AI-driven hospital monitoring platform. Won recognition in Intel's OneAPI challenge for innovative use of AI in healthcare data analysis.",
    icon: FaBriefcase,
  },
];

export const Experience = () => {
  return (
    <section className="py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-red-500 mb-16"
        >
          Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500 to-transparent"></div>

          {/* Timeline Items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 flex ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center`}
            >
              {/* Content Card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 1 }}
                      className="text-red-500 mt-1"
                    >
                      <exp.icon size={20} />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-red-400 font-medium mb-2">
                        {exp.company}
                      </p>
                      <p className="text-cyan-400 text-sm mb-4">
                        {exp.duration}
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-black z-10"></div>

              {/* Empty Space for Alternating */}
              <div className="hidden md:block w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
