import React from "react";

export const initialThemeState = {
  theme: "light",
  setTheme: (value: string): void => undefined,
};

const ThemeContext = React.createContext(initialThemeState);
export default ThemeContext;
