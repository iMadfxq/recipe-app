import "./StepsForm.styles.scss";

import { useState, useContext, useRef } from "react";

import { PopupContext } from "../../../Contexts/PopupContext";
import { POPUP_ACTION_TYPES } from "../../../Contexts/PopupContext";

export default function StepsForm({ setStepsList, stepsList }) {
  const [step, setStep] = useState("");

  const { openPopup } = useContext(PopupContext);

  const stepInput = useRef(null);

  const addHandler = (e) => {
    e.preventDefault();
    let text = step.trim().toUpperCase();

    if (text && !stepsList.includes(text)) {
      setStepsList((oldState) => [...oldState, { text, id: Date.now() }]);
    }
    setStep("");
    stepInput.current.focus();
  };

  return (
    <section className="StepsForm">
      <label className="StepsForm__label">
        <p>Add steps of your recipe:</p>
        <div className="StepsForm__label--input">
          <textarea
            type="text"
            onChange={(e) => {
              setStep(e.target.value);
            }}
            value={step}
            ref={stepInput}
            placeholder="Type here"
          />
          <button onClick={addHandler}>Add</button>
        </div>
      </label>
      <p
        onClick={() => {
          openPopup(POPUP_ACTION_TYPES.OPEN_POPUP_STEPS, {
            data: stepsList,
            setterFunc: setStepsList,
          });
        }}
      >
        Number of steps added: {stepsList.length} <span>⌃</span>
      </p>
    </section>
  );
}
