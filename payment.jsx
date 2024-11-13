
import React, { useState } from 'react';
import './payment.css';

function PaymentPage({ onBackToHome }) {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    contact: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Payment processed successfully!');
    onBackToHome();
  };

  return (
    <div className="payment-page">
      <form className="payment-form" onSubmit={handleSubmit}>
        <h2>Shipping Address</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="cardNumber"
            value={formData.address}
            onChange={handleChange}
            required
            maxLength="50"
            placeholder="enter valid address"
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name=""
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="email@gmail.com"
          />
        </label>
        <label>
          Contact:
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            maxLength="3"
            placeholder="12345 67890"
          />
        </label>
        <button type="submit" className="confirm-button">
          Confirm Payment
        </button>
        <button type="button" onClick={onBackToHome} className="home-button">
          Back to Home
        </button>
      </form>
    </div>
  );
}

export default PaymentPage;