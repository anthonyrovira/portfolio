import { ErrorBoundary } from "react-error-boundary";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import SomethingWentWrongPage from "./pages/SomethingWentWrongPage";
import { HelmetProvider } from "react-helmet-async";

export const AppWrapper = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <ErrorBoundary
            fallback={<SomethingWentWrongPage />}
            onError={(error) => {
              console.error("Caught error in AppWrapper", error.message, error.stack);
            }}
          >
            <RouterProvider router={router} />
          </ErrorBoundary>
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};
