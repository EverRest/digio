import React from "react";

import { THEMES } from "../constants";

/* istanbul ignore next */
export const saveThemeToLocalStorage = (
  theme: string,
  _setTheme: React.Dispatch<React.SetStateAction<string>>
) => {
  /* istanbul ignore next */
  return (theme: string): void => {
    localStorage.setItem("theme", JSON.stringify(theme));
    _setTheme(theme);
  };
};
/* istanbul ignore next */
export const getInitialState = (): string => {
  const storedTheme = localStorage.getItem("theme");

  return storedTheme ? JSON.parse(storedTheme) : THEMES.DARK;
};
/* istanbul ignore next */
const initialState = {
  theme: THEMES.DARK,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setTheme: (theme: string): any => {},
};
const ThemeContext = React.createContext(initialState);

type ThemeProviderProps = {
  children: React.ReactNode;
};

function ThemeProvider({ children }: ThemeProviderProps): React.ReactElement {
  const [theme, _setTheme] = React.useState<string>(getInitialState());

  const setTheme = saveThemeToLocalStorage(theme, _setTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
