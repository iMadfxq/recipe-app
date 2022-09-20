import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./CreateRecipe.styles.scss";
import IngredientsForm from "./IngredientsForm/IngredientsForm.component";
import StepsForm from "./StepsForm/StepsForm.component";

export default function CreateRecipe({setRecipesList}) {
  const [title, setTitle] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [stepsList, setStepsList] = useState([]);
  const [ingredientsList, setIngredientsList] = useState([]);

const navigate = useNavigate()

  return (
    <section className="CreateRecipe">
      <form className="CreateRecipe__form"
        onSubmit={(e) => {
          e.preventDefault();
          setRecipesList((state) => {
            return [...state, {title, cookingTime, stepsList, ingredientsList, id: Date.now()}]
          })
          setTimeout(() => {
            navigate('/recipes')
          }, 500)
        }}
      >
        <label>
          <span>Title</span>
          <input
            type="text"
            placeholder="Type here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Cooking Time(in minutes):</span>
          <input
            type="number"
            placeholder="Type here"
            value={cookingTime}
            onChange={(e) => setCookingTime(e.target.value)}
            required
          />
        </label>
      <IngredientsForm ingredientsList={ingredientsList} setIngredientsList={setIngredientsList} />
      <StepsForm stepsList={stepsList} setStepsList={setStepsList} />
      <button type="submit">SUbmit</button>
      </form>
    </section>
  );
}
