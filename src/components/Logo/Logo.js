import "./Logo.css";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
export default function logo() {
  return (
    <div className="Logo">
      <NavLink to="/">
        <img src={Logo} alt="logo" className="logo" />
      </NavLink>
    </div>
  );
}
