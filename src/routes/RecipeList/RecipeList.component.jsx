import './RecipeList.styles.scss'

export default function RecipeList({recipesList}) {
  return (<div>{recipesList.map(recipe => <p>{recipe.title}</p>)}</div>)
}