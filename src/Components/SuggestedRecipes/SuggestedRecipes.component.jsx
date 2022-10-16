import "./SuggestedRecipes.styles.scss";
import { projectFirestore } from "../../firebase/config";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { RecipesContext } from "../../Contexts/RecipesContext";

export default function SuggestedRecipes() {
  const {data, error, isPending} = useContext(RecipesContext)

  return (
    <section className="SuggestedRecipes">
      <p>Recipes suggested by iMadfxq: </p>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && (
        <section className="SuggestedRecipes__list">
          {data.filter(r => r.byDeveloper).map((recipe) => (
            <Link
              to={`${recipe.id}`}
              className="SuggestedRecipes__list--item"
              key={recipe.id}
            >
              <span>★</span>
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
      )}
    </section>
  );
}
