import { useLocation } from "react-router-dom";
import { HomeContact } from "./HomeContact";
import { HomeHeader } from "./HomeHeader/HomeHeader";
import { HomeInstruction } from "./HomeInstruction/HomeInstruction";
import { HomeWeHelp } from "./HomeWeHelp/HomeWeHelp";
import { useEffect } from "react";
import { scroller } from "react-scroll";
import { HeaderNav } from "./HomeNavigation/HeaderNavigation/HeaderNav";
import { HomeInfo } from "./HomeInfo/HomeInfo";
import { HomeAboutUs } from "./HomeAboutUs/HomeAboutUs";

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const pathToSection = {
      "/": "navStart",
      "/o-co-chodzi": "navWhatIsItAbout",
      "/o-nas": "navAboutUs",
      "/fundacja-i-organizacje": "navActivity",
      "/kontakt": "navContact",
    };

    const sectionId = pathToSection[location.pathname];

    if (sectionId && document.getElementById(sectionId)) {
      setTimeout(() => {
        scroller.scrollTo(sectionId, { smooth: true, duration: 500 });
      }, 200);
    }
  }, [location.pathname]);

  return (
    <div>
      <HeaderNav />
      <section id="navStart">
        <HomeHeader />
      </section>
      <section>
        <HomeInfo />
      </section>
      <section id="navWhatIsItAbout">
        <HomeInstruction />
      </section>
      <section id="navAboutUs">
        <HomeAboutUs />
      </section>
      <section id="navActivity">
        <HomeWeHelp />
      </section>
      <section id="navContact">
        <HomeContact />
      </section>
    </div>
  );
};
