import React from "react";

export const initialThemeState = {
  theme: "dark",
  setTheme: (value: string): void => undefined,
};

const ThemeContext = React.createContext(initialThemeState);
export default ThemeContext;
