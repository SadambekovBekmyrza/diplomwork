import Logo from "../Logo/Logo";
import CartLink from "../CartLink/CartLink.js";
import Nav from "../Nav/Nav";
import "./Layout.css";

export default function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <div className="header-top">
          <Nav />
        </div>
        <div className="header-bottom">
          <Logo />
          <CartLink />
        </div>
      </header>
      <main>{props.children}</main>
      <footer>FOOTER</footer>
    </div>
  );
}
