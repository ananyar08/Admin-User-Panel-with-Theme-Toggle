// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';  // Import DataProvider
import { ThemeProvider } from './context/ThemeContext';  // If needed
import ThemeToggle from './components/ThemeToggle';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';

const App = () => {
  return (
    <DataProvider> {/* Ensure DataProvider is wrapping the app */}
      <ThemeProvider>
        
          <div className="App">
            <ThemeToggle />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/user" element={<UserDashboard />} />
            </Routes>
          </div>
      </ThemeProvider>
    </DataProvider>
  );
};

export default App;


