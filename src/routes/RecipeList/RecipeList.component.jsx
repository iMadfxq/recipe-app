import "./RecipeList.styles.scss";
import { PopupContext } from "../../Contexts/PopupContext";
import { POPUP_ACTION_TYPES } from "../../Contexts/PopupContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import SuggestedRecipes from "../../Components/SuggestedRecipes/SuggestedRecipes.component";
import { RecipesContext } from "../../Contexts/RecipesContext";
import { UserContext } from "../../Contexts/UserContext";
import { projectFirestore } from "../../firebase/config";

export default function RecipeList({ recipesList }) {
  const { data } = useContext(RecipesContext);
  const { machineId } = useContext(UserContext);

  let userCreatedRecipes = data.filter(
    (recipe) => recipe.machineId == machineId
  );

  return (
    <main className="RecipeList">
      <SuggestedRecipes />
      <h2>Created by you:</h2>
      <section className="RecipeList__user">
        {userCreatedRecipes.map((recipe) => (
          <Link
            to={`/Recipes/${recipe.id}`}
            className="RecipeList__user--item"
            key={recipe.id}
          >
            <span onClick={(e) => {
              e.preventDefault()
              projectFirestore.collection('suggestedRecipes').doc(recipe.id).delete()
            }}>delete</span>
            <h2>{recipe.title}</h2>
            <p>Cooking time: {recipe.cookingTime} minutes</p>
            <p>Number of ingredients: {recipe.ingredientsList.length}</p>
            <div>
              <p>Number of steps: {recipe.stepsList.length}</p>
            </div>
            <button>See recipe</button>
          </Link>
        ))}
      </section>
      <h2>Created by other users: </h2>
      <section className="RecipeList__user">
        {data
          .filter((r) => r.machineId != machineId && r.byDeveloper == false)
          .map((recipe) => (
            <Link
              to={`/Recipes/${recipe.id}`}
              className="RecipeList__user--item"
              key={recipe.id}
            >
              <h2>{recipe.title}</h2>
              <p>Cooking time: {recipe.cookingTime} minutes</p>
              <p>Number of ingredients: {recipe.ingredientsList.length}</p>
              <div>
                <p>Number of steps: {recipe.stepsList.length}</p>
              </div>
              <button>See recipe</button>
            </Link>
          ))}
      </section>
    </main>
  );
}
