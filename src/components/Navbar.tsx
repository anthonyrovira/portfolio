import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import AnimatedSection, { fadeIn } from "./AnimatedSection";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/hooks/useLanguage";

interface NavbarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export function Navbar({ isSidebarOpen, toggleSidebar }: NavbarProps) {
  // Using the shared state from App component instead of local state
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      id: "home",
      title: t.navbar.home,
    },
    {
      id: "about",
      title: t.navbar.about,
    },
    {
      id: "portfolio",
      title: t.navbar.portfolio,
    },
    {
      id: "contact",
      title: t.navbar.contact,
    },
  ];

  return (
    <nav
      className={`w-full flex items-center py-5 fixed top-0 z-30 ${
        scrolled ? "dark:bg-dark-background/85 bg-light-background/85 backdrop-blur-md shadow-lg" : "bg-transparent"
      } transition-colors duration-300`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variants={fadeIn("right", 0)} animate="show" className="flex items-center gap-1">
          <motion.button
            className="flex items-center gap-1 px-3 py-1 rounded-md -ml-2.5"
            onClick={() => {
              const element = document.getElementById("home");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="AR-dark.png" alt="AR Logo" className="w-10 md:w-12 h-auto" />
          </motion.button>
        </AnimatedSection>

        {/* Desktop Navigation */}
        <AnimatedSection
          className="list-none hidden sm:flex sm:flex-row gap-6 items-center"
          variants={fadeIn("left", 0.1)}
          animate="show"
        >
          {navLinks.map((link) => (
            <motion.li
              key={link.id}
              className="dark:text-white text-text-light text-md md:text-base font-medium cursor-pointer hover:bg-linear-to-r hover:text-transparent dark:hover:text-transparent hover:from-accent-purple hover:to-accent-blue hover:bg-clip-text "
              onClick={() => {
                const element = document.getElementById(link.id);
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.title}
            </motion.li>
          ))}
          <div className="flex items-center gap-3">
            <ThemeToggle variant="icon" />
            <LanguageSwitcher variant="dropdown" />
          </div>
        </AnimatedSection>

        {/* Mobile Navigation - Sidebar Toggle */}
        <div className="sm:hidden p-1 mr-3 flex justify-end items-center">
          <motion.div
            className="w-8 h-8 cursor-pointer z-20 flex items-center justify-center"
            onClick={toggleSidebar}
            whileTap={{ scale: 0.9 }}
          >
            {isSidebarOpen ? (
              <HiX className="text-text-light_secondary dark:text-white text-3xl" />
            ) : (
              <HiMenu className="text-text-light_secondary dark:text-white text-3xl" />
            )}
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
