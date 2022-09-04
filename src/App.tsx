import React, { useState } from 'react';
import './App.css';
import { Counter } from './components/Counter/Counter';
import { Settings } from './components/Settings/Settings';


function App() {

  const [value, setValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(0);
  const [startValue, setStartValue] = useState<number>(0);

  return <div className="App">
    <Settings
      setValue={setValue}
      startValue={startValue}
      maxValue={maxValue}
      setMaxValue={setMaxValue}
      setStartValue={setStartValue}
    />
    <Counter
      value={value}
      setValue={setValue}
      maxValue={maxValue}
      startValue={startValue}
    />

  </div>
}

export default App;
