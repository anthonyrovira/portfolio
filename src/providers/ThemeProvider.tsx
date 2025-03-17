import { ThemeContext } from "@/contexts/ThemeContext";
import { ReactNode, useEffect, useState } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

export type Theme = "dark" | "light" | "system";

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check for theme in localStorage
    const storedTheme = localStorage.getItem("ar-theme") as Theme | null;
    // Return stored theme if valid, otherwise use system preference
    if (storedTheme && ["dark", "light"].includes(storedTheme)) {
      return storedTheme;
    } else {
      // Default to system preference
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
  });

  // Update theme when it changes
  useEffect(() => {
    const root = window.document.documentElement;

    // Instead of removing and adding, we'll handle it more smoothly
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.classList.remove(systemTheme === "dark" ? "light" : "dark");
      root.classList.add(systemTheme);
    } else {
      root.classList.remove(theme === "dark" ? "light" : "dark");
      root.classList.add(theme);
    }

    localStorage.setItem("ar-theme", theme);
  }, [theme]);

  // Listen for system theme changes - only for initial load, not for updates
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // This is only used for capturing initial system preference changes before user interaction
    // Once the user has selected a theme manually, we no longer respond to system changes
    const handleChange = () => {
      // Only update if no user preference is stored yet
      if (!localStorage.getItem("ar-theme")) {
        setTheme(mediaQuery.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}
