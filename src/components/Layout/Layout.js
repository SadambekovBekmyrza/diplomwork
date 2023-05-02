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
        <div className="header-bottom">
          <Logo></Logo>
          <NavLink to="/category-list">CATEGORIES</NavLink>
          <Auth />
          <CartLink />
        </div>
      </header>
      <main>{props.children}</main>
      <footer>FOOTER</footer>
    </div>
  );
}
