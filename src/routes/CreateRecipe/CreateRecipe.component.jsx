import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";
import { projectFirestore } from "../../firebase/config";

import "./CreateRecipe.styles.scss";
import IngredientsForm from "./IngredientsForm/IngredientsForm.component";
import StepsForm from "./StepsForm/StepsForm.component";

export default function CreateRecipe({setRecipesList}) {
  const [title, setTitle] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [stepsList, setStepsList] = useState([]);
  const [ingredientsList, setIngredientsList] = useState([]);

  const {author, machineId} = useContext(UserContext)

const navigate = useNavigate()

  return (
    <section className="CreateRecipe">
      <h1>Create a recipe: </h1>
      <form className="CreateRecipe__form"
        onSubmit={(e) => {
          e.preventDefault();
          let ingList = []
          ingredientsList.map(ing => {
            ingList.push(ing.text.toLowerCase())
          })
          let stList = []
          stepsList.map(stp => {
            stList.push(stp.text.toLowerCase())
          })
          projectFirestore.collection('suggestedRecipes').add({title, cookingTime, stepsList:stList, ingredientsList:ingList, byDeveloper : false, author, machineId})
          setTimeout(() => {
            navigate('/recipes')
          }, 300)
        }}
      >
        <p className="author">Author: <span>{author}</span></p>
        <label>
          <p>Title:</p>
          <input
            type="text"
            placeholder="Type here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          <p>Cooking Time (in minutes):</p>
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
      <button type="submit">Create this recipe</button>
      </form>
    </section>
  );
}
