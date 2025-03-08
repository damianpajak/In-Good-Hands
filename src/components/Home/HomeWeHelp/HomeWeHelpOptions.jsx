import { useState } from "react";
import { WeHelpFundations } from "./WeHelpFundations";
import { WeHelpLocal } from "./WeHelpLocal";
import { WeHelpOrganizations } from "./WeHelpOrganizations";

export const HomeWeHelpOption = () => {
  const [selected, setSelected] = useState(<WeHelpFundations />);

  const handleChoose = (value) => {
    if (value === "fundation") {
      setSelected(<WeHelpFundations />);
    } else if (value === "organization") {
      setSelected(<WeHelpOrganizations />);
    } else if (value === "local") {
      setSelected(<WeHelpLocal />);
    } else {
      console.error("Coś poszło nie tak!");
    }
  };

  return (
    <div className="home-WeHelpOption">
      <div className="home-WeHelpOption__items">
        <span
          className={`home-WeHelpOption__item ${
            selected.type === WeHelpFundations ? "active" : ""
          }`}
          data-value="fundation"
          onClick={(e) => handleChoose(e.target.dataset.value)}
        >
          Fundacjom
        </span>
        <span
          className={`home-WeHelpOption__item ${
            selected.type === WeHelpOrganizations ? "active" : ""
          }`}
          data-value="organization"
          onClick={(e) => handleChoose(e.target.dataset.value)}
        >
          Organizacjom pozarządowym
        </span>
        <span
          className={`home-WeHelpOption__item ${
            selected.type === WeHelpLocal ? "active" : ""
          }`}
          data-value="local"
          onClick={(e) => handleChoose(e.target.dataset.value)}
        >
          Lokalnym zbiórkom
        </span>
      </div>
      <div >{selected}</div>
    </div>
  );
};
