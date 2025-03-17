import { useLanguage } from "@/hooks/useLanguage";
import { languageOptions } from "@/utils/translations";
import { Language } from "@/utils/translations/types";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FC, useState } from "react";
import { clsx } from "clsx";

interface LanguageSwitcherProps {
  variant?: "buttons" | "dropdown";
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ variant = "dropdown" }) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  // Find the current language label
  const currentLanguage = languageOptions.find((option) => option.code === language);

  // Handle language change
  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  // List of buttons to toggle
  if (variant === "buttons") {
    return (
      <div className="px-4 py-3 flex gap-4">
        {languageOptions.map((option) => (
          <motion.button
            name="switch-language"
            type="button"
            role="button"
            aria-pressed={language === option.label}
            aria-label={`Switch to ${option.label}`}
            key={option.code}
            className={`h-10 text-white bg-dark-light/30 hover:bg-dark-light/50 px-3 py-2 rounded-md border border-white/10 ${
              language === option.code
                ? "bg-linear-to-r from-accent-purple/20 to-accent-blue/20 dark:border-white/10 border-border-light border"
                : ""
            }`}
            onClick={() => handleLanguageChange(option.code as Language)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={`/pictures/${option.flag}.webp`} alt={option.label} className="w-auto h-full rounded-md" />
          </motion.button>
        ))}
      </div>
    );
  }

  // Dropdown toggle
  return (
    <div className="sm:block relative">
      <motion.button
        name="switch-language"
        type="button"
        role="button"
        aria-pressed={language === currentLanguage?.label}
        aria-label={`Switch to ${currentLanguage?.label}`}
        className="flex items-center gap-1 h-10 text-text-light  dark:text-white bg-light-foreground/10 shadow-xs hover:bg-light-foreground dark:hover:bg-dark-light/50 px-3 py-2 rounded-md border dark:border-white/10 border-light border-border-light"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src={`/pictures/${currentLanguage?.flag}.webp`} alt={currentLanguage?.label} className="w-auto h-full rounded-sm" />

        <ChevronDown
          data-testid="chevron-icon"
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </motion.button>

      {isOpen && (
        <motion.div
          className="absolute right-0 mt-2 p-1 dark:bg-dark-light/80 backdrop-blur-md border border-white/10 rounded-md shadow-lg z-10 min-w-[120px] w-max"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          role="menu"
        >
          {languageOptions.map((option) => (
            <motion.button
              name="switch-language-option"
              type="button"
              role="button"
              key={option.code}
              className={clsx(
                "w-full flex flex-row items-center px-4 py-2 rounded-sm",
                language === option.code
                  ? "bg-linear-to-r dark:from-accent-purple/20 dark:to-accent-blue/20 from-accent-purple/10 to-accent-blue/10"
                  : ""
              )}
              onClick={() => handleLanguageChange(option.code as Language)}
              whileHover={{ x: 3, backgroundColor: "rgba(255,255,255,0.05)" }}
            >
              <img src={`/pictures/${option.flag}.webp`} alt={option.label} className="w-auto h-6 mr-2" />
              <span className="text-base text-text-light dark:text-white">{option.label}</span>
            </motion.button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
