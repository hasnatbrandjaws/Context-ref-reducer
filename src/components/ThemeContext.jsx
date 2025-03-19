import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState(false);

  const toggltheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };
  
  useEffect(() => {
    localStorage.setItem("themeValue", JSON.stringify(theme));
  }, [theme]);

  return (
    <AppContext.Provider value={{ theme, toggltheme }}>
      {children}
    </AppContext.Provider>
  );
};

export default ThemeContext;
