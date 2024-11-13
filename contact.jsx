// ContactPage.jsx
import React, { useState } from 'react';
import './contact.css'; // Create a contact.css file for styling

function ContactPage({ onBackToHome }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !message) {
      setStatus('Please fill in all fields.');
      return;
    }

    // Simple email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setStatus('Please enter a valid email address.');
      return;
    }

    setStatus('Message sent successfully! We will get back to you soon.');
    // Clear form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-background-box">
      <div className="contact-container">
        <h1>Contact Us 〽️</h1>
        <h3>☎️ Phone: 04651 238262</h3>
        <h3>📩 Email: ebook.13@gmail.com</h3>
        
        <p>We'd love to hear from you! Please fill out the feedback form 📃 below.</p>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="contact-input"
          aria-label="Your Name"
        />
        
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="contact-input"
          aria-label="Your Email"
        />
        
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="contact-textarea"
          aria-label="Your Message"
        ></textarea>

        <button onClick={handleSubmit} className="contact-submit-btn">Submit ✉️</button>
        <p className="contact-status">{status}</p>
        <button onClick={onBackToHome} className="back-to-home-button">Back to Home 🏠</button>
      </div>
    </div>
  );
}

export default ContactPage;
