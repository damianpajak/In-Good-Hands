import { InstructionSteps } from "./InstructionSteps";

export const HomeInstruction = () => {
  return (
    <div className="home-instruction">
      <span className="home-instruction__title">Wystarczą 4 proste kroki</span>
      <img
        className="home-instruction__image"
        src="/Decoration.png"
        alt="Dekoracja"
      />
      <InstructionSteps />
      <span className="home-instruction__btn">ODDAJ RZECZY</span>
    </div>
  );
};
