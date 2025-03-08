import { WeHelpReceiver } from "./WeHelpReceiver";
import { PaginatedItems } from "./PaginatedItems";

export const WeHelpFundations = () => {
  const items = [
    <WeHelpReceiver
      key="1"
      title="Fundacja “Dbam o Zdrowie”"
      description="Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej."
      items="ubrania, jedzenie, sprzęt AGD, meble, zabawki"
    />,
    <WeHelpReceiver
      key="2"
      title="Fundacja “Dla dzieci”"
      description="Cel i misja: Pomoc dzieciom z ubogich rodzin."
      items="ubrania, meble, zabawki"
    />,
    <WeHelpReceiver
      key="3"
      title="Fundacja “Bez domu”"
      description="Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania."
      items="ubrania, jedzenie, ciepłe koce"
    />,
    <WeHelpReceiver
      key="4"
      title="Zbiórka “Lorem Ipsum 4”"
      description="Quis varius quam quisque id diam vel quam elementum pulvinar."
      items="Egestas, sed, tempus"
    />,
    <WeHelpReceiver
      key="5"
      title="Zbiórka “Lorem Ipsum 5”"
      description="Hendrerit gravida rutrum quisque non tellus orci ac auctor augue."
      items="Ut, aliquam, purus, sit, amet"
    />,
    <WeHelpReceiver
      key="6"
      title="Zbiórka “Lorem Ipsum 6”"
      description="Scelerisque in dictum non consectetur a erat nam."
      items="Mi, quis, hendrerit, dolor"
    />,
    <WeHelpReceiver
      key="7"
      title="Zbiórka “Lorem Ipsum 7”"
      description="Quis varius quam quisque id diam vel quam elementum pulvinar."
      items="Egestas, sed, tempus"
    />,
    <WeHelpReceiver
      key="8"
      title="Zbiórka “Lorem Ipsum 8”"
      description="Hendrerit gravida rutrum quisque non tellus orci ac auctor augue."
      items="Ut, aliquam, purus, sit, amet"
    />,
    <WeHelpReceiver
      key="9"
      title="Zbiórka “Lorem Ipsum 9”"
      description="Scelerisque in dictum non consectetur a erat nam."
      items="Mi, quis, hendrerit, dolor"
    />,
  ];

  return (
    <div className="home-WeHelpDetails">
      <p className="home-WeHelpDetails__description">
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
        potrzebują.
      </p>
      <PaginatedItems itemsPerPage={3} items={items} />
    </div>
  );
};
