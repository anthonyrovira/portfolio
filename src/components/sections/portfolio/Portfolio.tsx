import { useState } from "react";
import ProjectCard from "./ProjectCard";
import AnimatedSection, { fadeIn } from "../../ui/animations/AnimatedSection";
import { Sparkles } from "lucide-react";
import { PortfolioTab } from "@/utils/translations/types";
import Skills from "./Skills";
import Tabs from "./Tabs";
import { useLanguage } from "@/hooks/useLanguage";
import CareerTimeline from "./CareerTimeline";

const Portfolio = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<PortfolioTab>("projects");

  const { content: projects } = t.portfolio.tabs.projects;
  const { content: experiences } = t.portfolio.tabs.career;
  const { content: skills } = t.portfolio.tabs.skills;

  return (
    <AnimatedSection
      as="section"
      id="portfolio"
      className="w-full min-h-screen py-16 sm:py-20 relative"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Background Elements */}
      <div className="absolute -z-10 top-0 inset-x-0 h-24 bg-linear-to-b dark:from-dark-light dark:to-dark-background from-[#a855f7]/10 via-[#6366f1]/10 to-white/50 transition-colors duration-500 ease-in-out" />
      <div className="absolute -z-10 bottom-0 inset-x-0 h-24 bg-linear-to-t dark:from-dark-light dark:to-dark-background from-[#a855f7]/10 via-[#6366f1]/10 to-white/50 transition-colors duration-500 ease-in-out" />

      {/* Floating particle orbs - decorative elements */}
      {/* <Orbs /> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-10 my-20 sm:mt-8 md:mt-12">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-10 flex flex-col items-center" variants={fadeIn("down", 0.1)}>
          <h2 className="text-4xl font-bold dark:text-white text-text-light_secondary mb-4">
            {t.portfolio.title.split("folio")[0]}
            <span className="bg-linear-to-r from-accent-purple to-accent-blue text-transparent bg-clip-text">
              {t.portfolio.title.split(" ")[1] || "folio"}
            </span>
          </h2>
          <div className="flex items-center gap-2 ">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <p className="dark:text-white/70 text-pretty text-center mx-auto text-text-light_secondary text-base sm:text-lg break-words max-w-3xs sm:max-w-lg md:max-w-2xl">
              {t.portfolio.tabs[activeTab].subtitle}
            </p>
            <Sparkles className="w-5 h-5 text-purple-400" />
          </div>
        </AnimatedSection>

        {/* Tabs */}
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Projects Tab */}
        {activeTab === "projects" && (
          <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatedSection>
        )}
        {/* Career Tab */}
        {activeTab === "career" && <CareerTimeline experiences={experiences} />}
        {/* Skills Tab */}
        {activeTab === "skills" && <Skills skills={skills} />}
      </div>
    </AnimatedSection>
  );
};

export default Portfolio;
