import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { calcQuantity } from "./extra";
import './styles/Navbar.css'

function Navbar() {
  const itemCount = useSelector(st => calcQuantity(st.cartItems));
  const cartCost = useSelector(st => st.cartCost);
  const itemUnit = itemCount === 1 ? "item" : "items";

  return (
    <nav>
      <Link to="/" className="shoply">
        SHOPLY!
      </Link>
      <ul>
        <li className="nav-1">
          <span>
            {itemCount} {itemUnit}:   ${cartCost}
          </span>
        </li>
        <li className="nav-2">
          <Link to="/cart" className="see-cart">
            See Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;