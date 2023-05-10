import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import "./Auth.css";
import { logIn, logOut } from "../../firebase";

export default function Auth() {
  const { user } = useContext(AppContext);

  return (
    <div className="Auth">
      {!user ? <button onClick={logIn}>Sign in</button> : null}
      {user ? <button onClick={logOut}>Sign out:</button> : null}
      {user ? (
        <span>
          <Link to="/orders">{user.displayName}</Link>
        </span>
      ) : null}
    </div>
  );
}
