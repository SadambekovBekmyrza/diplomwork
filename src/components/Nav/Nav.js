import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="Nav">
      <ul className="nav-list">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li>
          <NavLink to="/about">About US</NavLink>
        </li>
        <li>
          <NavLink to="/payment">Payment</NavLink>
        </li>
        <li>
          <NavLink to="/delivery">Delivery</NavLink>
        </li>
        <li>
          <NavLink to="/address">Address</NavLink>
        </li>
      </ul>
    </nav>
  );
}
