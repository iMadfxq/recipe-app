import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { PopupContext } from "../../Contexts/PopupContext";
import { POPUP_ACTION_TYPES } from "../../Contexts/PopupContext";
import ItemsList from "../ItemsList/ItemsList.component";

import "./Popup.styles.scss";

export default function Popup() {
  const { popupIsOpen, type, data, setterFunc, openPopup, closePopup } = useContext(PopupContext);
  
  
  if (popupIsOpen) {
        return (
          <section>
            <section>
              <span onClick={() => {closePopup()}}>x</span>
              <h2>{type === 'ingredientsList' ? "Ingredients:" : "Steps"}</h2>
              <ItemsList />
            </section>
          </section>
        );
}
}
