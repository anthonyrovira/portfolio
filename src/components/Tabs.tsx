import { Dispatch, FC, SetStateAction } from "react";
import AnimatedSection, { fadeIn } from "./AnimatedSection";
import TabButton from "./TabButton";
import { PortfolioTab } from "@/utils/translations/types";
import { useLanguage } from "@/hooks/useLanguage";

type TabsProps = {
  activeTab: PortfolioTab;
  setActiveTab: Dispatch<SetStateAction<PortfolioTab>>;
};

const Tabs: FC<TabsProps> = ({ activeTab, setActiveTab }) => {
  const { t } = useLanguage();

  return (
    <AnimatedSection className="flex justify-center mb-12" variants={fadeIn("up", 0.2)}>
      <div className="relative px-1 py-1 rounded-full backdrop-blur-xs dark:bg-white/5 bg-black/5 dark:border-white/10 border-light-border shadow-xl overflow-hidden min-w-fit">
        {/* Background Glassmorphic Effect */}
        <div className="absolute inset-0 bg-linear-to-r dark:from-accent-purple/10 dark:to-accent-blue/10 from-accent-light-purple/10 to-accent-light-blue/10 opacity-30" />

        {/* Tab Buttons */}
        <div className="relative z-10 flex space-x-2 sm:space-x-4 whitespace-nowrap">
          <TabButton active={activeTab === "projects"} onClick={() => setActiveTab("projects")}>
            {t.portfolio.tabs.projects.tabName}
          </TabButton>

          <TabButton active={activeTab === "career"} onClick={() => setActiveTab("career")}>
            {t.portfolio.tabs.career.tabName}
          </TabButton>

          <TabButton active={activeTab === "skills"} onClick={() => setActiveTab("skills")}>
            {t.portfolio.tabs.skills.tabName}
          </TabButton>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Tabs;
