import React, { useState } from "react";
import "./App.scss";
import Memory from "./components/Memory/Memory";
import Framework7 from "framework7/lite-bundle";
import Framework7React from "framework7-react";
import "framework7/css/bundle";
Framework7.use(Framework7React);
// sase
function App() {
  const [step, setStep] = useState(0);
  const _HandleStep = () => {
    setStep(step + 1);
  };
  const _HandleStepPrev = () => {
    setStep(step - 1);
  };
  return (
    //
    <div className="App">
      <Memory x={step} />
      <div className="button">
        <button className="button__next" onClick={_HandleStep}>
          NEXT
        </button>
        <button className="button_next" onClick={_HandleStepPrev}>
          Prev
        </button>
      </div>
      <div className="button__text">{step}</div>
    </div>
  );
}

export default App;
