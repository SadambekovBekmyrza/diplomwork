import { NavLink } from "react-router-dom";
import CartLink from "../CartLink/CartLink.js";
import Auth from "../Auth/Auth";
import "./Nav.css";

export default function Nav() {
  const burgerList = document.querySelector(".burger-list");
  function onClickBtn() {
    burgerList.classList.toggle("block");
  }
  return (
    <nav className="Nav">
      <ul className="nav-list">
        <li>
          <button className="burger" onClick={onClickBtn}></button>
        </li>
        <li className="list">
          <NavLink to="/" className="home">
            Home
          </NavLink>
        </li>
        <li className="list">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="list">
          <NavLink to="/info">Information</NavLink>
        </li>
        <li className="list">
          <NavLink to="/category-list">Categories</NavLink>
        </li>

        <div className="burger-list">
          <li>
            <NavLink to="/" className="home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/info">Information</NavLink>
          </li>
          <li>
            <NavLink to="/category-list">Categories</NavLink>
          </li>
          <div>
            <CartLink />
            <Auth />
          </div>
        </div>
      </ul>
    </nav>
  );
}
