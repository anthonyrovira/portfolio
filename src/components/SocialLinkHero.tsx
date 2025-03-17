import { type SocialLink as SocialLinkHero } from "@/constants/social";
import { memo } from "react";
import GiHub from "@/icons/github.svg?react";
import LinkedIn from "@/icons/linkedin.svg?react";
import X from "@/icons/x.svg?react";

const SocialLinkHero = memo(({ icon, link }: SocialLinkHero) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <button className="group relative p-3 cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300" />
      <div className="relative rounded-xl text-text-light  dark:text-white bg-light-foreground/10 shadow-xs hover:bg-light-foreground dark:hover:bg-dark-light/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 transition-colors duration-300">
        {icon === "linkedin" && (
          <LinkedIn className="w-5 h-5 sm:w-6 sm:h-6 text-text-light_secondary group-hover:text-accent-purple dark:text-gray-400 dark:group-hover:text-white" />
        )}
        {icon === "github" && (
          <GiHub className="w-5 h-5 sm:w-6 sm:h-6 text-text-light_secondary group-hover:text-accent-purple dark:text-gray-400 dark:group-hover:text-white" />
        )}
        {icon === "x" && (
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-text-light_secondary group-hover:text-accent-purple dark:text-gray-400 dark:group-hover:text-white" />
        )}
      </div>
    </button>
  </a>
));

export default SocialLinkHero;
