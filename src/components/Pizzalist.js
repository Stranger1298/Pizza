import React, { useState, useEffect } from 'react';

function Pizzalist({ pizza, addToCart, removeFromCart, cart }) {
  const [quantity, setQuantity] = useState(0);

  // Update quantity based on the cart's latest state
  useEffect(() => {
    const existingPizza = cart.find(item => item.name === pizza.name);
    setQuantity(existingPizza ? existingPizza.quantity : 0);
  }, [cart, pizza.name]);

  // Increase pizza quantity in cart
  const handleIncrease = () => {
    addToCart(pizza, 1); // Add 1 to the cart
  };

  // Decrease pizza quantity in cart
  const handleDecrease = () => {
    if (quantity > 0) {
      removeFromCart(pizza); // Decrease 1 from the cart
    }
  };

  return (
    <div className="pizza-list">
      <img src={pizza.photo} alt={pizza.name} />
      <h1>{pizza.name}</h1>
      <p>{pizza.ingredients}</p>
      <p className="price">{pizza.price}</p>
      <div className="quantity-controls">
        <button onClick={handleDecrease} aria-label="Decrease quantity">-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrease} aria-label="Increase quantity">+</button>
      </div>
    </div>
  );
}

export default Pizzalist;
