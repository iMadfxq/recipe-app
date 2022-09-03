import { useState } from "react";
import "./CreateRecipe.styles.scss";
import IngredientsForm from "./IngredientsForm/IngredientsForm.component";

export default function CreateRecipe() {
  const [title, setTitle] = useState("");
  const [stepsList, setStepsList] = useState([])

  return (
    <section>
      <form>
        <label>
          <span>Title</span>
          <input
            type="text"
            placeholder="Type here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
      </form>
      <IngredientsForm />
    </section>
  );
}
