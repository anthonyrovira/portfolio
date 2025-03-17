import AnimatedSection, { fadeIn } from "./AnimatedSection";
import PP from "/pictures/pp.webp";
import { Download, Sparkles } from "lucide-react";
import AboutCard from "./AboutCard";
import { AboutCardType } from "@/utils/translations/types";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();

  const cardsTypes = Object.keys(t.about.cards) as AboutCardType[];

  return (
    <AnimatedSection
      as="section"
      id="about"
      className="w-full min-h-screen py-16 sm:py-20 relative"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* Background Elements */}
      <div className="absolute -z-10 inset-0 dark:bg-[radial-gradient(circle_at_30%_20%,rgba(145,94,255,0.1),transparent_45%)] bg-[radial-gradient(circle_at_30%_20%,rgba(107,79,209,0.05),transparent_45%)]" />
      <div className="absolute -z-10 inset-0 dark:bg-[radial-gradient(circle_at_70%_80%,rgba(0,216,255,0.1),transparent_45%)] bg-[radial-gradient(circle_at_70%_80%,rgba(76,138,236,0.05),transparent_45%)]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 mt-20 sm:mt-8 md:mt-12">
        <AnimatedSection variants={fadeIn("down", 0)} className="text-center mb-2">
          <h2 className="text-4xl sm:text-5xl font-bold dark:text-white text-text-light_secondary mb-4">
            {t.about.title}
            <span className="bg-linear-to-r from-accent-purple to-accent-blue text-transparent bg-clip-text">
              &nbsp;{t.about.titleHighlight}
            </span>
          </h2>
        </AnimatedSection>

        <AnimatedSection
          variants={fadeIn("down", 0.2)}
          className="max-w-full mx-auto flex flex-col items-center mt-2 mb-4 sm:mb-10 gap-2"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <p className="text-pretty text-center text-text-light_secondary dark:text-gray-400 text-base sm:text-lg break-words max-w-3xs sm:max-w-lg md:max-w-xl">
              {t.about.subtitle}
            </p>
            <Sparkles className="w-5 h-5 text-purple-400" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-8 items-center">
          {/* Profile Picture */}
          <AnimatedSection variants={fadeIn("right", 0.3)} className="md:col-span-2 flex justify-center md:justify-start">
            <div className="relative w-48 h-48 sm:w-58 sm:h-58">
              <div className="absolute inset-0 h-fit flex items-center justify-center z-10 rounded-full bg-linear-to-br dark:from-accent-purple/30 dark:to-accent-blue/30 from-accent-light-purple/30 to-accent-light-blue/30 backdrop-blur-xs border dark:border-white/10 border-light-border shadow-xl">
                <img src={PP} alt="My personal picture" className="w-fit h-fit" />
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 h-full rounded-full bg-linear-to-br dark:from-accent-purple dark:to-accent-blue from-accent-light-purple to-accent-light-blue opacity-20 blur-xl animate-pulse" />
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection variants={fadeIn("left", 0.4)} className="md:col-span-6 sm: ml-0 md:ml-10 text-center md:text-left">
            <h3 className="text-3xl font-bold dark:text-white text-text-light_secondary mb-2">
              Anthony <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">Rovira</span>
            </h3>
            <h4 className="text-xl bg-linear-to-r from-accent-purple to-accent-blue text-transparent bg-clip-text font-semibold mb-6">
              {t.about.job}
            </h4>

            <p className="text-pretty text-justify dark:text-primary-foreground text-primary-light-foreground text-base mb-8">
              {t.about.description}
            </p>
          </AnimatedSection>

          {/* Resume Download button */}
          <AnimatedSection
            variants={fadeIn("down", 0.5)}
            className="md:col-span-8 mx-auto flex justify-center md:justify-start mt-2 md:mt-4 "
          >
            <a
              href={t.about.cv.url}
              download="Anthony Rovira - Resume.pdf"
              className="flex gap-3 items-center h-12 bg-linear-to-r dark:from-[#6366f1] dark:to-[#a855f7] from-accent-light-purple to-accent-light-blue text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-purple-500/25 transition-colors duration-300 transform hover:scale-105"
            >
              <Download className="w-5 h-5" />
              {t.about.cv.buttonText}
            </a>
          </AnimatedSection>
        </div>

        {/* Cards */}
        <div className="h-full mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-3 mx-auto md:px-20 lg:px-0 gap-6">
          {cardsTypes.map((cardType, index) => (
            <AboutCard type={cardType} key={cardType} animationDelay={index * 0.4} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
