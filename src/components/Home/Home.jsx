import { HomeAboutMe } from "./HomeAboutMe";
import { HomeContact } from "./HomeContact";
import { HomeFooter } from "./HomeFooter";
import { HomeHeader } from "./HomeHeader";
import { HomeInfo } from "./HomeInfo";
import { HomeInstruction } from "./HomeInstruction";
import { HomeNavigation } from "./HomeNavigation";
import { HomeWeHelp } from "./HomeWeHelp";

export const Home = () => {
  return (
    <div>
      <HomeNavigation />
      <HomeHeader />
      <HomeInfo />
      <HomeInstruction />
      <HomeAboutMe />
      <HomeWeHelp />
      <HomeContact />
      <HomeFooter />
    </div>
  );
};
