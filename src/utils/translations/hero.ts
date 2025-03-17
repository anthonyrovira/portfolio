import { HeroTranslations, Language } from "./types";

const en: HeroTranslations = {
  roles: [
    "Frontend Developer",
    "Digital Experience Creator",
    "TypeScript Developer",
    "Clean Code Advocate",
    "FullStack Developer",
    "Tech Enthusiast",
  ],
  statusText: "Ready to Innovate",
  description: "I design sleek and high-performing digital experiences, blending innovation, quality, and impact.",
  ctaButtonPrimary: "View my work",
  ctaButtonSecondary: "Get in Touch",
};

const fr: HeroTranslations = {
  roles: [
    "Développeur Frontend",
    "Créateur d’expériences digitales",
    "Développeur TypeScript",
    "Défenseur du clean code",
    "Développeur FullStack",
    "Passionné de technologie",
  ],
  statusText: "Prêt à Innover",
  description: "Je conçois des expériences numériques performantes et élégantes, alliant innovation, qualité et impact.",
  ctaButtonPrimary: "Voir mon travail",
  ctaButtonSecondary: "Contactez-moi",
};

const es: HeroTranslations = {
  roles: [
    "Desarrollador Frontend",
    "Creador de experiencias digitales",
    "Desarrollador TypeScript",
    "Defensor del código limpio",
    "Desarrollador FullStack",
    "Apasionado por la tecnología",
  ],
  statusText: "Listo para Innovar",
  description: "Diseño experiencias digitales elegantes y eficientes, combinando innovación, calidad e impacto.",
  ctaButtonPrimary: "Ver mi trabajo",
  ctaButtonSecondary: "Ponte en contacto",
};

export const heroTranslations: Record<Language, HeroTranslations> = {
  en,
  fr,
  es,
};
