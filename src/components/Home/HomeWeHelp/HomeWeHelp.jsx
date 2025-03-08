import { HomeWeHelpOption } from "./HomeWeHelpOptions";

export const HomeWeHelp = () => {
  return (
    <div className="home-WeHelp">
      <h1 className="home-WeHelp__title">Komu pomagamy?</h1>
      <img
        className="home-WeHelp__image"
        src="/Decoration.png"
        alt="dekoracja"
      />
      <HomeWeHelpOption />
    </div>
  );
};
