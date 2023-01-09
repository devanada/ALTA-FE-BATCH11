import React, { createContext } from "react";

interface ThemeType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const theme: ThemeType = {
  theme: "",
  setTheme: () => {},
};

export const ThemeContext = createContext(theme);
