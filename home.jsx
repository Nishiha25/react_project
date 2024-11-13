// HomePage.jsx
import React, { useState } from 'react';
import './home.css'; 
import { useCart } from './cartc.jsx'; 

function Navbar({ onCartClick, onProductsClick, onLogout, onSearch, onAboutClick, onContactClick }) {
  const { cartItems } = useCart(); 
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm) {
      onSearch(searchTerm); // Pass the search term to the parent
      setSearchTerm(''); // Clear the search input
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">E-Books 📒</div>
      <ul className="navbar-links">
        <li onClick={onProductsClick}>📚 Books </li>
        <li onClick={onAboutClick}>〽️ About Us </li>
        <li onClick={onContactClick}>📞 Contact </li>
        <li className="navbar-link" onClick={onCartClick}>
          🛒 Cart ({cartItems.length})
        </li>
        <li onClick={onLogout} className="navbar-link">Logout ➡️</li>
      </ul>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search 🔍</button>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <div className="hero-section">
      <h1>Welcome to E-Bookstore 📖</h1>
      <p>Discover the best deals on Latest Books 📔</p>
      <button className="shop-now-btn">Shop Now 🛍️</button>
    </div>
  );
}

function ProductCard({ image, name, price, description, addToCart, buyNow }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="product-price">${price.toFixed(2)}</p>
        <button className="add-to-cart-btn" onClick={addToCart}>Add to Cart 🛒</button>
        <button className="buy-now-btn" onClick={buyNow}>Buy Now 💸🏷️</button>
      </div>
    </div>
  );
}

function Products() {
  const { addToCart } = useCart(); // Accessing the cart context

  const products = [
    { id: 1, image: 'https://i.pinimg.com/736x/a7/64/ec/a764ec667657055823df7c9c8c79234d.jpg', name: 'THE CLUE', price: 999, description: 'A thrilling mystery.' },
    { id: 2, image: 'https://m.media-amazon.com/images/I/71OI-1dyjsL.AC_UF1000,1000_QL80.jpg', name: 'The Astonishing', price: 1299, description: 'An astonishing adventure.' },
    { id: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr61HnJKA5QM21PG4iypk7hRqGFVmVxbZA5Q&s', name: 'The People In The Woods', price: 1799, description: 'A captivating tale.' },
    { id: 4, image: 'https://m.media-amazon.com/images/I/31Qgp9BkP4L.jpg', name: 'LONELY', price: 1599, description: 'A story of solitude.' },
    { id: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4v_9ip7UKGREFraMi9l0S2wnQNiIOgfzCMw&s', name: 'On the BEACH', price: 2979, description: 'A relaxing read.' },
    { id: 6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwKXxGIQO3OoLpH-VBukG_HjJoOPFXNt4dA&s', name: 'Black Beauty', price: 1100, description: 'A classic tale.' },
  ];

  const handleBuyNow = (product) => {
    addToCart({ id: product.id, image: product.image, name: product.name, price: product.price });
    // Implement further buy now logic (like redirecting to checkout) here
    console.log(`Buying ${product.name} now!`);
  };

  return (
    <div className="products-section">
      <h2>Featured Books</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            image={product.image} 
            name={product.name} 
            price={product.price} 
            description={product.description} 
            addToCart={() => addToCart({ id: product.id, image: product.image, name: product.name, price: product.price })} 
            buyNow={() => handleBuyNow(product)} // Handle Buy Now action
          />
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer-background">
      <footer className="footer">
        <div className="footer-content">
          <div>&copy; 2024 E-book. All rights reserved.®️</div>
          <ul className="footer-links">
            <li>✓ Privacy Policy</li>
            <li>✓ Terms of Service</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

function HomePage({ onCartClick, onProductsClick, onLogout, onSearchTerm, onAboutClick, onContactClick }) {
  return (
    <>
      <Navbar 
        onCartClick={onCartClick} 
        onProductsClick={onProductsClick} 
        onLogout={onLogout} 
        onSearch={onSearchTerm} 
        onAboutClick={onAboutClick} 
        onContactClick={onContactClick} // Added here
      />
      <HeroSection />
      <Products />
      <Footer />  
    </>
  );
}

export default HomePage;
