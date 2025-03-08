import { AboutUsTxt } from "./AboutUsTxt";

export const HomeAboutUs = () => {
  return (
    <div className="home-aboutUs">
      <AboutUsTxt />
      <img className="home-aboutUs__image" src="/People.png" alt="people" />
    </div>
  );
};
