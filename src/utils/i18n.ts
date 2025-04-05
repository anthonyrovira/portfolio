import { allTranslations } from "./translations";
import { Language } from "./translations/types";

export const detectLanguage = (): Language => {
  // 1. Check if there is a preferred language set in browser
  const savedLang = localStorage.getItem("lang") as Language;
  if (savedLang && Object.keys(allTranslations).includes(savedLang)) return savedLang;

  // 2. Detect browser's language
  const browserLang = navigator.language.split("-")[0] as Language;

  // 3. Apply browser's language or fallback 'en'
  return Object.keys(allTranslations).includes(browserLang) ? browserLang : "en";
};
