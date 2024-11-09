import React from 'react';

function Cart({ cartItems, addToCart, removeFromCart }) {
  return (
    <div className="cart-dropdown">
      <h2>Cart Items</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map(item => (
          <div key={item.name} className="cart-item">
            <p>{item.name}</p>
            <div className="quantity-controls">
              <button onClick={() => removeFromCart(item)} aria-label="Decrease quantity">-</button>
              <span>{item.quantity}</span>
              <button onClick={() => addToCart(item, 1)} aria-label="Increase quantity">+</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
