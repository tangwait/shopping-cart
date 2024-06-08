import { Link } from "react-router-dom";

const Cart = () => {
    return (
        <>
        <h1>Shopping Cart</h1>
        <Link to="/" className="button-link">Home</Link>
        <Link to="/shop" className="button-link">Shop</Link>
        </>
    )
}

export default Cart