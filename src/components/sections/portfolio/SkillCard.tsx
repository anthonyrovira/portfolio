import { motion } from "framer-motion";
import { SkillItem } from "../../../utils/projectsData";
import AnimatedSection, { fadeIn } from "../../ui/animations/AnimatedSection";
import { clsx } from "clsx";

type SkillCardProps = {
  skill: SkillItem;
  color: string;
};

const SkillCard: React.FC<SkillCardProps> = ({ skill, color }) => {
  const { name, imageSrc, proficiency } = skill;

  return (
    <AnimatedSection
      className="relative group flex flex-col h-full overflow-hidden rounded-xl dark:bg-dark-light bg-light-card border dark:border-dark-border border-light-border shadow-lg"
      variants={fadeIn("up", 0.2)}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{
        boxShadow: "0 10px 25px -5px rgba(75, 0, 130, 0.3), 0 8px 10px -6px rgba(75, 0, 130, 0.2)",
        y: -5,
      }}
    >
      {/* Content */}
      <div className="flex flex-col items-center justify-center p-6 space-y-4 z-10">
        <motion.div className="relative w-16 h-16 z-0 flex items-center justify-center " whileHover="hover">
          {/* Glowing Orb */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-purple to-accent-blue blur-lg "
            variants={{
              hover: { scale: 1.2, opacity: 1 },
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Tech Logo */}
          <motion.div
            className="relative z-10 p-1 rounded-full backdrop-opacity-0 backdrop-blur-lg"
            variants={{
              hover: { scale: 1.05 },
            }}
            transition={{ duration: 0.2 }}
          >
            <img src={imageSrc} alt={name} className="w-full h-full object-contain" />
          </motion.div>
        </motion.div>

        {/* Tech Name */}
        <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-accent-purple to-accent-blue text-center z-10">
          {name}
        </h3>

        {/* Proficiency Level */}
        <div className="flex space-x-2 justify-center">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={clsx(
                "w-3 h-3 rounded-full transition-colors duration-300",
                i < proficiency ? `bg-gradient-to-br ${color}` : "bg-gray-700/30"
              )}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default SkillCard;
