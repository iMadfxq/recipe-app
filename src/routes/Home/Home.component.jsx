import "./Home.styles.scss";

import { Link } from "react-router-dom";

import SuggestedRecipes from "../../Components/SuggestedRecipes/SuggestedRecipes.component";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";


export default function Home() {
const {machineId} = useContext(UserContext)
  return (
    <main className="home">
      <h2>React Recipe App</h2>
      <p>{machineId}</p>
      <SuggestedRecipes />
      <Link to='/createrecipe' className="home__create">Create a recipe</Link>
    </main>
  );
}
