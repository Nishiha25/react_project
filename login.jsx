import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import './login.css';

function LoginPage({ onLogin, onSignup }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    if (!username || !password) {
      setErrorMessage('Please enter both username and password.');
      return;
    }

    try {
      // Make a GET request to the users endpoint
      const response = await axios.get('http://localhost:3000/user');
      const users = response.data; // Get the list of users

      // Check if the provided username and password match any user
      const validUser = users.find(user => 
        user.username === username && user.password === password
      );

      if (validUser) {
        setErrorMessage('');
        setUsername('');
        setPassword('');
        onLogin(); // Call the login success callback
      } else {
        setErrorMessage('Invalid username or password');
      }
    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : error.message);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-background-box">
      <div className="login-container">
        <h1>Login ⚠️</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        /><br /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button onClick={handleLogin} className="login-button">
          Login ↗
        </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <p>Don't have an account ❓</p>
        <button onClick={onSignup} className="signup-button">
          Sign Up →
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
