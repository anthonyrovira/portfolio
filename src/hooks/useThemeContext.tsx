import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
}
