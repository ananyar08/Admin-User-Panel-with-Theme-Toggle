import React, { useState, useEffect } from "react";
import './App.css';  // Make sure to import the CSS file for the styles

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Check if dark mode is saved in localStorage
  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode) {
      setDarkMode(JSON.parse(storedMode));
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      return newMode;
    });
  };

  return (
    <div className={`container ${darkMode ? "dark-mode" : ""}`}>
      {/* Dark Mode Toggle Button */}
      <div className="dark-mode-toggle">
        <button onClick={toggleDarkMode} className="toggle-btn">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Your existing Login Form */}
      <div className="login-container">
        <div className="login-form">
          <h2 className="login-title">Login</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="input-field" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" className="input-field" required />
            </div>
            <div className="form-group">
              <label htmlFor="role">Role</label>
              <select id="role" className="input-field">
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;

