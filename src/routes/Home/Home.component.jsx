import "./Home.styles.scss";

import { Link } from "react-router-dom";

import SuggestedRecipes from "../../Components/SuggestedRecipes/SuggestedRecipes.component";

export default function Home() {
  return (
    <main className="home">
      <h2>React Recipe App</h2>
      <SuggestedRecipes />
      <Link to='/recipes' className="home__all">See all recipes</Link>
    </main>
  );
}
