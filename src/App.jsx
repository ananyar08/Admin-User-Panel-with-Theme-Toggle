// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom"; // Only import Routes and Route
import ThemeToggle from "./components/ThemeToggle";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute

const App = () => {
  return (
    <div className="App">
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Login />} />

        {/* Wrap protected routes with ProtectedRoute */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
