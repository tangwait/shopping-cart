import { Link } from "react-router-dom";
import { useShoppingCart } from './components/useShoppingCart';

const Cart = () => {
  const { cart, removeFromCart } = useShoppingCart();

  return (
    <>
      <h1>Shopping Cart</h1>
      <Link to="/" className="button-link">Home</Link>
      <Link to="/shop" className="button-link">Shop</Link>
      <div className='cart'>
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              <img src={item.imageUrl} alt={item.title} style={{ width: '100px', height: '100px' }} />
              <p className='cart-item-title'>{item.title}</p>
              <p className='cart-item-quantity'>Quantity: {item.quantity}</p>
              <p className='cart-item-price'>Price: ${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Cart;
