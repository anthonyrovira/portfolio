import { aboutTranslations } from "./about";
import { contactTranslations } from "./contact";
import { footerTranslations } from "./footer";
import { heroTranslations } from "./hero";
import { navbarTranslations } from "./navbars";
import { portfolioTranslations } from "./portfolio";
import { reusablesTranslations } from "./reusables";
import { AllTranslations, Language } from "./types";

export * from "./navbars";
export * from "./about";
export * from "./hero";
export * from "./portfolio";
export * from "./contact";
export * from "./footer";
export * from "./reusables";

export const allTranslations: Record<Language, AllTranslations> = {
  en: {
    navbar: navbarTranslations.en,
    hero: heroTranslations.en,
    about: aboutTranslations.en,
    portfolio: portfolioTranslations.en,
    contact: contactTranslations.en,
    footer: footerTranslations.en,
    reusables: reusablesTranslations.en,
  },
  fr: {
    navbar: navbarTranslations.fr,
    hero: heroTranslations.fr,
    about: aboutTranslations.fr,
    portfolio: portfolioTranslations.fr,
    contact: contactTranslations.fr,
    footer: footerTranslations.fr,
    reusables: reusablesTranslations.fr,
  },
  es: {
    navbar: navbarTranslations.es,
    hero: heroTranslations.es,
    about: aboutTranslations.es,
    portfolio: portfolioTranslations.es,
    contact: contactTranslations.es,
    footer: footerTranslations.es,
    reusables: reusablesTranslations.es,
  },
};
