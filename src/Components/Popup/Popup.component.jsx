import { useState } from "react";
import { useRef } from "react";
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

  const [authorName, setAuthorName] = useState("");
  const [authorError, setAuthorError] = useState(null)

  const inputRef = useRef(null);

  const { setAuthor } = useContext(UserContext);

  useEffect(() => {
    if (type == "author") {
      inputRef.current.focus();
    }
  }, [type]);

  if (popupIsOpen) {
    if (type === "ingredientsList" || type === "stepsList") {
      return (
        <section className="popup" onClick={(e) => {
          e.stopPropagation()
          closePopup()
        }}>
          <section className="popup__message">
            <span
              className="popup__message--close"
              onClick={() => {
                closePopup();
              }}
            >
              ⓧ
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
          <section className="popup__message">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const loweredAuthor = authorName.toLowerCase()
                if(loweredAuthor !== 'imadfxq' && loweredAuthor != 'developer' && loweredAuthor != 'dev' && loweredAuthor != 'oscar gomez' && loweredAuthor != 'oscargomez' && loweredAuthor != 'imadfxq(oscar gomez)' && loweredAuthor != 'imadfxq(developer)') {
                  setAuthor(authorName);
                  localStorage.setItem("author", authorName);
                  inputRef.current.blur();
                  closePopup();
                  return
                  
                } else {
                  setAuthorName('')
                  setAuthorError(true)
                  return
                }
                return
              }}
            >
              <label>
                <h2>Type your username:</h2>
                <span>
                  (it will be used to show you as the author of every recipe you
                  create)
                </span>

                <input
                  ref={inputRef}
                  type="text"
                  value={authorName}
                  placeholder='Type here...'
                  onChange={(e) => {
                    setAuthorName(e.target.value);
                  }}
                />
                <button>Done</button>
                {authorError && <span style={{color: 'red', marginTop: '10px'}}>That username is not allowed, try another one</span>}
              </label>
            </form>
          </section>
        </section>
      );
    }
  }
}
