import { Experience } from "@/utils/translations/types";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import Tags from "./Tags";
import { colorGradients } from "@/constants/colors";
import { clsx } from "clsx";
import { useLanguage } from "@/hooks/useLanguage";

const TimelineCard = ({ experience, isLeft, index }: { experience: Experience; isLeft: boolean; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString(t.reusables.locale, {
      year: "numeric",
      month: "short",
    });
  };

  const color = colorGradients[index % colorGradients.length];

  //  ${color} opacity-50 group-hover:opacity-70 dark:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 50,
        transition: { duration: 0.5, delay: 0.2 },
      }}
      className={clsx("w-full", index % 2 === 0 ? "lg:translate-y-0" : "lg:translate-y-72")}
    >
      <div className={clsx("relative w-full max-w-full group", index % 2 === 0 ? "self-end" : "self-start")}>
        {/* Timeline dot */}
        <motion.div
          className={clsx(
            "absolute hidden lg:block top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-br saturate-40 shadow-lg z-10",
            color,
            isLeft ? "right-[-45px]" : "left-[-43px]"
          )}
          initial={{ top: 0 }}
          animate={{ top: "50%" }}
          transition={{ duration: 1 }}
        />

        {/* Card container */}
        <motion.div
          initial={{ scale: 1, opacity: 0.7 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={clsx(
            "relative w-full backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-white/5 shadow-lg hover:shadow-2xl",
            isLeft ? "ml-auto" : "mr-auto"
          )}
        >
          {/* Gradient overlay */}
          <div
            className={clsx(
              // "absolute inset-0 bg-gradient-to-br opacity-25 dark:opacity-10 roup-hover:opacity-20 transition-opacity duration-300 rounded-2xl",
              "absolute inset-0 bg-gradient-to-br opacity-50 group-hover:opacity-70 dark:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300 rounded-2xl",
              color
            )}
          />

          {/* Content */}
          <div className="relative z-10 space-y-2 sm:space-y-4">
            {/* Company info */}
            <div className="flex items-center space-x-4">
              <a
                href={experience.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit max-w-32 h-10 sm:h-14 rounded-md p-1.5 sm:p-3 bg-white flex items-center justify-center sm:hover:p-1 transition-colors duration-500"
              >
                <img src={experience.imageSrc} alt={experience.company} className="w-full h-full object-contain" />
              </a>
              <div>
                <div className="text-lg font-bold text-text-light tracking-wide dark:text-gray-200 transition-colors">
                  {experience.company}
                </div>
                <div className="text-base text-text-light_secondary dark:text-gray-400">{experience.position}</div>
              </div>
            </div>

            {/* Dates */}
            <div className="flex items-center space-x-2 text-text-light_secondary dark:text-gray-400 text-sm uppercase">
              <span>{formatDate(experience.startDate)}</span>
              <span className="w-3 h-0.5 rounded-full bg-gray-500" />
              <span>{formatDate(experience.endDate)}</span>
            </div>

            {/* Description */}
            <p className="text-text-light dark:text-gray-300 text-pretty text-justify text-base">{experience.description}</p>

            {/* Bullet points */}
            <ul className="space-y-1">
              {experience.bulletPoints.map((point, i) => (
                <li key={i} className="flex items-start ">
                  <span className={`min-w-2 min-h-2 mt-2 mr-2 bg-gradient-to-br ${color} saturate-40 rounded-sm`} />
                  <span className="text-base text-pretty text-text-light dark:text-gray-300 ">{point}</span>
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 grow">
              <Tags tags={experience.tags} />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TimelineCard;
