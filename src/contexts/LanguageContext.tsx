import { createContext } from "react";
import { AllTranslations, Language } from "@/utils/translations/types";
import {
  aboutTranslations,
  contactTranslations,
  footerTranslations,
  heroTranslations,
  navbarTranslations,
  portfolioTranslations,
  reusablesTranslations,
} from "@/utils/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: AllTranslations;
}

// Create context with default values
export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: {
    navbar: navbarTranslations.en,
    hero: heroTranslations.en,
    about: aboutTranslations.en,
    portfolio: portfolioTranslations.en,
    contact: contactTranslations.en,
    footer: footerTranslations.en,
    reusables: reusablesTranslations.en,
  },
});
