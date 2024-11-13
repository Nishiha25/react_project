import React, { useState } from 'react';
import LoginPage from './login';
import SignupPage from './signup';
import HomePage from './home';
import CartPage from './cart';
import ProductsPage from './product';
import ContactPage from './contact';
import AboutPage from './about';
import CartProvider from './cartc';
import PaymentPage from './payment';

function App3() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showPayment, setShowPayment] = useState(false); // New state for PaymentPage
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsSignup(false);
  };

  const handleSignupToggle = () => {
    setIsSignup(!isSignup);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowCart(false);
    setShowProducts(false);
    setShowContact(false);
    setShowAbout(false);
    setShowPayment(false); // Reset PaymentPage on logout
  };

  const handleCartClick = () => {
    setShowCart(true);
    setShowProducts(false);
    setShowContact(false);
    setShowAbout(false);
    setShowPayment(false);
  };

  const handleProductsClick = () => {
    setShowProducts(true);
    setShowCart(false);
    setShowContact(false);
    setShowAbout(false);
    setShowPayment(false);
  };

  const handleContactClick = () => {
    setShowContact(true);
    setShowProducts(false);
    setShowCart(false);
    setShowAbout(false);
    setShowPayment(false);
  };

  const handleAboutClick = () => {
    setShowAbout(true);
    setShowProducts(false);
    setShowCart(false);
    setShowContact(false);
    setShowPayment(false);
  };

  const handleProceedToPayment = () => {
    setShowPayment(true);
    setShowCart(false);
  };

  const handleSearchTerm = (term) => {
    setSearchTerm(term);
    setShowProducts(true);
  };

  return (
    <CartProvider>
      <div>
        {!isLoggedIn ? (
          isSignup ? (
            <SignupPage onSignup={handleSignupToggle} />
          ) : (
            <LoginPage onLogin={handleLogin} onSignup={handleSignupToggle} />
          )
        ) : showPayment ? ( // Show PaymentPage if showPayment is true
          <PaymentPage onBackToHome={() => setShowPayment(false)} />
        ) : showCart ? (
          <CartPage onBackToHome={() => setShowCart(false)} onProceedToPayment={handleProceedToPayment} />
        ) : showProducts ? (
          <ProductsPage searchTerm={searchTerm} onBackToHome={() => setShowProducts(false)} />
        ) : showContact ? (
          <ContactPage onBackToHome={() => setShowContact(false)} />
        ) : showAbout ? (
          <AboutPage onBackToHome={() => setShowAbout(false)} />
        ) : (
          <HomePage
            onCartClick={handleCartClick}
            onProductsClick={handleProductsClick}
            onLogout={handleLogout}
            onSearchTerm={handleSearchTerm}
            onAboutClick={handleAboutClick}
            onContactClick={handleContactClick}
          />
        )}
      </div>
    </CartProvider>
  );
}

export default App3;
