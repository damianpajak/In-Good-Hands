import { Link, useLocation } from "react-router-dom";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

export const AuthPanel = () => {
  const location = useLocation();
  const isLogin = location.pathname === "/logowanie";

  return (
    <div className="auth-panel">
      <Link className="auth-panel__sign" to="/logowanie">
        Logowanie
      </Link>
      <Link className="auth-panel__sign" to="/zaloz-konto">
        Załóż konto
      </Link>

      {isLogin ? <SignIn /> : <SignUp />}
    </div>
  );
};
