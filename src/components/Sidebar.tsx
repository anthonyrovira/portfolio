import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { GalleryHorizontalEnd, House, Send, UserRoundSearch } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import SocialLinksIcons from "./SocialLinksIcons";
import { useLanguage } from "@/hooks/useLanguage";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [activeLink, setActiveLink] = useState("");

  // Close the sidebar when screen size becomes desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        onClose();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [onClose]);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && !target.closest(".sidebar") && !target.closest(".sidebar-toggle")) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const menuItems = [
    { id: "home", title: t.navbar.home, Icon: House, section: "home" },
    { id: "about", title: t.navbar.about, Icon: UserRoundSearch, section: "about" },
    { id: "portfolio", title: t.navbar.portfolio, Icon: GalleryHorizontalEnd, section: "portfolio" },
    { id: "contact", title: t.navbar.contact, Icon: Send, section: "contact" },
  ];

  const handleNavigation = (sectionId: string) => {
    setActiveLink(sectionId);
    onClose();

    // Scroll to section if it exists
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-40 lg:hidden"
              onClick={onClose}
            />

            {/* Sidebar */}
            <motion.div
              className="sidebar fixed left-0 top-0 bottom-0 w-64 dark:bg-dark-background bg-light-background z-50 shadow-xl lg:hidden"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="p-6 bg-linear-to-r dark:from-accent-purple/10 dark:to-accent-blue/10 from-accent-light-purple/5 to-accent-light-blue/5 backdrop-blur-xs border-b dark:border-white/10 border-light-border">
                  <h2 className="text-xl font-bold dark:text-white text-text-light">
                    Anthony{" "}
                    <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">Rovira</span>
                  </h2>
                </div>

                {/* Menu Items */}
                <div className="flex-1 py-6 overflow-y-auto">
                  <ul className="space-y-1 px-2">
                    {menuItems.map(({ id, title, Icon, section }) => (
                      <motion.li key={id} whileTap={{ scale: 0.95 }}>
                        <button
                          onClick={() => handleNavigation(section)}
                          className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors duration-200 ${
                            activeLink === id
                              ? "bg-linear-to-r from-accent-purple/20 to-accent-blue/20 dark:border-white/10 border-border-light border"
                              : "dark:hover:bg-white/5 hover:bg-light-foreground"
                          }`}
                        >
                          <Icon
                            className={`text-xl mr-3 ${
                              activeLink === id ? "text-accent-purple" : "dark:text-white text-text-light"
                            }`}
                          />
                          <span
                            className={`${
                              activeLink === id
                                ? "bg-linear-to-r from-accent-purple to-accent-blue text-transparent bg-clip-text font-medium"
                                : "dark:text-white text-text-light"
                            }`}
                          >
                            {title}
                          </span>
                        </button>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Language Switcher */}
                  <div className="mt-6 px-2">
                    <h3 className="dark:text-white/70 text-text-light/70 text-sm px-4 mb-2">{t.navbar.language}</h3>
                    <div className="space-y-1">
                      <LanguageSwitcher variant="buttons" />
                    </div>
                  </div>

                  {/* Theme Toggler */}
                  <div className="mt-6 px-2">
                    <h3 className="dark:text-white/70 text-text-light/70 text-sm px-4 mb-2">{t.navbar.theme || "Theme"}</h3>
                    <div className="px-4 py-3">
                      <ThemeToggle variant="buttons" />
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t dark:border-white/10 border-light-border bg-linear-to-r dark:from-accent-purple/10 dark:to-accent-blue/10 from-accent-light-purple/5 to-accent-light-blue/5 backdrop-blur-xs">
                  <SocialLinksIcons />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
