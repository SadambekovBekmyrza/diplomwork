import { useContext } from "react";
import "./CartLink.css";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/icon-cart.png";

export default function CartLink() {
  const { cart } = useContext(AppContext);

  const total = Object.values(cart).reduce((acc, num) => acc + num, 0);

  return (
    <div className="CartLink">
      <NavLink to="/cart">
        <img src={Logo} alt="cart-logo" />
        CART({total})
      </NavLink>
    </div>
  );
}
