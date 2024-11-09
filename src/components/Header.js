import { FaShoppingCart } from 'react-icons/fa';

function Header({ cartCount, toggleCart }) {
  return (
    <div className="header">
      <h1 className="heading">React Pizza</h1>
      <div className="cart-info">
        <button onClick={toggleCart} className="cart-icon" aria-label="View Cart">
          <FaShoppingCart />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </button>
      </div>
    </div>
  );
}

export default Header;
