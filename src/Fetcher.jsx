import React, { useState, useEffect } from 'react';
import './Fetcher.css';

const Fetcher = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container">
      <h2 className="heading">Product List</h2>

      {products.length === 0 ? (
        <p className="loading">Loading...</p>
      ) : (
        <ul className="product-list">
          {products.map(product => (
            <li key={product.id} className="product-item">
              <img src={product.image} alt={product.title} className="product-image" />
              <div className="product-info">
                <strong>{product.title}</strong><br />
                Price: ${product.price}  <br/>
                <button>Rivalry</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Fetcher;
