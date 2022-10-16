import { useContext } from "react";
import { useParams } from "react-router-dom";
import { RecipesContext } from "../../Contexts/RecipesContext";
import "./Recipe.styles.scss";

export default function Recipe() {
  const { recipeId } = useParams();
  console.log(recipeId);
  const {data} = useContext(RecipesContext)
  return (
    <main className="recipe">
      {data.map((recipe) => {
        if (recipeId == recipe.id) {
          return (
            <main>
            <h2>{recipe.title}</h2>
            <p>Cooking time: {recipe.cookingTime} minutes</p>
            <div>
            <p>Ingredients:</p>
              <ul>
                {recipe.ingredientsList.map(ingredient => <li>{ingredient}</li>)}
              </ul>
            </div>
            <div>
              <p>Steps:</p>
              <ol>
                {recipe.stepsList.map(step => <li>{step}</li>)}
              </ol>
            </div>
  
            
            </main>
          );
        }
      })}
    </main>
  );
}
