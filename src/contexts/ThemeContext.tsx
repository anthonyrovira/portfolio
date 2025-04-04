import { Theme } from "@/components/providers/ThemeProvider";
import { createContext } from "react";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeContextType = {
  theme: "dark",
  setTheme: () => null,
};

export const ThemeContext = createContext<ThemeContextType>(initialState);
