import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="Nav">
      <ul className="nav-list">
        <li>
          <NavLink className="click" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="click" to="/contacts">
            Contacts
          </NavLink>
        </li>
        <li>
          <NavLink className="click" to="/about">
            About US
          </NavLink>
        </li>
        <li>
          <NavLink className="click" to="/payment">
            Payment
          </NavLink>
        </li>
        <li>
          <NavLink className="click" to="/delivery">
            Delivery
          </NavLink>
        </li>
        <li>
          <NavLink className="click" to="/address">
            Address
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
