import { HeaderHero } from "./HeaderHero";
import { HeaderImg } from "./HeaderImg";

export const HomeHeader = () => {
  return (
    <div className="home-header container">
      <HeaderImg />
      <HeaderHero />
    </div>
  );
};
