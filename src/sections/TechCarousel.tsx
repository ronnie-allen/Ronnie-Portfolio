import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContent } from "../context/ContentContext";

const CATEGORY_COLORS: Record<string, string> = {
  Frontend: "#EF4444",
  Backend: "#06B6D4",
  Mobile: "#22C55E",
  "AI/ML": "#A855F7",
  "AI Frameworks": "#F59E0B",
  Tools: "#3B82F6",
};

export const TechCarousel = () => {
  const { content } = useContent();
  const { skills } = content;
  const [activeCategory, setActiveCategory] = useState("All");
  const scrollRef = useRef<HTMLDivElement>(null);

  const categories = useMemo(() => ["All", "Frontend", "Backend", "Mobile", "AI/ML", "AI Frameworks", "Tools"], []);

  const filteredSkills = useMemo(() => {
    if (activeCategory === "All") return skills;
    return skills.filter((s) => s.category === activeCategory);
  }, [skills, activeCategory]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <section className="py-16 px-4 sm:px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-10 text-red-500"
        >
          Technologies & Skills
        </motion.h2>

        {/* Category pills */}
        <div ref={scrollRef} className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide justify-start lg:justify-center">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            const color = category === "All" ? "#ffffff" : CATEGORY_COLORS[category];

            return (
              <motion.button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className="relative shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                style={{
                  backgroundColor: isActive ? `${color}20` : "rgba(255,255,255,0.05)",
                  color: isActive ? color : "rgba(255,255,255,0.6)",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ border: `1px solid ${color}40` }}
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
                {category}
              </motion.button>
            );
          })}
        </div>

        {/* Skill grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const color = CATEGORY_COLORS[skill.category] || "#ffffff";

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex flex-col items-center gap-3 p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.07] hover:border-white/20 transition-colors group"
                  style={{ borderLeftColor: color, borderLeftWidth: 2 }}
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="h-10 w-10 sm:h-12 sm:w-12 object-contain group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="text-xs sm:text-sm font-medium text-white/80 text-center leading-tight">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
