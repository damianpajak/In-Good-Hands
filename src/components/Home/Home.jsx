import { useLocation } from "react-router-dom";
import { HomeAboutMe } from "./HomeAboutMe";
import { HomeContact } from "./HomeContact";
import { HomeFooter } from "./HomeFooter";
import { HomeHeader } from "./HomeHeader/HomeHeader";
import { HomeInfo } from "./HomeInfo";
import { HomeInstruction } from "./HomeInstruction/HomeInstruction";
import { HomeWeHelp } from "./HomeWeHelp";
import { useEffect } from "react";
import { scroller } from "react-scroll";
import { HeaderNav } from "./HomeNavigation/HeaderNavigation/HeaderNav";

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
        <HomeInstruction />
      </section>
      <section id="navWhatIsItAbout">
        <HomeInfo />
      </section>
      <section id="navAboutUs">
        <HomeAboutMe />
      </section>
      <section id="navActivity">
        <HomeWeHelp />
      </section>
      <section id="navContact">
        <HomeContact />
      </section>
      <HomeFooter />
    </div>
  );
};
