import GitHub from "@/icons/github.svg?react";
import LinkedIn from "@/icons/linkedin.svg?react";
import X from "@/icons/x.svg?react";

const SocialLinksIcons = () => {
  return (
    <div className="flex items-center justify-center space-x-8">
      <a
        href="https://www.linkedin.com/in/anthonyrovira/"
        target="_blank"
        rel="noopener noreferrer"
        role="link"
        aria-label="LinkedIn"
        className="text-text-light dark:text-white/50 hover:text-text-light_secondary dark:hover:text-white transition-colors duration-300"
      >
        <LinkedIn className="w-5 h-5" />
      </a>
      <a
        href="https://github.com/anthonyrovira"
        target="_blank"
        rel="noopener noreferrer"
        role="link"
        aria-label="GitHub"
        className="text-text-light dark:text-white/50 hover:text-text-light_secondary dark:hover:text-white transition-colors duration-300"
      >
        <GitHub className="w-5 h-5" />
      </a>
      <a
        href="https://x.com/AnthonyRoviraJS"
        target="_blank"
        rel="noopener noreferrer"
        role="link"
        aria-label="X"
        className="text-text-light dark:text-white/50 hover:text-text-light_secondary dark:hover:text-white transition-colors duration-300"
      >
        <X className="w-5 h-5" />
      </a>
    </div>
  );
};

export default SocialLinksIcons;
