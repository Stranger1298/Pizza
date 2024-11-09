import React, { useState } from 'react';
import './App.css';
import './index.css';
import Header from './components/Header';
import Pizza from './components/Pizza';
import Pizzalist from './components/Pizzalist';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [orderStatus, setOrderStatus] = useState(false); // Track order status

  const addToCart = (pizza, quantity) => {
    if (quantity <= 0) return; // Don't add if quantity is 0 or less
    setCart((prevCart) => {
      const existingPizza = prevCart.find(item => item.name === pizza.name);
      if (existingPizza) {
        // Update quantity if pizza already in cart
        return prevCart.map(item =>
          item.name === pizza.name ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      // Add new pizza to cart if not already there
      return [...prevCart, { ...pizza, quantity }];
    });
  };

  const removeFromCart = (pizza) => {
    setCart((prevCart) => {
      const existingPizza = prevCart.find(item => item.name === pizza.name);
      if (existingPizza.quantity === 1) {
        // Remove pizza completely if quantity is 1
        return prevCart.filter(item => item.name !== pizza.name);
      }
      // Decrease quantity if more than 1
      return prevCart.map(item =>
        item.name === pizza.name ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const clearCart = () => {
    setCart([]); // Clear the cart
  };

  const handleOrder = () => {
    if (cart.length === 0) {
      alert("Please add items to the cart before placing an order.");
    } else {
      clearCart(); // Clear the cart after order
      setOrderStatus(true); // Show order confirmation message
      setTimeout(() => setOrderStatus(false), 5000); // Hide message after 5 seconds
    }
  };

  const pizzaList = [
    {
      name: "Margherita",
      ingredients: "Tomato Sauce, Mozzarella, Basil",
      price: "$8.99",
      photo: "https://theorganisedhousewife.com.au/wp-content/uploads/2020/03/pizza-or-flatbread-with-salami-cheese-263x175.jpg",
      IsSold: false
    },
    {
      name: "Pepperoni",
      ingredients: "Tomato Sauce, Mozzarella, Pepperoni",
      price: "$9.99",
      photo: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/pizza-recipe.jpg",
      IsSold: false
    },
    {
      name: "Four Cheese",
      ingredients: "Mozzarella, Parmesan, Gorgonzola, Ricotta",
      price: "$12.99",
      photo: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/pizza-recipe.jpg",
      IsSold: false
    },
    {
      name: "Spicy Buffalo",
      ingredients: "Buffalo Sauce, Mozzarella, Chicken, Jalapenos",
      price: "$11.49",
      photo: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/pizza-recipe.jpg",
      IsSold: true
    },
    {
      name: "Mediterranean",
      ingredients: "Tomato Sauce, Mozzarella, Feta, Olives, Artichokes, Red Peppers",
      price: "$10.99",
      photo: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/pizza-recipe.jpg",
      IsSold: false
    }
  ];

  return (
    <div>
      <Header 
        cartCount={cart.reduce((total, item) => total + item.quantity, 0)} 
        toggleCart={() => setShowCart(!showCart)} 
      />
      <Pizza />
      <div className="pizza-list-container">
        {pizzaList.map((pizza, index) => (
          <Pizzalist 
            key={index}
            pizza={pizza}
            addToCart={addToCart}
            cart={cart} // Pass cart to update UI in real-time
          />
        ))}
      </div>
      {showCart && <Cart cartItems={cart} addToCart={addToCart} removeFromCart={removeFromCart} />}
      
      {/* Show order confirmation message */}
      {orderStatus && (
        <div className="order-confirmation">
          <p>Your order has been accepted. Please hang out tight, it will be delivered soon!</p>
        </div>
      )}
      
      <Footer handleOrder={handleOrder} cartItems={cart} />
    </div>
  );
}

export default App;
