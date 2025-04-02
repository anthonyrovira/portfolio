import { useLanguage } from "@/hooks/useLanguage";
import SocialLinksIcons from "../ui/common/SocialLinksIcons";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="w-full py-8 px-4 sm:px-6 bg-light-card/85 dark:bg-dark-light border-t shadow-lg border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="mb-4 md:mb-0">
          <p className="text-base text-pretty text-center md:text-left text-text-light dark:text-white/70">
            {t.footer.copyright}
          </p>
        </div>

        <SocialLinksIcons />
      </div>
    </footer>
  );
};

export default Footer;
