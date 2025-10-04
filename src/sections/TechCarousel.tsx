import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Skill {
  name: string;
  logo: string;
  proficiency: number;
}

const skills = [
  { name: "HTML", logo: "https://skillicons.dev/icons?i=html", category: "Frontend", proficiency: 90 },
  { name: "CSS", logo: "https://skillicons.dev/icons?i=css", category: "Frontend", proficiency: 85 },
  { name: "JavaScript", logo: "https://skillicons.dev/icons?i=js", category: "Frontend", proficiency: 80 },
  { name: "TypeScript", logo: "https://skillicons.dev/icons?i=ts", category: "Frontend", proficiency: 75 },
  { name: "React", logo: "https://skillicons.dev/icons?i=react", category: "Frontend", proficiency: 85 },
  { name: "Tailwind", logo: "https://skillicons.dev/icons?i=tailwind", category: "Frontend", proficiency: 80 },
  { name: "Bootstrap", logo: "https://skillicons.dev/icons?i=bootstrap", category: "Frontend", proficiency: 70 },
  { name: "Node.js", logo: "https://skillicons.dev/icons?i=nodejs", category: "Backend", proficiency: 75 },
  { name: "Python", logo: "https://skillicons.dev/icons?i=python", category: "Backend", proficiency: 70 },
  { name: "FastAPI", logo: "https://skillicons.dev/icons?i=fastapi", category: "Backend", proficiency: 65 },
  { name: "MongoDB", logo: "https://skillicons.dev/icons?i=mongodb", category: "Backend", proficiency: 70 },
  { name: "Firebase", logo: "https://skillicons.dev/icons?i=firebase", category: "Backend", proficiency: 75 },
  { name: "Flutter", logo: "https://skillicons.dev/icons?i=flutter", category: "Mobile", proficiency: 70 },
  { name: "Dart", logo: "https://skillicons.dev/icons?i=dart", category: "Mobile", proficiency: 65 },
  { name: "TensorFlow", logo: "https://skillicons.dev/icons?i=tensorflow", category: "AI/ML", proficiency: 60 },
  { name: "Sci-Kit", logo: "https://skillicons.dev/icons?i=sklearn", category: "AI/ML", proficiency: 65 },
  { name: "Java", logo: "https://skillicons.dev/icons?i=java", category: "AI/ML", proficiency: 55 },
  { name: "PydanticAI", logo: "https://skillicons.dev/icons?i=python", category: "AI Frameworks", proficiency: 40 }, // Python related
  { name: "Langchain", logo: "https://skillicons.dev/icons?i=python", category: "AI Frameworks", proficiency: 45 },
  { name: "Langgraph", logo: "https://skillicons.dev/icons?i=python", category: "AI Frameworks", proficiency: 40 },
  { name: "Langsmith", logo: "https://skillicons.dev/icons?i=python", category: "AI Frameworks", proficiency: 40 },
  { name: "CrewAI", logo: "https://skillicons.dev/icons?i=python", category: "AI Frameworks", proficiency: 35 },
  { name: "Autogen", logo: "https://skillicons.dev/icons?i=python", category: "AI Frameworks", proficiency: 35 },
  { name: "Git", logo: "https://skillicons.dev/icons?i=git", category: "Tools", proficiency: 85 },
  { name: "VS Code", logo: "https://skillicons.dev/icons?i=vscode", category: "Tools", proficiency: 90 },
  { name: "Postman", logo: "https://skillicons.dev/icons?i=postman", category: "Tools", proficiency: 75 },
  { name: "Figma", logo: "https://skillicons.dev/icons?i=figma", category: "Tools", proficiency: 70 },
  { name: "Docker", logo: "https://skillicons.dev/icons?i=docker", category: "Tools", proficiency: 50 },
  { name: "Linux", logo: "https://skillicons.dev/icons?i=linux", category: "Tools", proficiency: 60 },
];

interface Skill {
  name: string;
  logo: string;
  category: string;
  proficiency: number;
}

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
        >
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-8">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col items-center space-y-2 py-4 px-2"
    >
      <motion.img
        src={skill.logo}
        alt={skill.name}
        className="h-10 w-10 object-contain filter hover:brightness-110"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: index * 0.05, duration: 0.5 }}
      />
      <h4 className="text-xs font-medium text-center text-white/80">{skill.name}</h4>
    </motion.div>
  );
};
