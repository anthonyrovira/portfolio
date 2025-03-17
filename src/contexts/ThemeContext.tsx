import { Theme } from "@/providers/ThemeProvider";
import { createContext } from "react";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeContextType = {
  theme: "system",
  setTheme: () => null,
};

export const ThemeContext = createContext<ThemeContextType>(initialState);
