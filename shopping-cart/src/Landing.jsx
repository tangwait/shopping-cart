import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div>
        <h1>Welcome to Tangwait&apos;s Shop</h1>
        <Link to="shop" className="button-link">Check out the shop!</Link>
      </div>
    )
}

export default Landing;