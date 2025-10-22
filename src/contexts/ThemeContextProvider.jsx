import React, { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (!saved) return false;
    
    try {
      // Handle both old string format and new boolean format
      if (saved === 'true') return true;
      if (saved === 'false') return false;
      if (saved === '"dark"') return true; // Handle old string format
      return JSON.parse(saved);
    } catch (error) {
      console.warn('Error parsing theme from localStorage:', error);
      return false;
    }
  });

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDark));
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const value = {
    isDark,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
