import Logo from "../Logo/Logo";
import CartLink from "../CartLink/CartLink.js";
import { logIn, logOut } from "../../firebase";
import { useContext } from "react";
import { AppContext } from "../../App";
import Nav from "../Nav/Nav";
import "./Layout.css";

export default function Layout(props) {
  const { user } = useContext(AppContext);

  function AddClassClick() {
    const auth = document.querySelector(".Auth");
    auth.classList.toggle("active");
  }

  return (
    <div className="Layout">
      <header>
        <div className="header-top">
          <Nav />
        </div>
        <div className="header-bottom">
          <Logo />
          <div className="auth" onClick={AddClassClick}>
            {!user ? (
              <button onClick={logIn} className="signin">
                Sign in
              </button>
            ) : null}
            {user ? (
              <button onClick={logOut} className="signout">
                Sign out
              </button>
            ) : null}
          </div>
          <CartLink />
        </div>
      </header>
      <main>{props.children}</main>
      <footer>FOOTER</footer>
    </div>
  );
}
