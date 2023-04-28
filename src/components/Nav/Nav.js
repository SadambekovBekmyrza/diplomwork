import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  let toggleMenu = document.querySelector(".toggleMenu");
  let navigation = document.querySelector(".navigation");

  toggleMenu.onclick = function () {
    navigation.classList.toggle("active");
  };

  return (
    <nav className="Nav">
      <ul className="navigation">
        <li className="NavItem">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/about">About US</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/payment">Payment</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/delivery">Delivery</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/address">Address</NavLink>
        </li>
        <span className="toggleMenu"></span>
      </ul>
    </nav>
  );
}
