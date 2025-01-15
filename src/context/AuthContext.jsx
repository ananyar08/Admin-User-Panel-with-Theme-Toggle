import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(localStorage.getItem("role") || "user");

  const login = (newRole) => {
    setRole(newRole);
    localStorage.setItem("role", newRole);
  };

  const logout = () => {
    setRole("user");
    localStorage.removeItem("role");
  };

  return (
    <AuthContext.Provider value={{ role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


