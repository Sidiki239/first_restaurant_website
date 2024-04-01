// ThemeContext.js
import React, { createContext, useContext, useState , useEffect} from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [darktheme, setTheme] = useState(false); // true pour le thème light, false pour le thème dark
    const toggleTheme = () => {
        setTheme(!darktheme); // Inverse simplement la valeur actuelle du thème
      };
    

  return (
    <ThemeContext.Provider value={{ darktheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
