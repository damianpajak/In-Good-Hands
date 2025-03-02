import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AuthPanel } from "./Authentication/AuthPanel";
import { Home } from "../Home";
import { HeaderNav } from "./HeaderNavigation/HeaderNav";

export const HomeNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const allowedPaths = [
      "/",
      "/logowanie",
      "/zaloz-konto",
      "/o-co-chodzi",
      "/o-nas",
      "/fundacja-i-organizacje",
      "/kontakt",
    ];

    if (!allowedPaths.includes(location.pathname)) {
      navigate("/", { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <div>
      <HeaderNav />
      <Routes>
        <Route path="/logowanie" element={<AuthPanel page="logowanie" />} />
        <Route path="/zaloz-konto" element={<AuthPanel page="zaloz-konto" />} />
        <Route path="/o-co-chodzi" element={<Home />} />
        <Route path="/o-nas" element={<Home />} />
        <Route path="/fundacja-i-organizacje" element={<Home />} />
        <Route path="/kontakt" element={<Home />} />
      </Routes>
    </div>
  );
};
