import { FooterTranslations, Language } from "./types";

const en: FooterTranslations = {
  copyright: "© 2025 Anthony Rovira. All Rights Reserved.",
};

const fr: FooterTranslations = {
  copyright: "© 2025 Anthony Rovira. Tous Droits Réservés.",
};

const es: FooterTranslations = {
  copyright: "© 2025 Anthony Rovira. Todos los Derechos Reservados.",
};

export const footerTranslations: Record<Language, FooterTranslations> = {
  en,
  fr,
  es,
};
