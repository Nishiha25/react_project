import React from 'react';
import { useCart } from './cartc';
import './cart.css';

function CartPage({ onBackToHome, onProceedToPayment }) { // Add onProceedToPayment prop
  const { cartItems, removeFromCart } = useCart();

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleProceedToCheckout = () => {
    onProceedToPayment(); // Call the onProceedToPayment function to navigate to PaymentPage
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-background-box">
      <h2>Your Cart 🛒</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items-list">
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>₹{item.price.toFixed(2)}</p>
                  <button onClick={() => handleRemove(item.id)} className="remove-button">
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p>Total: ₹{totalAmount.toFixed(2)}</p>
            <button onClick={handleProceedToCheckout} className="checkout-button">
              Proceed to Checkout ✅
            </button>
          </div>
        </>
      )}
      <button onClick={onBackToHome} className="back-to-home-button">Back to Home</button>
    </div>
  );
}

export default CartPage;
