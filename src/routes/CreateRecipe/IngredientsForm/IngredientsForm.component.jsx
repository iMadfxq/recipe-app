import './IngredientsForm.styles.scss'

import { useRef } from "react";
import { useState } from "react";

export default function IngredientsForm() {
  const [ingredient, setIngredient] = useState("");
  const [ingredientsList, setIngredientsList] = useState([]);

  const ingredientInput = useRef(null);

  const addHandler = (e) => {
    e.preventDefault()
    let ing = ingredient.trim().toUpperCase();

    if (ing && !ingredientsList.includes(ing)) {
      setIngredientsList((oldState) => [...oldState, ing]);
    }
    setIngredient("");
    ingredientInput.current.focus();
  };

  return (
    <section>
      <form onSubmit={addHandler}>
        <label>
          <input
            type="text"
            onChange={(e) => {
              setIngredient(e.target.value);
            }}
            value={ingredient}
            ref={ingredientInput}
          />
          <button onClick={addHandler}>Add</button>
        </label>
      </form>
      <p>
        Ingredients:{" "}
        {ingredientsList.map((ing) => (
          <span key={ing}>{ing}</span>
        ))}
      </p>
    </section>
  );

}