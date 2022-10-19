import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home.component";
import CreateRecipe from "./routes/CreateRecipe/CreateRecipe.component";
import Recipe from "./routes/Recipe/Recipe.component";
import RecipeList from "./routes/RecipeList/RecipeList.component";
import Nav from "./routes/Nav/Nav.component";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { PopupContext } from "./Contexts/PopupContext";
import { POPUP_ACTION_TYPES } from "./Contexts/PopupContext";

function App() {

  const {openPopup} = useContext(PopupContext)

  useEffect(() => {
    if(!localStorage.getItem('author')){
      openPopup(POPUP_ACTION_TYPES.OPEN_POPUP_AUTHOR, {author: true})
    }
  }, [])

  const [recipesList, setRecipesList] = useState([])

  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index  element={<Home />} />
        <Route path="/CreateRecipe" element={<CreateRecipe setRecipesList={setRecipesList} />} />
        <Route path="/Recipes" element={<RecipeList recipesList={recipesList} />} />
        <Route path="/Recipes/:recipeId" element={<Recipe recipesList={recipesList}/>} />
      </Route>
    </Routes>
  );
}

export default App;
