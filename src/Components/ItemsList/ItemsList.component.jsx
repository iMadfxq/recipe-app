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
      if (item.id == e.target.parentElement.parentElement.dataset.id) {
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

  if (type === "ingredientsList") {
    return (
      <ul>
        {data.length ? (
          data.map((ing) => (
            <li key={ing.id} data-id={ing.id}>
              <p>{ing.text}  <span onClick={(e) => {
                deleteHandler(e)
                console.log(ing.text)
              }}>❌</span></p>
             
            </li>
          ))
        ) : (
          <p style={{fontSize: '1.4rem'}}>You havent added any ingredients yet...</p>
        )}
      </ul>
    );
  } else if (type === "stepsList") {
    return (
      <ol>
        {data.length ? (
          data.map((stp) => (
            <li data-id={stp.id} key={stp.id}>
              <p>{stp.text} <span onClick={deleteHandler}>❌</span></p>
              
            </li>
          ))
        ) : (
          <p style={{fontSize: '1.4rem'}}>You havent added any steps yet...</p>
        )}
      </ol>
    );
  }
}
