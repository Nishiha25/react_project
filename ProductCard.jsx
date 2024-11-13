
import React from 'react';
import './product.css'; 

function ProductCard({ image, name, price, addToCart, buyNow }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h3>{name}</h3>
        <p className="product-price">${price.toFixed(2)}</p>
        <button onClick={addToCart} className="add-to-cart-btn">Add to Cart</button>
        <button onClick={buyNow} className="buy-now-btn">Buy Now</button> {/* Buy Now button below Add to Cart */}
      </div>
    </div>
  );
}

export default ProductCard;