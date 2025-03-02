import { InfoColumn } from "./InfoColumn";

export const HomeInfo = () => {
  const columnDescription =
    "Lorem ipsum sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.";

  return (
    <div className="home-info">
      <div className="home-info__columns container">
        <InfoColumn
          num="10"
          title="ODDANYCH WORKÓW"
          txt={columnDescription}
          style="home-info__column"
          numStyle="info-column__number"
          titleStyle="info-column__title"
          txtStyle="info-column__text"
        />
        <InfoColumn
          num="5"
          title="WSPARTYCH ORGANIZACJI"
          txt={columnDescription}
          style="home-info__column"
          numStyle="info-column__number"
          titleStyle="info-column__title"
          txtStyle="info-column__text"
        />
        <InfoColumn
          num="7"
          title="ZORGANIZOWANYCH ZBIÓREK"
          txt={columnDescription}
          style="home-info__column"
          numStyle="info-column__number"
          titleStyle="info-column__title"
          txtStyle="info-column__text"
        />
      </div>
    </div>
  );
};
