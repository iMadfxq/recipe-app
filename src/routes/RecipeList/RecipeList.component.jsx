import "./RecipeList.styles.scss";
import { PopupContext } from "../../Contexts/PopupContext";
import { POPUP_ACTION_TYPES } from "../../Contexts/PopupContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function RecipeList({ recipesList }) {
  const {data, openPopup, setterFunc} = useContext(PopupContext)


  return (
    <main className="RecipeList">
      {recipesList.map((recipe) => (
        <Link to={`${recipe.id}`} className="RecipeList__item">
          <h2>{recipe.title}</h2>
          <p>Cooking time: {recipe.cookingTime} minutes</p>
          <p>Number of ingredients: {recipe.ingredientsList.length}</p>
          <div>
            <p>Number of steps: {recipe.stepsList.length}</p>
          </div>
          <button>See recipe</button>
        </Link>
      ))}
    </main>
  );
}
