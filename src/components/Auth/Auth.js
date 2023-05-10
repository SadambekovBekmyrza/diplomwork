import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import "./Auth.css";

export default function Auth() {
  const { user } = useContext(AppContext);

  return (
    <div className="Auth">
      {user ? (
        <span>
          <Link to="/orders">{user.displayName}</Link>
        </span>
      ) : null}
    </div>
  );
}
