import "./Logo.css";
import Logo from "../../assets/logo.png";
export default function logo() {
  return (
    <div className="Logo">
      <img src={Logo} alt="logo" className="logo" />
    </div>
  );
}
