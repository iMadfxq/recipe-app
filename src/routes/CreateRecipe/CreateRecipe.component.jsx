import { useState } from "react";
import "./CreateRecipe.styles.scss";
import IngredientsForm from "./IngredientsForm/IngredientsForm.component";
import StepsForm from './StepsForm/StepsForm.component'

export default function CreateRecipe() {
  const [title, setTitle] = useState("");
  const [cookingTime, setCookingTime] = useState('')

  return (
    <section>
      <form onSubmit={(e) => {
        e.preventDefault()
        alert(title, cookingTime)}}>
        <label>
          <span>Title</span>
          <input
            type="text"
            placeholder="Type here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          <span>Cooking Time(in minutes):</span>
          <input
            type="number"
            placeholder="Type here"
            value={cookingTime}
            onChange={(e) => setCookingTime(e.target.value)}
          />
        </label>
        <button>SUbmit</button>
      </form>
      <IngredientsForm />
      <StepsForm />
    </section>
  );
}
