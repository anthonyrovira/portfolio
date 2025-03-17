import { FC, useMemo, useState } from "react";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { SkillCategory, SkillItem } from "@/utils/projectsData";
import { clsx } from "clsx";
import { colorGradients } from "@/constants/colors";

type SkillsProps = {
  skills: SkillItem[];
};

const Skills: FC<SkillsProps> = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("frontend");

  const skillCategories: SkillCategory[] = ["frontend", "backend", "database", "devops", "other"];

  const category: SkillItem[] = useMemo(() => {
    return skills.filter((s) => s.category.includes(activeCategory));
  }, [activeCategory]);

  const getCategoryColor = (category: SkillCategory): string => {
    const index = skillCategories.indexOf(category);
    return colorGradients[index];
  };

  return (
    <>
      {/* Category filters */}
      <div className="flex flex-wrap gap-4 sm:gap-6 justify-center mb-12">
        {skillCategories.map((category) => (
          <button
            key={category}
            type="button"
            className={clsx(
              "px-4 sm:px-5 py-2 sm:py-3 capitalize rounded-full text-xs sm:text-sm font-medium transition-colors backdrop-blur-xs shadow-xl",
              activeCategory === category
                ? `bg-gradient-to-br ${getCategoryColor(category)} saturate-50 text-white`
                : "dark:bg-white/5 bg-black/5 dark:border-white/10 border-light-border hover:bg-white/20 text-text-light",
              "flex-shrink-0 min-w-max"
            )}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <motion.div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8" initial="hidden" whileInView="show">
        {category.map((skill) => (
          <SkillCard key={`${skill.id}-${category}`} skill={skill} color={getCategoryColor(activeCategory)} />
        ))}
      </motion.div>
    </>
  );
};

export default Skills;
