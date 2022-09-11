import { useContext } from "react";
import { PopupContext } from "../../Contexts/PopupContext";
import "./Popup.styles.scss";

import { POPUP_ACTION_TYPES } from "../../Contexts/PopupContext";

export default function Popup() {
  const { popupIsOpen, type, data} = useContext(PopupContext);
  if (popupIsOpen) {
    switch (type) {
      case "ingredientsList":
        return (
          <section>
            <section>
              <h2>Ingredients:</h2>
              <ul>
                {data.map((ing) => <li>{ing}</li>)}
              </ul>
            </section>
          </section>
        );
      default: 
        return <></>
    }
  }
  return;
}
