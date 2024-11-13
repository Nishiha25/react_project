import React from 'react';
import './about.css'; // Optional: Add styles for the About page

function AboutPage({ onBackToHome }) {
  return (
    <div className="about-background-box">
      <div className="about-container">
        <h2>About Us</h2>
        <p>
        ➡️ Welcome to E-Bookstore! We are passionate about bringing you the best collection of e-books from various genres.
          Our mission is to provide readers with an accessible platform to discover, purchase, and enjoy their favorite books.
        </p>
        <p>
        ➡️ At E-Bookstore, we believe in the power of literature to inspire, educate, and entertain. 
          Our team curates a diverse selection of titles to cater to every reader's interests, from fiction and non-fiction to self-help and romance.
        </p>
        <p>
        ➡️ Thank you for choosing E-Bookstore. Happy reading!<br></br>
          <br></br>
          📌 Best regards Nishiha ♾️
        </p>
        <button onClick={onBackToHome} className="back-to-home-button">Back to Home</button>
      </div>
    </div>
  );
}

export default AboutPage;
