import { ReusablesTranslations, Language } from "./types";

const en: ReusablesTranslations = {
  showMore: "Show More",
  showLess: "Show Less",
  themeOptions: {
    dark: "Dark",
    light: "Light",
  },
  years: "years",
  locale: "en-US",
};

const fr: ReusablesTranslations = {
  showMore: "Afficher plus",
  showLess: "Afficher moins",
  themeOptions: {
    dark: "Sombre",
    light: "Clair",
  },
  years: "ans",
  locale: "fr-FR",
};

const es: ReusablesTranslations = {
  showMore: "Ver más",
  showLess: "Ver menos",
  themeOptions: {
    dark: "Oscuro",
    light: "Claro",
  },
  years: "años",
  locale: "es-ES",
};

export const reusablesTranslations: Record<Language, ReusablesTranslations> = {
  en,
  fr,
  es,
};
