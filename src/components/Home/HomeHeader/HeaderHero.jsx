import { useNavigate } from "react-router-dom";

export const HeaderHero = () => {
  const navigate = useNavigate();

  return (
    <div className="header-hero">
      <h1 className="header-hero__txt">Zacznij pomagać!</h1>
      <h1 className="header-hero__txt">
        Oddaj niechciane rzeczy w zaufane ręce
      </h1>
      <img
        className="header-hero__img"
        src="/public/Decoration.png"
        alt="decoration"
      />
      <div className="header-hero__btns">
        <span
          className="header-hero__btn"
          onClick={() => navigate("/logowanie")}
        >
          ODDAJ RZECZY
        </span>
        <span
          className="header-hero__btn"
          onClick={() => navigate("/zaloz-konto")}
        >
          ZORGANIZUJ ZBIÓRKĘ
        </span>
      </div>
    </div>
  );
};
