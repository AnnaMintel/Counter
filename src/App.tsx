import React, { useState } from 'react';
import './App.css';

type valueType = {
  value: number
  setValue: (value: number) => void
}

function App() {

  let [value, setValue] = useState<number>(0);

  const incValue = () => {
    setValue(value + 1);
  }

  const resetValue = () => {
    setValue(0);
  }

  return (
    <div className="App">
      <div className="section">

        <div className={`numberDisplay ${value === 5 ? "redNum" : ""}`}>{value}</div>
        <div className="buttoms">

          <button
            className={value === 5 ? "buttonReset" : "buttonInc" } onClick={incValue}
            disabled={value === 5 ? true : false }>INC</button>

          <button 
          className={value === 5 ? "buttonInc" : "buttonReset" } onClick={resetValue }
          disabled={value === 0 ? true : false }>RESET</button>

        </div>
      </div>
    </div>
  );
}

export default App;
