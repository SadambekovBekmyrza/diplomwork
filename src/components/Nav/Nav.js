import { NavLink } from "react-router-dom";
import Auth from "../Auth/Auth.js";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="Nav">
      <ul className="nav-list">
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
        <li>
          <NavLink to="/category-list">Categories</NavLink>
        </li>
        <Auth />
      </ul>
    </nav>
  );
}
