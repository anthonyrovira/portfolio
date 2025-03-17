import { motion } from "framer-motion";
import { clsx } from "clsx";
import { FC, ReactNode } from "react";

type TabButtonProps = {
  children: ReactNode;
  active: boolean;
  onClick: () => void;
};

const TabButton: FC<TabButtonProps> = ({ children, active, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className={clsx(
        "px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm relative rounded-full shadow-none font-medium transition-colors duration-300",
        active
          ? "dark:text-white text-text-light"
          : "dark:text-white/60 text-text-light_secondary dark:hover:text-white/90 hover:text-text-light_secondary hover:shadow-xl"
      )}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
    >
      {/* Active Tab Background - Glassmorphic with gradient */}
      {active && (
        <motion.div
          className="absolute inset-0 rounded-full bg-linear-to-r dark:from-accent-purple/20 dark:to-accent-blue/20 from-accent-light-purple/30 to-accent-light-blue/30 backdrop-blur-md dark:border-white/10 border-light-border"
          layoutId="activeTab"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}

      {/* Text content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default TabButton;
