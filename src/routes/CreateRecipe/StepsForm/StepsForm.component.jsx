import "./StepsForm.styles.scss";

import { useState, useContext, useRef } from "react";

import { PopupContext } from "../../../Contexts/PopupContext";
import { POPUP_ACTION_TYPES } from "../../../Contexts/PopupContext";

export default function IngredientsForm() {
  const [step, setStep] = useState("");
  const [stepsList, setStepsList] = useState([]);

  const { openPopup } = useContext(PopupContext);

  const stepInput = useRef(null);

  const addHandler = (e) => {
    e.preventDefault();
    let text = step.trim().toUpperCase();

    if (text && !stepsList.includes(text)) {
      setStepsList((oldState) => [...oldState, {text, id: Date.now()}]);
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
      <p
        onClick={() => {
          openPopup(POPUP_ACTION_TYPES.OPEN_POPUP_STEPS, {data:stepsList, setterFunc: setStepsList});
        }}
      >
        Number of steps: {stepsList.length}
      </p>
    </section>
  );
}
