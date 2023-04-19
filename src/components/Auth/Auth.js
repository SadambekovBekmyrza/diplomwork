import { signIn } from "../../firebase";

export default function Auth() {
  return (
    <div className="Auth">
      <button onClick={signIn}>Sign In</button>
    </div>
  );
}
