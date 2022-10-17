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
  const [isPending, setIsPending] = useState(true);

  const { recipeId } = useParams();
  useEffect(() => {
    projectFirestore
      .collection("suggestedRecipes")
      .doc(recipeId)
      .get()
      .then((rec) => {
        if (rec.exists) {
          setRecipe(rec.data());
          setIsPending(false);
        } else {
          setError("Looks like that recipe doesn't exist");
          setIsPending(false);
        }
      });
  }, []);
  console.log(recipeId);
  return (
    <main className="recipe">
      {isPending && <p>Loading...</p>}
      {recipe && (
        <div>
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
            <ol>{recipe.stepsList.map(step => <li>{step}</li>)}</ol>
          </div>
        </div>
      )}
      {error && <p>{error}</p>}
    </main>
  );
}
