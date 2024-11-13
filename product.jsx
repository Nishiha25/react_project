import React, { useState } from 'react';
import { useCart } from './cartc.jsx';
import ProductCard from './ProductCard';
import PaymentPage from './payment'; // Import PaymentPage
import './product.css';

function ProductsPage({ onBackToHome }) {
  const { addToCart } = useCart();
  const [isPaymentPage, setIsPaymentPage] = useState(false); // State to handle payment page view

  const products = [
    { id: 1, image: 'https://i.pinimg.com/736x/a7/64/ec/a764ec667657055823df7c9c8c79234d.jpg', name: 'THE CLUE', price: 999 },
    { id: 2, image: 'https://m.media-amazon.com/images/I/71OI-1dyjsL.AC_UF1000,1000_QL80.jpg', name: 'The Astonishing', price: 1299 },
    { id: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr61HnJKA5QM21PG4iypk7hRqGFVmVxbZA5Q&s', name: 'The People In The Woods', price: 1799 },
    { id: 4, image: 'https://m.media-amazon.com/images/I/31Qgp9BkP4L.jpg', name: 'LONELY', price: 1599 },
    { id: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4v_9ip7UKGREFraMi9l0S2wnQNiIOgfzCMw&s', name: 'On the BEACH', price: 2979 },
    { id: 6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwKXxGIQO3OoLpH-VBukG_HjJoOPFXNt4dA&s', name: 'Black Beauty', price: 1100 },
  ];

  const handleBuyNow = (product) => {
    addToCart({ id: product.id, image: product.image, name: product.name, price: product.price });
    setIsPaymentPage(true); // Show payment page
  };

  if (isPaymentPage) {
    return <PaymentPage onBackToHome={() => setIsPaymentPage(false)} />; // Render PaymentPage and handle return to Products
  }

  return (
    <div className="products-background-box">
      <h2>Available Books</h2>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            image={product.image} 
            name={product.name} 
            price={product.price} 
            addToCart={() => addToCart({ id: product.id, image: product.image, name: product.name, price: product.price })} 
            buyNow={() => handleBuyNow(product)} // Use handleBuyNow for Buy Now button
          />
        ))}
      </div>
      <button onClick={onBackToHome} className="back-to-home-button">Back to Home🏠</button>
    </div>
  );
}

export default ProductsPage;
