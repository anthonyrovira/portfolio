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

// Custom hook to use the language context
// export const useLanguage = () => useContext(LanguageContext);

// Provider component
// export const LanguageProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
//   // Get preferred language from localStorage or default to 'en'
//   const getInitialLanguage = (): Language => {
//     const savedLanguage = localStorage.getItem("preferredLanguage") as Language;
//     return savedLanguage && Object.keys(allTranslations).includes(savedLanguage) ? savedLanguage : "en";
//   };

//   const [language, setLanguage] = useState<Language>(getInitialLanguage());
//   const [translations, setTranslations] = useState<AllTranslations>(allTranslations[language]);

//   // Update translations when language changes
//   useEffect(() => {
//     setTranslations(allTranslations[language]);
//     localStorage.setItem("preferredLanguage", language);
//     document.documentElement.lang = language;
//   }, [language]);

//   // Set the initial html lang attribute
//   useEffect(() => {
//     document.documentElement.lang = language;
//   }, []);

//   const value = {
//     language,
//     setLanguage,
//     t: translations,
//   };

//   return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
// };
