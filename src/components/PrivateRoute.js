import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, ...rest }) => {
  const role = localStorage.getItem('role');

  if (!role) {
    // If no role is set, redirect to login
    return <Navigate to="/" />;
  }

  if (rest.role && rest.role !== role) {
    // If the user does not have the required role, redirect to home or login
    return <Navigate to="/" />;
  }

  return <Route {...rest} element={element} />;
};

export default PrivateRoute;

