import { NavLink } from "react-router-dom";
import Auth from "../Auth/Auth.js";
import Nav from "../Nav/Nav";
import "./Layout.css";

export default function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <Nav />
        <NavLink to="/category-list" className="categories">
          CATEGORIES
        </NavLink>
        <Auth />
      </header>
      <main>{props.children}</main>
      <footer>FOOTER</footer>
    </div>
  );
}
