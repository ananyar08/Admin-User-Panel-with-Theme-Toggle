import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="fixed top-4 right-4 flex items-center gap-2">
      <Sun
        className={`w-5 h-5 transition-all duration-200 ${
          isDark ? "text-gray-400" : "text-yellow-500"
        }`}
      />
      <button
        onClick={toggleTheme}
        className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200"
      >
        <span className="sr-only">Toggle theme</span>
        <span
          className={`${
            isDark ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200`}
        />
      </button>
      <Moon
        className={`w-5 h-5 transition-all duration-200 ${
          isDark ? "text-blue-300" : "text-gray-400"
        }`}
      />
    </div>
  );
};

export default ThemeToggle;
