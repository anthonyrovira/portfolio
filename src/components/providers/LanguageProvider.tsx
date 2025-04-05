import { FC, ReactNode, useEffect, useState } from "react";
import { AllTranslations, Language } from "@/utils/translations/types";
import { allTranslations } from "@/utils/translations";
import { LanguageContext } from "@/contexts/LanguageContext";
import { detectLanguage } from "@/utils/i18n";

export const LanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(detectLanguage());
  const [translations, setTranslations] = useState<AllTranslations>(allTranslations[language]);

  useEffect(() => {
    localStorage.setItem("lang", language);
    setTranslations(allTranslations[language]);
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const detectedLang = detectLanguage();
    if (detectedLang !== language) {
      setLanguage(detectedLang);
    }
  }, []);

  const value = {
    language,
    setLanguage: (lang: Language) => setLanguage(lang),
    t: translations,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
