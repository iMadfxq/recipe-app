import "./ItemsList.styles.scss";

import { useContext } from "react";
import { PopupContext } from "../../Contexts/PopupContext";

import ListItem from "../ListItem/ListItem.component";

export default function ItemsList() {
  const { popupIsOpen, type, data, setterFunc, openPopup } =
    useContext(PopupContext);

  if (type === "ingredientsList") {
    return (
      <ul>
        {data.length &&
          data.map((ing) => (
            <ListItem
              key={ing.id}
              item={ing}
            />
          ))}
      </ul>
    );
  } else if (type === "stepsList") {
    return (
      <ol>
        {data.length &&
          data.map((stp) => (
            <ListItem
              key={stp.id}
              item={stp}
            />
          ))}
      </ol>
    );
  }
}
