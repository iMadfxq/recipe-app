import "./SuggestedRecipes.styles.scss";
import { projectFirestore } from "../../firebase/config";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SuggestedRecipes() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    projectFirestore.collection('suggestedRecipes').get().then((snapshot => {
      let results = []
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data()})
      })
      setData(results)
      setIsPending(false)
    })).catch(err => {
      setError(err)
      setIsPending(false)
    })
  }, []);

  return (
    <section className="SuggestedRecipes">
      <p>Recipes suggested by iMadfxq: </p>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && (
        <section className="SuggestedRecipes__list">
          {data.map((recipe) => (
            <Link
              to={`${recipe.id}`}
              className="SuggestedRecipes__list--item"
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
      )}
      <section className="SuggestedRecipes__list">
        <p>**List of recipes from firebase**</p>
      </section>
    </section>
  );
}
