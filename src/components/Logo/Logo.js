import "./Logo.css";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

export default function logo() {
  return (
    <div className="Logo">
      <NavLink to="/">
        <img src={Logo} alt="logo" className="logo" />
      </NavLink>
    </div>
  );
}
