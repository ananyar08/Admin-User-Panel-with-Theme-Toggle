// src/components/ThemeToggle.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();  // Get theme and toggle function from context

  return (
    <button
  onClick={toggleTheme}
  style={{ position: 'fixed', top: '16px', left: '16px' }} // Positioning
  className="p-4 rounded-lg bg-gray-200 dark:bg-gray-700 text-black dark:text-white text-lg font-bold"
>
  {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
</button>

  );
};

export default ThemeToggle;


