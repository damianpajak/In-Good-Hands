import { InstructionStep } from "./InstructionStep";

export const InstructionSteps = () => {
  return (
    <div className="home-instruction__steps">
      <InstructionStep
        style="home-instruction__step"
        styleTitle="home-instruction__step-title"
        styleDescription="home-instruction__step-description"
        img="/Shirt.png"
        title="Wybierz rzeczy"
        description="ubrania, zabawki, sprzęt i inne"
      />
      <InstructionStep
        style="home-instruction__step"
        styleTitle="home-instruction__step-title"
        styleDescription="home-instruction__step-description"
        img="/ArrowDown.png"
        title="Spakuj je"
        description="skorzystaj z worków na śmieci"
      />
      <InstructionStep
        style="home-instruction__step"
        styleTitle="home-instruction__step-title"
        styleDescription="home-instruction__step-description"
        img="/Search.png"
        title="Zdecyduj komu chcesz oddać"
        description="wybierz zaufane miejsce"
      />
      <InstructionStep
        style="home-instruction__step"
        styleTitle="home-instruction__step-title"
        styleDescription="home-instruction__step-description"
        img="/Reroll.png"
        title="Zamów kuriera"
        description="kurier przyjedzie w dogodnym terminie"
      />
    </div>
  );
};
