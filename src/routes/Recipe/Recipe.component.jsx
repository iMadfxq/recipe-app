import { useParams } from "react-router-dom";
import "./Recipe.styles.scss";

export default function Recipe({ recipesList }) {
  const { recipeId } = useParams();
  console.log(recipeId);
  return (
    <main>
      {recipesList.map((recipe) => {
        if (recipeId == recipe.id) {
          return (
            <>
            <h2>{recipe.title}</h2>
            <p>Cooking time: {recipe.cookingTime} minutes</p>
            <div>
            <p>Ingredients:</p>
              <ul>
                {recipe.ingredientsList.map(ingredient => <li>{ingredient.text}</li>)}
              </ul>
            </div>
            <div>
              <p>Steps:</p>
              <ol>
                {recipe.stepsList.map(step => <li>{step.text}</li>)}
              </ol>
            </div>
  
            
            </>
          );
        }
      })}
    </main>
  );
}
