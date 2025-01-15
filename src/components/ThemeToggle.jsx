import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();  // Get theme and toggle function from context

  return (
    <button
      onClick={toggleTheme}
      style={{ position: 'fixed', top: '16px', left: '16px' }} // Positioning for the button
      className="p-4 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white text-lg font-bold"
    >
      {/* Emoji for Dark Mode or Light Mode */}
      {theme === 'light' ? '🌙' : '🌞'}
    </button>
  );
};

export default ThemeToggle;
