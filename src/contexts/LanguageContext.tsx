import { createContext } from "react";
import { AllTranslations, Language } from "@/utils/translations/types";
import { allTranslations } from "@/utils/translations";
import { detectLanguage } from "@/utils/i18n";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: AllTranslations;
}

// Create context with default values
export const LanguageContext = createContext<LanguageContextType>({
  language: detectLanguage(),
  setLanguage: () => {},
  t: allTranslations[detectLanguage()],
});
