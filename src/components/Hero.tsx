import AnimatedSection, { fadeIn, zoomIn } from "./AnimatedSection";
import StatusBadge from "./StatusBadge";
import { SOCIAL_LINKS } from "@/constants/social";
import SocialLinkHero from "./SocialLinkHero";
import { useCallback, useEffect, useState } from "react";
import { GalleryHorizontalEnd, Send } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const TYPING_SPEED = 100 as const;
const ERASING_SPEED = 50 as const;
const PAUSE_DURATION = 2000 as const;

const Hero = () => {
  const { t } = useLanguage();
  const [text, setText] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);

  // Optimize typing effect
  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < t.hero.roles[wordIndex].length) {
        setText((prev) => prev + t.hero.roles[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else if (charIndex > 0) {
      setText((prev) => prev.slice(0, -1));
      setCharIndex((prev) => prev - 1);
    } else {
      setWordIndex((prev) => (prev + 1) % t.hero.roles.length);
      setIsTyping(true);
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(handleTyping, isTyping ? TYPING_SPEED : ERASING_SPEED);
    return () => clearTimeout(timeout);
  }, [handleTyping]);

  return (
    <section id="home" className="relative w-full h-screen mx-auto overflow-hidden flex items-center">
      {/* Background gradients */}
      <div className="absolute -z-10 inset-0 bg-linear-to-b dark:from-dark-background dark:via-dark-light dark:to-dark-background from-[#6366f1]/80 via-[#a855f7]/30 to-[#6366f1]/80 opacity-30" />
      <div className="absolute -z-10 inset-0 dark:bg-[radial-gradient(circle_at_center,rgba(145,94,255,0.15),transparent_70%)] bg-[radial-gradient(circle_at_center,rgba(107,79,209,0.1),transparent_70%)]" />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full absolute inset-0 max-w-7xl flex flex-row items-start justify-center gap-5">
        <div className="w-full h-full flex flex-row justify-center items-center mt-auto">
          {/* Main hero content */}
          <AnimatedSection
            variants={fadeIn("down", 0.2)}
            className="w-auto lg:w-full flex flex-col p-3 sm:p-0 gap-mobile"
            viewport={{ once: true }}
          >
            <StatusBadge />
            <h1 className="flex flex-col text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
              <span className="relative w-max">
                <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20" />
                <span className="relative bg-gradient-to-r dark:from-white dark:via-blue-100 dark:to-purple-200 text-text-light_secondary bg-clip-text dark:text-transparent">
                  Anthony
                </span>
              </span>
              <span className="relative w-max mt-2">
                <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20" />
                <span className="relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                  Rovira
                </span>
              </span>
            </h1>

            {/* Typing Effect */}
            <div className="h-8 flex items-center" data-aos="fade-up">
              <span className="sm:text-xl md:text-2xl bg-gradient-to-r dark:from-gray-100 dark:to-gray-300 bg-clip-text dark:text-transparent text-text-light_secondary font-light">
                {text}
              </span>
              <span className="w-1 h-6 bg-gradient-to-t from-[#6366f1] to-[#a855f7] ml-1 animate-blink" />
            </div>

            <p className="dark:text-primary-foreground text-primary-light-foreground text-pretty md:text-lg text-base max-w-lg">
              {t.hero.description}
            </p>

            {/* Social Links */}
            <AnimatedSection variants={fadeIn("up", 0.3)} className="flex gap-4" viewport={{ once: true }}>
              {SOCIAL_LINKS.map((link) => (
                <SocialLinkHero key={link.icon} {...link} />
              ))}
            </AnimatedSection>

            <div className="flex flex-wrap items-center gap-6 sm:gap-4">
              {/* CTA Button Primary */}
              <AnimatedSection variants={fadeIn("up", 0.4)} className="flex" viewport={{ once: true }}>
                <button
                  onClick={() => {
                    const element = document.getElementById("portfolio");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  type="button"
                  name="view-portfolio"
                  className="flex gap-3 items-center h-10 sm:h-12 py-3 px-6 sm:px-8 text-sm sm:text-base bg-linear-to-r dark:from-[#6366f1] dark:to-[#a855f7] from-accent-light-purple to-accent-light-blue text-white font-bold rounded-full shadow-lg hover:shadow-purple-500/25 transition-colors duration-300 transform hover:scale-105"
                >
                  <GalleryHorizontalEnd className="w-5 h-5" />
                  {t.hero.ctaButtonPrimary}
                </button>
              </AnimatedSection>

              {/* CTA Button Secondary */}
              <AnimatedSection variants={fadeIn("up", 0.5)} className="flex" viewport={{ once: true }}>
                <div className="p-0.5 bg-linear-to-r dark:from-accent-purple dark:to-accent-blue from-accent-light-purple to-accent-light-blue rounded-full shadow-lg hover:shadow-purple-500/25 transition-colors duration-300 transform hover:scale-105">
                  <button
                    onClick={() => {
                      const element = document.getElementById("contact");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    type="button"
                    name="contact-me"
                    className="w-full h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-base bg-white text-text-light_secondary dark:bg-dark-background dark:text-white font-bold rounded-full flex items-center justify-center gap-3"
                  >
                    <Send className="w-5 h-5" />
                    {t.hero.ctaButtonSecondary}
                  </button>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>

          {/* Illustration */}
          <AnimatedSection
            variants={zoomIn(0.3)}
            className="w-max hidden lg:flex items-center justify-end"
            viewport={{ once: true }}
          >
            <div className="w-64 h-64 sm:w-[300px] sm:h-[300px] md:w-[520px] md:h-[520px] relative">
              <div className="absolute w-full h-full rounded-full bg-linear-to-br dark:from-accent-purple dark:to-accent-blue from-accent-light-purple to-accent-light-blue opacity-20 blur-2xl animate-pulse" />
              {/* Coding illustration */}
              <div className="w-full h-full flex items-center justify-center relative z-10">
                <div className="w-full h-full rounded-lg relative overflow-hidden">
                  <video autoPlay loop muted playsInline controls={false} className="w-[520px] md:h-[550px]">
                    <source src="/media/coding-illustration.webm" type="video/webm" />
                  </video>
                  <div className="absolute inset-0 bg-linear-to-br dark:from-accent-purple/20 dark:to-accent-blue/20 from-accent-light-purple/20 to-accent-light-blue/20 mix-blend-overlay"></div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
