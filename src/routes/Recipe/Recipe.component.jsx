import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { RecipesContext } from "../../Contexts/RecipesContext";
import { projectFirestore } from "../../firebase/config";
import "./Recipe.styles.scss";

export default function Recipe() {
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(false);

  const { recipeId } = useParams();
  const {data} = useContext(RecipesContext)
  
  
  useEffect(() => {
    if(data) {
      let idMatches = data.filter(recipe => recipe.id == recipeId)
      if(idMatches.length) {
        setRecipe(...idMatches)
      } else {
        setError("Sorry, we couldn't find that recipe")
      }
    }
  }, [recipeId, data])

  return (
    <main className="recipe">
      {recipe && (
        <div className="recipe__content">
          <h2>{recipe.title}</h2>
          <p>Author: <span>{recipe.author}</span></p>
          <p className="recipe__content--cookingtime">Cooking time: <span>{recipe.cookingTime} minutes</span> </p>
          <div>
            <p>Ingredients:</p>
            <ul>
              {recipe.ingredientsList.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
            </ul>
          </div>
          <div>
            <p>Steps:</p>
            <ol>{recipe.stepsList.map((step, index) => <li key={index}>{step}</li>)}</ol>
          </div>
        </div>
      )}
      {error && <p>{error}</p>}
    </main>
  );
}
