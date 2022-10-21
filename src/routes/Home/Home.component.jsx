import "./Home.styles.scss";

import { Link } from "react-router-dom";

import SuggestedRecipes from "../../Components/SuggestedRecipes/SuggestedRecipes.component";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";


export default function Home() {
  return (
    <main className="home">
      <h1>React Recipe App</h1>
      <SuggestedRecipes />
      <Link to='/createrecipe' className="home__create">Create a recipe</Link>
    </main>
  );
}
