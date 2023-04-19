import Auth from "../Auth/Auth.js";
import CartLink from "../CartLink/CartLink.js";
import CategoryList from "../CategoryList/CategoryList.js";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import "./Layout.css";

export default function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <Nav />
        <div>
          <Logo></Logo>
          <CartLink />
          <Auth />
        </div>
      </header>
      <aside>
        <CategoryList />
      </aside>
      <main>{props.children}</main>
      <footer>FOOTER</footer>
    </div>
  );
}
