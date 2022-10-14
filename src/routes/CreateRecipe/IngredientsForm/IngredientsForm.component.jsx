import "./IngredientsForm.styles.scss";

import { useRef } from "react";
import { useState } from "react";
import { useContext } from "react";
import { PopupContext } from "../../../Contexts/PopupContext";

import { POPUP_ACTION_TYPES } from "../../../Contexts/PopupContext";

export default function IngredientsForm({
  ingredientsList,
  setIngredientsList,
}) {
  const [ingredient, setIngredient] = useState("");

  const { openPopup } = useContext(PopupContext);

  const ingredientInput = useRef(null);

  const addHandler = (e) => {
    e.preventDefault();
    let text = ingredient.trim().toUpperCase();

    if (text && !ingredientsList.includes(text)) {
      setIngredientsList((oldState) => [...oldState, { text, id: Date.now() }]);
    }
    setIngredient("");
    ingredientInput.current.focus();
  };

  return (
    <section className="IngredientsForm">
      <label className="IngredientsForm__label">
        <p>Add ingredients of your recipe:</p>
        <div className="IngredientsForm__label--input">
          <textarea
            type="text"
            onChange={(e) => {
              setIngredient(e.target.value);
            }}
            value={ingredient}
            ref={ingredientInput}
            placeholder="Type here"
          />
          <button onClick={addHandler}>Add</button>
        </div>
      </label>
      <p
        onClick={() => {
          openPopup(POPUP_ACTION_TYPES.OPEN_POPUP_INGREDIENTS, {
            data: ingredientsList,
            setterFunc: setIngredientsList,
          });
        }}
      >
        Number of ingredients added: {ingredientsList.length} <span>⌃</span>
      </p>
    </section>
  );
}
