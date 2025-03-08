export const HomeContactForm = () => {
  return (
    <div className="home-ContactForm">
      <h1 className="home-ContactForm__title">Skontaktuj się z nami</h1>
      <div className="home-ContactForm__image">
        <img src="/Decoration.png" alt="dokoracja" />
      </div>
      <form className="home-ContactForm__form">
        <div className="home-ContactForm__basicData">
          <label className="home-ContactForm__input">
            Wpisz swoje imię
            <input type="text" name="name" placeholder="Krzysztof" />
          </label>
          <label className="second-input home-ContactForm__input">
            <p>Wpisz swój email</p>
            <input
              className="second-input"
              type="e-mail"
              name="e-mail"
              placeholder="abc@xyz.pl"
            />
          </label>
        </div>
        <label>
          Wpisz swoją wiadomość
          <textarea
            type="text"
            name="description"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </label>
        <div className="home-ContactForm__button">
          <button>Wyślij</button>
        </div>
      </form>
    </div>
  );
};
