import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useContent, Skill } from "../context/ContentContext";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

export const TechCarousel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { content } = useContent();
  const { skills } = content;

  // Group skills by category
  const categories = ["Frontend", "Backend", "Mobile", "AI/ML", "AI Frameworks", "Tools"];
  const groupedSkills = categories.reduce((acc, category) => {
    acc[category] = skills.filter(skill => skill.category === category);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section ref={ref} className="py-16 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-500"
        >
          Technologies & Skills
        </motion.h2>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          {categories.map((category) => (
            groupedSkills[category]?.length > 0 && (
              <div key={category} className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-300 border-b border-gray-800 pb-2">
                  {category}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
                  {groupedSkills[category].map((skill, index) => (
                    <SkillCard key={`${category}-${index}`} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            )
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col items-center space-y-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
    >
      <motion.img
        src={skill.logo}
        alt={skill.name}
        className="h-12 w-12 object-contain filter hover:brightness-110"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: index * 0.05, duration: 0.5 }}
      />
      <div className="text-center">
        <h4 className="text-sm font-medium text-white/90">{skill.name}</h4>
        {/* Optional: Show proficiency bar or percentage if desired, keeping it clean for now */}
      </div>
    </motion.div>
  );
};
