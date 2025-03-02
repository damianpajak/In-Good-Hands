export const HeaderMenu = ({ nav }) => {
  return (
    <div className="menu-panel">
      <span className="menu-panel__item" onClick={() => nav("/")}>
        Start
      </span>
      <span className="menu-panel__item" onClick={() => nav("/o-co-chodzi")}>
        O co chodzi?
      </span>
      <span className="menu-panel__item" onClick={() => nav("/o-nas")}>
        O nas
      </span>
      <span
        className="menu-panel__item"
        onClick={() => nav("/fundacja-i-organizacje")}
      >
        Fundacja i organizacje
      </span>
      <span className="menu-panel__item" onClick={() => nav("/kontakt")}>
        Kontakt
      </span>
    </div>
  );
};
