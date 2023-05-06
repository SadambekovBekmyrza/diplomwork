import Logo from "../Logo/Logo";
import CartLink from "../CartLink/CartLink.js";
import Nav from "../Nav/Nav";
import "./Layout.css";
import { useContext } from "react";
import { AppContext } from "../../App";
import { logIn, logOut } from "../../firebase";

export default function Layout(props) {
  const { user } = useContext(AppContext);
  return (
    <div className="Layout">
      <header>
        <div className="header-top">
          <Nav />
        </div>
        <div className="header-bottom">
          <Logo />
          <div className="auth">
            {!user ? <button onClick={logIn}>Sign in</button> : null}
            {user ? <button onClick={logOut}>Sign out:</button> : null}
          </div>
          <CartLink />
        </div>
      </header>
      <main>{props.children}</main>
      <footer>FOOTER</footer>
    </div>
  );
}
