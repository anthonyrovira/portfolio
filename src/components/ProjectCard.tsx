import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import GitHub from "@/icons/github.svg?react";
import AnimatedSection, { fadeIn } from "./AnimatedSection";
import { Project } from "@/utils/translations/types";
import Tags from "./Tags";
import { useLanguage } from "@/hooks/useLanguage";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t } = useLanguage();
  const { title, description, imageSrc, tags, demoUrl, repoUrl } = project;

  return (
    <AnimatedSection
      className="relative flex flex-col h-full overflow-hidden rounded-xl dark:bg-dark-light bg-light-card border dark:border-dark-border border-light-border shadow-lg"
      variants={fadeIn("up", 0.2)}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{
        boxShadow: "0 10px 25px -5px rgba(75, 0, 130, 0.3), 0 8px 10px -6px rgba(75, 0, 130, 0.2)",
        y: -5,
      }}
    >
      {/* Card Inner Glow Effect */}
      <div className="absolute -z-10  inset-0 bg-linear-to-br dark:from-accent-purple/5 dark:to-accent-blue/5 from-accent-light-purple/5 to-accent-light-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Project Image */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-linear-to-t dark:from-dark-background from-accent-light-purple/80 to-transparent z-10"
          initial={{ opacity: 0.4 }}
          whileHover={{ opacity: 0.6 }}
          transition={{ duration: 0.3 }}
        />
        <motion.img
          src={imageSrc}
          alt={title}
          className="w-full h-max object-cover"
          initial={{ scale: 1.0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col grow p-5 space-y-3">
        {/* Title */}
        <h3 className="text-xl font-semibold bg-linear-to-r from-accent-purple to-accent-blue text-transparent bg-clip-text">
          {title}
        </h3>

        {/* Description */}
        <p className="dark:text-white/80 text-text-light_secondary text-sm text-pretty text-justify">{description}</p>

        <div className="flex flex-wrap gap-2">
          <Tags tags={tags} />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex border-t dark:border-white/5 border-light-border divide-x dark:divide-white/5 divide-light-border">
        {demoUrl && (
          <motion.a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-wrap items-center justify-center gap-2 flex-1 py-3 text-sm dark:text-white/80 text-text-light_secondary hover:bg-linear-to-r dark:hover:from-accent-purple/20 dark:hover:to-accent-blue/20 hover:from-accent-light-purple/20 hover:to-accent-light-blue/20 transition-colors duration-300 cursor-pointer"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            <ExternalLink size={16} />
            {t.portfolio.viewLive}
          </motion.a>
        )}
        {repoUrl.map((repository, index) => (
          <motion.a
            key={index}
            href={repository}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-wrap items-center justify-center gap-2 flex-1 py-3 text-sm dark:text-white/80 text-text-light_secondary hover:bg-linear-to-r dark:hover:from-accent-purple/20 dark:hover:to-accent-blue/20 hover:from-accent-light-purple/20 hover:to-accent-light-blue/20 transition-colors duration-300 cursor-pointer"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            <GitHub className="w-4 h-4" />
            {repoUrl.length > 1 ? (index === 0 ? "Frontend" : "Backend") : "GitHub"}
          </motion.a>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default ProjectCard;
