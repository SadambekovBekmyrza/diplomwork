import { NavLink } from "react-router-dom";
import CartLink from "../CartLink/CartLink.js";
import Logo from "../Logo/Logo";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="Nav">
      <ul className="nav-list">
        <Logo />
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li>
          <NavLink to="/delivery-payment">Delivery_Payment</NavLink>
        </li>
        <CartLink />
      </ul>
    </nav>
  );
}
