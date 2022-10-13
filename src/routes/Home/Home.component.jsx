import "./Home.styles.scss";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <h2>React Recipe App</h2>
      <section>
        <p>Recipes suggested by iMadfxq: </p>
        <p style={{fontSize: '10px'}}>**List of recipes from firebase**</p>
      </section>
      <Link to='/recipes'>See all recipes</Link>
    </main>
  );
}
