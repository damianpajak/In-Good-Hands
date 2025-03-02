import { useLocation, useNavigate } from "react-router-dom";
import { AuthPanel } from "../Authentication/AuthPanel";
import { HeaderMenu } from "./HeaderMenu";

export const HeaderNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  return (
    <nav className="home-navigation">
      <AuthPanel />
      <HeaderMenu nav={handleNavigation} />
    </nav>
  );
};
