import { BriefcaseBusiness, Award, Languages } from "lucide-react";
import { useMemo } from "react";
import AnimatedSection, { fadeIn } from "../../ui/animations/AnimatedSection";
import { AboutCardType } from "@/utils/translations/types";
import { colorGradients } from "@/constants/colors";
import { useLanguage } from "@/hooks/useLanguage";
import { clsx } from "clsx";

type CardProps = {
  type: AboutCardType;
  animationDelay: number;
};

const AboutCard = ({ type, animationDelay }: CardProps) => {
  const { t } = useLanguage();

  const overallYearsOfExperience = useMemo(() => {
    const amountOfJobs = t.about.cards.experience.jobs.length;
    const startDate = new Date(t.about.cards.experience.jobs[amountOfJobs - 1].startDate);
    const today = new Date();

    return (
      today.getFullYear() -
      startDate.getFullYear() -
      (today < new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate()) ? 1 : 0)
    );
  }, [t.about.cards.experience.jobs]);

  const jobsYearsOfExperience: number[] = useMemo(() => {
    const { jobs } = t.about.cards.experience;
    const yearsOfExperience: number[] = [];

    jobs.forEach((job) => {
      const startDate = new Date(job.startDate);
      const endDate = job.endDate ? new Date(job.endDate) : new Date();
      const years = endDate.getFullYear() - startDate.getFullYear();
      yearsOfExperience.push(years);
    });

    return yearsOfExperience;
  }, [t.about.cards.experience]);

  const colorMap: Record<AboutCardType, string> = {
    experience: colorGradients[0],
    education: colorGradients[1],
    languages: colorGradients[2],
  };
  const color = colorMap[type];

  return (
    <AnimatedSection variants={fadeIn("up", animationDelay)} className="group h-full">
      <div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-5 border border-white/10 overflow-hidden transition-colors duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-start">
        <div
          className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-50 group-hover:opacity-70 dark:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300`}
        />

        {type === "experience" && (
          <>
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6 mr-4">
                <BriefcaseBusiness className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm uppercase tracking-wider text-white dark:text-gray-300">
                {`+ ${overallYearsOfExperience} `}
                {t.about.cards[type].title}
              </p>
            </div>
            <ul className="flex flex-col gap-3">
              {t.about.cards.experience.jobs.map((job, index) => (
                <li
                  key={index}
                  className={clsx(
                    "flex items-center justify-between space-x-2 p-2 rounded-lg",
                    index === 0
                      ? "bg-linear-to-r from-accent-purple/20 to-accent-blue/20 dark:border-white/10 border-border-light border"
                      : "bg-white/5"
                  )}
                >
                  <span
                    className={`text-sm flex-grow text-pretty ${
                      index === 0 ? "text-white dark:text-gray-200" : "text-white dark:text-gray-300 "
                    }`}
                  >
                    {job.jobTitle}
                  </span>
                  <span
                    className={`text-sm min-w-max text-end ${
                      index === 0 ? "text-white dark:text-gray-300" : "text-white dark:text-gray-400 "
                    }`}
                  >{`${jobsYearsOfExperience[index]} ${t.reusables.years}`}</span>
                </li>
              ))}
            </ul>
          </>
        )}

        {type === "education" && (
          <>
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6 mr-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm uppercase tracking-wider text-white dark:text-gray-300">{t.about.cards[type].title}</p>
            </div>
            <ul className="flex flex-col gap-3">
              {t.about.cards.education.degrees.map((degree, index) => (
                <li key={index} className="flex items-center space-x-2 bg-white/5 p-2 rounded-lg">
                  <div className="flex flex-col gap-1 w-full">
                    <div className="w-full flex justify-between items-center">
                      <span className="text-sm font-semibold text-white dark:text-gray-300">{degree.school}</span>
                      <span className="text-sm text-end text-white dark:text-gray-400">{degree.date}</span>
                    </div>
                    <div className="flex flex-col mt-1">
                      <span className="text-sm text-pretty text-white dark:text-gray-300">{degree.description}</span>
                      <span className="text-sm text-pretty text-white dark:text-gray-300">{degree.score}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}

        {type === "languages" && (
          <>
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6 mr-4">
                <Languages className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm uppercase tracking-wider text-white dark:text-gray-300">
                {t.about.cards.languages.list.length}
                &nbsp;
                {t.about.cards[type].title}
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {t.about.cards.languages.list.map((language, index) => (
                <li key={index} className="flex items-center space-x-2 bg-white/5 p-2 rounded-lg">
                  <img src={`/pictures/${language.flag}.webp`} alt={language.name} className="w-6 h-6 rounded-sm" />
                  <span className="text-sm text-white dark:text-gray-300 flex-grow">{language.name}</span>
                  <span className="text-sm text-white dark:text-gray-400 text-end">{language.level}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </AnimatedSection>
  );
};

export default AboutCard;
