import React, { createContext, useState, useContext } from "react";

// Mock user data
const mockUsers = [
  {
    email: "admin@example.com",
    password: "admin123",
    role: "admin",
  },
  {
    email: "user@example.com",
    password: "user123",
    role: "user",
  },
];

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(localStorage.getItem("role") || "user");
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("role") ? true : false
  );

  const login = (email, password) => {
    // Find user from mock data
    const user = mockUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setRole(user.role);
      setIsAuthenticated(true);
      localStorage.setItem("role", user.role);
      return true; // Successful login
    } else {
      return false; // Failed login
    }
  };

  const logout = () => {
    setRole("user");
    setIsAuthenticated(false);
    localStorage.removeItem("role");
  };

  return (
    <AuthContext.Provider value={{ role, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
