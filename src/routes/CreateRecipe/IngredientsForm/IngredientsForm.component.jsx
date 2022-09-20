import './IngredientsForm.styles.scss'

import { useRef } from "react";
import { useState } from "react";
import { useContext } from 'react';
import { PopupContext } from '../../../Contexts/PopupContext';

import { POPUP_ACTION_TYPES } from '../../../Contexts/PopupContext';

export default function IngredientsForm({ingredientsList, setIngredientsList}) {
  const [ingredient, setIngredient] = useState("");

  const {openPopup} = useContext(PopupContext)

  const ingredientInput = useRef(null);

  const addHandler = (e) => {
    e.preventDefault()
    let text = ingredient.trim().toUpperCase();

    if (text && !ingredientsList.includes(text)) {
      setIngredientsList((oldState) => [...oldState, {text, id: Date.now()}]);
    }
    setIngredient("");
    ingredientInput.current.focus();
  };

  return (
    <section>
      <section >
        <label>
          <p>Ingredients:</p>
          <textarea
            type="text"
            onChange={(e) => {
              setIngredient(e.target.value);
            }}
            value={ingredient}
            ref={ingredientInput}
          />
          <button onClick={addHandler}>Add</button>
        </label>
      </section>
      <p onClick={() => {openPopup(POPUP_ACTION_TYPES.OPEN_POPUP_INGREDIENTS ,{data:ingredientsList, setterFunc: setIngredientsList})}}>
        Number of ingredients: {ingredientsList.length}
      </p>
    </section>
  );

}