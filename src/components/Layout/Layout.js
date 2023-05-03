import { NavLink } from "react-router-dom";
import Auth from "../Auth/Auth.js";
import CartLink from "../CartLink/CartLink.js";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import "./Layout.css";

export default function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <Nav />
        <Logo></Logo>
        <NavLink to="/category-list" className="categories">
          CATEGORIES
        </NavLink>
        <Auth />
        <CartLink />
      </header>
      <main>{props.children}</main>
      <footer>FOOTER</footer>
    </div>
  );
}
