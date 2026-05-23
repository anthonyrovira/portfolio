import { FooterTranslations, Language } from "./types";

const year = new Date().getFullYear();

const en: FooterTranslations = {
  copyright: `© ${year} Anthony Rovira. All Rights Reserved.`,
};

const fr: FooterTranslations = {
  copyright: `© ${year} Anthony Rovira. Tous Droits Réservés.`,
};

const es: FooterTranslations = {
  copyright: `© ${year} Anthony Rovira. Todos los Derechos Reservados.`,
};

export const footerTranslations: Record<Language, FooterTranslations> = {
  en,
  fr,
  es,
};
