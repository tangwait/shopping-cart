import './App.css'
import { Link } from "react-router-dom";



function Shop() {

  return (
    <>
      <h1>Shop clothes and find amazing deals</h1>
      <Link to="/" className="button-link">Home</Link>
      <Link to="/cart" className="button-link">Cart</Link>
    </>
  )
}

export default Shop
