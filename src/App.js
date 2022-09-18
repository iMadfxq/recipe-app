import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home.component";
import CreateRecipe from "./routes/CreateRecipe/CreateRecipe.component";
import Recipe from "./routes/Recipe/Recipe.component";
import RecipeList from "./routes/RecipeList/RecipeList.component";
import Nav from "./routes/Nav/Nav.component";
import { useState } from "react";

function App() {

  const [recipesList, setRecipesList] = useState([])

  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index  element={<Home />} />
        <Route path="/CreateRecipe" element={<CreateRecipe setRecipesList={setRecipesList} />} />
        <Route path="/Recipes" element={<RecipeList recipesList={recipesList} />} />
        <Route path="/Recipes/:id" element={<Recipe />} />
      </Route>
    </Routes>
  );
}

export default App;
