import "./SuggestedRecipes.styles.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { RecipesContext } from "../../Contexts/RecipesContext";

export default function SuggestedRecipes() {
  const {data, error, isPending} = useContext(RecipesContext)

  return (
    <section className="SuggestedRecipes">
      <h2>Recipes suggested by iMadfxq: </h2>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && (
        <section className="SuggestedRecipes__list">
          {data.filter(r => r.byDeveloper).map((recipe) => (
            <Link
              to={`/Recipes/${recipe.id}`}
              className="SuggestedRecipes__list--item"
              key={recipe.id}
            >
              <span>★</span>
              <h3>{recipe.title}</h3>
              <p>Cooking time: <span>{recipe.cookingTime} minutes</span></p>
              <p>Number of ingredients: <span>{recipe.ingredientsList.length}</span> </p>
                <p>Number of steps: <span>{recipe.stepsList.length}</span></p>
              <button>See recipe</button>
            </Link>
          ))}
        </section>
      )}
    </section>
  );
}
