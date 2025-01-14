import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file for the Login component


const Login = () => {
  const [role, setRole] = useState('user'); // default role is user
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      alert('Please fill in both fields.');
      return;
    }

    // Mock authentication
    if (role === 'admin') {
      localStorage.setItem('role', 'admin');
      navigate('/admin');  // Redirect to admin dashboard
    } else {
      localStorage.setItem('role', 'user');
      navigate('/user');  // Redirect to user dashboard
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="input-field"
              value={email}  // Bind email state
              onChange={(e) => setEmail(e.target.value)}  // Update email state
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="input-field"
              value={password}  // Bind password state
              onChange={(e) => setPassword(e.target.value)}  // Update password state
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              className="input-field"
              value={role}  // Bind role state
              onChange={(e) => setRole(e.target.value)}  // Update role state
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

