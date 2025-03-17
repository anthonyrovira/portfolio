import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import useTheme from "@/hooks/useTheme";
import { Theme } from "@/providers/ThemeProvider";

interface ThemeToggleProps {
  variant?: "icon" | "buttons";
}

const ThemeToggle: FC<ThemeToggleProps> = ({ variant = "dropdown" }) => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t } = useLanguage();

  const dataThemes = [
    {
      id: "dark",
      title: t.reusables.themeOptions.dark,
      Icon: Moon,
    },
    {
      id: "light",
      title: t.reusables.themeOptions.light,
      Icon: Sun,
    },
  ];

  // Get the icon based on the current theme
  const getIcon = () => {
    switch (theme) {
      case "dark":
        return <Moon className="h-5 w-5" />;
      case "light":
        return <Sun className="h-5 w-5" />;
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && !target.closest(".theme-toggle")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Icon-only toggle that cycles through themes
  if (variant === "icon") {
    return (
      <motion.button
        className="hidden sm:flex h-10 w-10 items-center justify-center rounded-md border dark:border-white/10 border-light border-border-light dark:text-white text-amber-500 dark:hover:bg-dark-light/50 bg-light-foreground/10 shadow-xs hover:bg-light-foreground"
        onClick={() => {
          const nextTheme = theme === "dark" ? "light" : "dark";
          setTheme(nextTheme);
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle theme"
      >
        {getIcon()}
      </motion.button>
    );
  }

  return (
    // List of two icons buttons (dark/light)
    <div className="flex gap-2">
      {dataThemes.map((data) => (
        <motion.button
          key={data.id}
          className={`h-10 w-10 flex items-center justify-center text-white bg-dark-light/30 hover:bg-dark-light/50 rounded-md border border-white/10 ${
            theme === data.id
              ? "bg-linear-to-r from-accent-purple/20 to-accent-blue/20 dark:border-white/10 border-border-light border"
              : ""
          }`}
          onClick={() => setTheme(data.id as Theme)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={data.title}
        >
          <data.Icon className="w-5 h-5" />
        </motion.button>
      ))}
    </div>
  );
};

export default ThemeToggle;
