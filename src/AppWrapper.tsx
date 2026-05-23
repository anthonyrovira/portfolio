import { ThemeProvider } from "./components/providers/ThemeProvider";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { HelmetProvider } from "react-helmet-async";
import App from "@/pages/App";

export const AppWrapper = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};
