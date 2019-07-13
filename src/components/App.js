import React from 'react';
import './App.css';

import CalculatorContainer from "./Calculator/CalculatorContainer";
import AnswerContainer from "./Answer/AnswerContainer";

function App() {
  return (
    <div className="App">
      <CalculatorContainer/>
      <AnswerContainer/>
    </div>
  );
}

export default App;
