import { InstructionColumn } from "./InstructionColumn";

export const HomeInstruction = () => {
  const columnDescription =
    "Lorem ipsum sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.";

  return (
    <div className="home-instruction">
      <div className="home-instruction__columns container">
        <InstructionColumn
          num="10"
          title="ODDANYCH WORKÓW"
          txt={columnDescription}
          style="home-instruction__column"
          numStyle="instruction-column__number"
          titleStyle="instruction-column__title"
          txtStyle="instruction-column__text"
        />
        <InstructionColumn
          num="5"
          title="WSPARTYCH ORGANIZACJI"
          txt={columnDescription}
          style="home-instruction__column"
          numStyle="instruction-column__number"
          titleStyle="instruction-column__title"
          txtStyle="instruction-column__text"
        />
        <InstructionColumn
          num="7"
          title="ZORGANIZOWANYCH ZBIÓREK"
          txt={columnDescription}
          style="home-instruction__column"
          numStyle="instruction-column__number"
          titleStyle="instruction-column__title"
          txtStyle="instruction-column__text"
        />
      </div>
    </div>
  );
};
