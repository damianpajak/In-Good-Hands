import { PaginatedItems } from "./PaginatedItems";
import { WeHelpReceiver } from "./WeHelpReceiver";

export const WeHelpLocal = () => {
  const items = [
    <WeHelpReceiver
      key="1"
      title="Zbiórka “Lorem Ipsum 1”"
      description="Quis varius quam quisque id diam vel quam elementum pulvinar."
      items="Egestas, sed, tempus"
    />,
    <WeHelpReceiver
      key="2"
      title="Zbiórka “Lorem Ipsum 2”"
      description="Hendrerit gravida rutrum quisque non tellus orci ac auctor augue."
      items="Ut, aliquam, purus, sit, amet"
    />,
    <WeHelpReceiver
      key="3"
      title="Zbiórka “Lorem Ipsum 3”"
      description="Scelerisque in dictum non consectetur a erat nam."
      items="Mi, quis, hendrerit, dolor"
    />,
  ];

  return (
    <div className="home-WeHelpDetails">
      <p className="home-WeHelpDetails__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </p>
      <div className="home-WeHelpDetails__elements"></div>
      <PaginatedItems itemsPerPage={3} items={items} />
    </div>
  );
};
