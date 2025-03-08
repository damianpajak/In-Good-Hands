export const WeHelpReceiver = ({ title, description, items }) => {
  return (
    <div className="home-WeHelpReceiver">
      <div>
        <h1 className="home-WeHelpReceiver__title">{title}</h1>
        <p className="home-WeHelpReceiver__targets">{description}</p>
      </div>
      <div>
        <p className="home-WeHelpReceiver__items">{items}</p>
      </div>
    </div>
  );
};
