import { useContext } from "react";
import { AppContext } from "../../App";
import "./Auth.css";
import { logIn, logOut } from "../../firebase";

export default function Auth() {
  const { user } = useContext(AppContext);

  return (
    <div className="Auth">
      {!user ? <button onClick={logIn}>Sign in</button> : null}
      {user ? <button onClick={logOut}>Sign out:</button> : null}
      {user ? <span>{user.displayName}</span> : null}
    </div>
  );
}
