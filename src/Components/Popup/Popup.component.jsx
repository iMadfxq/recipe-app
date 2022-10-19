import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { PopupContext } from "../../Contexts/PopupContext";
import { POPUP_ACTION_TYPES } from "../../Contexts/PopupContext";
import { UserContext } from "../../Contexts/UserContext";
import ItemsList from "../ItemsList/ItemsList.component";

import "./Popup.styles.scss";

export default function Popup() {
  const { popupIsOpen, type, data, setterFunc, openPopup, closePopup } =
    useContext(PopupContext);

  const [authorName, setAuthorName] = useState('')

  const {setAuthor} = useContext(UserContext)

  if (popupIsOpen) {
    if (type === "ingredientsList" || type === "stepsList") {
      return (
        <section className="popup">
          <section>
            <span
              onClick={() => {
                closePopup();
              }}
            >
              x
            </span>
            <h2>{type === "ingredientsList" ? "Ingredients:" : "Steps"}</h2>
            <ItemsList />
          </section>
        </section>
      );
    }

    if (type == "author") {
      return (
        <section className="popup">
          <section>
            <span
              onClick={() => {
                closePopup();
              }}
            >
              x
            </span>
            <h2>Type your username (it will be used to show you as the author of every recipe you create)</h2>
            <form onSubmit={(e) => {
              e.preventDefault()
              setAuthor(authorName)
              localStorage.setItem('author', authorName)
              closePopup()
            }}>
            <input type="text" value={authorName} onChange={(e) => {
              setAuthorName(e.target.value)
            }}/>
            <button>Done</button>
            </form>
          </section>
        </section>
      );
    }
  }
}
