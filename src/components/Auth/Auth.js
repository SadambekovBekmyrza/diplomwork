import { useContext } from "react";
import { signIn, signOff } from "../../firebase";
import { AppContext } from "../../App";
import "./Auth.css";

export default function Auth() {
  const { user } = useContext(AppContext);

  return (
    <div className="Auth">
      {!user ? <button onClick={signIn}>Sign in</button> : null}
      {user ? <button onClick={signOff}>Sign out:</button> : null}
      {user ? <span>{user.displayName}</span> : null}
    </div>
  );
}
