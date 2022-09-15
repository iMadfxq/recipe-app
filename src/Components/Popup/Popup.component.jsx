import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { PopupContext } from "../../Contexts/PopupContext";
import { POPUP_ACTION_TYPES } from "../../Contexts/PopupContext";
import ItemsList from "../ItemsList/ItemsList.component";
import ListItem from "../ListItem/ListItem.component";

import "./Popup.styles.scss";

export default function Popup() {
  const { popupIsOpen, type, data, setterFunc, openPopup } = useContext(PopupContext);
  
  const [localListOfItems, setLocalListOfItems] = useState(data)

  useEffect(() => {
    setLocalListOfItems(data)
    setterFunc([...data])
  }, [data])

  const closePopupHandler = () => {
    openPopup(POPUP_ACTION_TYPES.CLOSE_POPUP, localListOfItems)
  }
  
  if (popupIsOpen) {
        return (
          <section>
            <section>
              <h2>Steps:</h2>
              <ItemsList />
            </section>
          </section>
        );
}
}
