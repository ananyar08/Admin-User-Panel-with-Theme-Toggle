// src/context/ThemeContext.jsx
import React, { createContext, useState, useEffect } from 'react';

// Create the ThemeContext
const ThemeContext = createContext();

// Custom hook to use the theme
export const useTheme = () => {
  return React.useContext(ThemeContext);
};

// Provider component to manage and provide the theme state
export const ThemeProvider = ({ children }) => {
  // Check the saved theme in localStorage or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(savedTheme);

  // Toggle theme between 'light' and 'dark'
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);  // Save the theme to localStorage
  };

  useEffect(() => {
    // Apply the theme to the body
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

