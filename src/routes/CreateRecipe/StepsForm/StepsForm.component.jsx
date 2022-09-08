import './StepsForm.styles.scss'

import { useRef } from "react";
import { useState } from "react";

export default function IngredientsForm() {
  const [step, setStep] = useState("");
  const [stepsList, setStepsList] = useState([])

  const stepInput = useRef(null);

  const addHandler = (e) => {
    e.preventDefault()
    let st = step.trim().toUpperCase();

    if (st && !stepsList.includes(st)) {
      setStepsList((oldState) => [...oldState, st]);
    }
    setStep("");
    stepInput.current.focus();
  };

  return (
    <section>
      <form onSubmit={addHandler}>
        <label>
          <input
            type="text"
            onChange={(e) => {
              setStep(e.target.value);
            }}
            value={step}
            ref={stepInput}
          />
          <button onClick={addHandler}>Add</button>
        </label>
      </form>
      <p>
        Number of steps: {stepsList.length}
      </p>
    </section>
  );

}