import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import './signup.css';

function SignupPage({ onSignup }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSignup = async () => {
    if (username && email && password) {
      try {
        // Fetch the current list of users
        const response = await axios.get('http://localhost:3000/user');
        const users = response.data;

        // Check for duplicate username
        const userExists = users.find(user => user.username === username);
        if (userExists) {
          setStatusMessage('Username already exists. Please choose another.');
          return;
        }

        // Create a new user object
        const newUser = {
          username,
          email,
          password,
          id: Date.now().toString() // Generate a unique ID based on the current timestamp
        };

        // Add the new user to the JSON server
        await axios.post('http://localhost:3000/user', newUser);

        setStatusMessage('Account created successfully!');
        onSignup(); 
      } catch (error) {
        console.error("Signup error:", error.response ? error.response.data : error.message);
        setStatusMessage('An error occurred. Please try again later.');
      }
    } else {
      setStatusMessage('Please fill out all fields.');
    }
  };

  return (
    <div className="signup-background-box">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="signup-input"
        /><br /><br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signup-input"
        /><br /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup-input"
        />
        <button onClick={handleSignup} className="signup-button">
          Sign Up
        </button><br />
        <p className="signup-status">{statusMessage}</p>
        <p>Already have an account?</p>
        <button onClick={onSignup} className="login-button">
          Login
        </button>
      </div>
    </div>
  );
}

export default SignupPage;
