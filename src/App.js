import React, { useState } from "react";
import "./App.scss";
import Memory from "./components/Memory/Memory";
import Framework7 from "framework7/lite-bundle";
import Framework7React from "framework7-react";
import "framework7/css/bundle";
Framework7.use(Framework7React);
// sase
function App() {
  const X = [
    //For blood pressure
    { STEP: 1, PERCENT: 0 },
    { STEP: 1, PERCENT: 18 },
    //For hearing
    { STEP: 2, PERCENT: 35 },
    { STEP: 2, PERCENT: 52 },
    //For Goals
    { STEP: 3, PERCENT: 68 },
    { STEP: 3, PERCENT: 85 },
    //Action goals completed
    { STEP: 4, PERCENT: 100 },
  ];
  const [step, setStep] = useState(0);

  const handleStep = () => {
    setStep(step + 1);
  };
  const handleStepPrev = () => {
    step > 0 && setStep(step - 1);
  };
  return (
    //
    <div className="App">
      <Memory {...X[step]} />
      <div className="button">
        <button className="button__next" onClick={handleStep}>
          NEXT
        </button>
        <button className="button_next" onClick={handleStepPrev}>
          Prev
        </button>
      </div>
      <div className="button__text">{step}</div>
    </div>
  );
}

export default App;
