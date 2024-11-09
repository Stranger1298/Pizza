import React from 'react';

function Footer({ handleOrder, cartItems }) {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <div className="footer p-6 bg-gray-100 text-center">
      {isOpen && (
        <div className="order mb-4">
          {cartItems.length === 0 ? (
            <p>Please add items to the cart before placing an order.</p>
          ) : (
            <>
              <p>We're open until {closeHour}:00. Come visit us or order online.</p>
              <button
                onClick={handleOrder}
                className="rounded-md bg-violet-500 hover:bg-violet-400 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-200 text-white font-semibold py-2 px-4 shadow-lg mt-2"
              >
                Order
              </button>
            </>
          )}
        </div>
      )}
      <p>&copy; 2024 React Pizza. All rights reserved.</p>
    </div>
  );
}

export default Footer;
