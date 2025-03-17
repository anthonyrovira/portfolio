import { FC, ReactNode, useEffect, useState } from "react";
import { AllTranslations, Language } from "@/utils/translations/types";
import { allTranslations } from "@/utils/translations";
import { LanguageContext } from "@/contexts/LanguageContext";

export const LanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const getInitialLanguage = (): Language => {
    const savedLanguage = localStorage.getItem("preferredLanguage") as Language;
    return savedLanguage && Object.keys(allTranslations).includes(savedLanguage) ? savedLanguage : "en";
  };

  const [language, setLanguage] = useState<Language>(getInitialLanguage());
  const [translations, setTranslations] = useState<AllTranslations>(allTranslations[language]);

  useEffect(() => {
    setTranslations(allTranslations[language]);
    localStorage.setItem("ar-language", language);
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, []);

  const value = {
    language,
    setLanguage,
    t: translations,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
