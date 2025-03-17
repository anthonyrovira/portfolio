import { Language, NavBarTranslations } from "./types";

const en: NavBarTranslations = {
  home: "Home",
  about: "About",
  portfolio: "Portfolio",
  contact: "Contact",
  language: "Language",
  theme: "Theme",
};

const fr: NavBarTranslations = {
  home: "Accueil",
  about: "À propos de moi",
  portfolio: "Portfolio",
  contact: "Contact",
  language: "Langue",
  theme: "Thème",
};

const es: NavBarTranslations = {
  home: "Inicio",
  about: "Sobre mí",
  portfolio: "Portafolio",
  contact: "Contacto",
  language: "Idioma",
  theme: "Tema",
};

export const navbarTranslations: Record<Language, NavBarTranslations> = {
  en,
  fr,
  es,
};

// Language display names for the language switcher
export const languageOptions = [
  { code: "en", label: "English", flag: "united-kingdom" },
  { code: "fr", label: "Français", flag: "france" },
  { code: "es", label: "Español", flag: "spain" },
];
