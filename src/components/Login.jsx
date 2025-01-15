import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext'; // Import theme context

const Login = () => {
  const { theme, toggleTheme } = useTheme(); // Access the theme and toggle function
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  // Function to validate password according to the policy
  const validatePassword = (password) => {
    const regex = /[A-Z]/; // At least one capital letter
    if (!regex.test(password)) {
      setPasswordError('Password must contain at least one uppercase letter.');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!firstName || !email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    // Password validation
    if (!validatePassword(password)) {
      return;
    }

    // Mock authentication
    if (role === 'admin') {
      localStorage.setItem('role', 'admin');
      navigate('/admin');
    } else {
      localStorage.setItem('role', 'user');
      navigate('/user');
    }
  };

  // Add dark mode class to body element when theme changes
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [theme]);

  return (
    <div className={`login-container ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <div className={`welcome-box ${theme === 'dark' ? 'dark-box' : 'light-box'}`}>
        <h2 className="login-title">Welcome</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">👤 Name</label>
            <input
              type="text"
              id="firstName"
              className="input-field"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">📧 Email ID</label>
            <input
              type="email"
              id="email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@domain.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">🔒 Password</label>
            <input
              type="password"
              id="password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {passwordError && <p className="error-text">{passwordError}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="role">🔑 Role</label>
            <select
              id="role"
              className="input-field"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">Login 🚪</button>
        </form>
      </div>
    </div>
  );
};

export default Login;











