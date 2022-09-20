import "./ItemsList.styles.scss";

import { useContext } from "react";
import { PopupContext } from "../../Contexts/PopupContext";

import { POPUP_ACTION_TYPES } from "../../Contexts/PopupContext";

export default function ItemsList() {
  const { popupIsOpen, type, data, setterFunc, openPopup } =
    useContext(PopupContext);

  const deleteHandler = (e) => {
    e.stopPropagation();
    const newList = data.filter((item) => {
      if (item.id == e.target.parentElement.dataset.id) {
        return false;
      } else {
        return true;
      }
    });
    setterFunc(newList);
    if (type === "ingredientsList") {
      openPopup(POPUP_ACTION_TYPES.OPEN_POPUP_INGREDIENTS, {
        data: newList,
        setterFunc,
      });
    } else if (type === "stepsList") {
      openPopup(POPUP_ACTION_TYPES.OPEN_POPUP_STEPS, {
        data: newList,
        setterFunc,
      });
    }
  };

  const completeHandler = (e) => {
    e.target.parentElement.classList.toggle("completed");
  };

  if (type === "ingredientsList") {
    return (
      <ul>
        {data.length ? (
          data.map((ing) => (
            <li data-id={ing.id}>
              <span onClick={completeHandler}>✅</span>
              <p>{ing.text}</p>
              <span onClick={deleteHandler}>❌</span>
            </li>
          ))
        ) : (
          <p>You havent added any ingredients yet...</p>
        )}
      </ul>
    );
  } else if (type === "stepsList") {
    return (
      <ol>
        {data.length ? (
          data.map((stp) => (
            <li data-id={stp.id}>
              <span onClick={completeHandler}>✅</span>
              <p>{stp.text}</p>
              <span onClick={deleteHandler}>❌</span>
            </li>
          ))
        ) : (
          <p>You havent added any steps yet...</p>
        )}
      </ol>
    );
  }
}
