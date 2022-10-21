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
            }} title='Delete' >❌</span>
            <h3>{recipe.title}</h3>
            <p>Cooking time: <span>{recipe.cookingTime} minutes</span></p>
            <p>Number of ingredients: <span> {recipe.ingredientsList.length}</span></p>
            
              <p>Number of steps: <span>{recipe.stepsList.length}</span> </p>
            
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
              <h3>{recipe.title}</h3>
              <p>Cooking time: <span> {recipe.cookingTime} minutes</span></p>
              <p>Number of ingredients: <span>{recipe.ingredientsList.length}</span> </p>
              
                <p>Number of steps: <span> {recipe.stepsList.length}</span></p>
              <button>See recipe</button>
            </Link>
          ))}
      </section>
    </main>
  );
}
