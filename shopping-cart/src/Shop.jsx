import './App.css'
import { Link } from "react-router-dom";
import Products from './components/Products'



function Shop() {

  return (
    <>
    <div className='header'>
      <div className='title'>
        <h1>Shop clothes and find amazing deals</h1>
      </div>
      <div className='links'>
        <Link to="/" className="button-link">Home</Link>
        <Link to="/cart" className="button-link">Cart</Link>
      </div>
    </div>
    <div className='shop'>
      <div className='shop-body'>
        <Products/>
      </div>
    </div>
    </>
  )
}

export default Shop
