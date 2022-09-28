import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { Counter } from './components/Counter/Counter';
import { Settings } from './components/Settings/Settings';
import { onChangeSetMaxValueAC, onChangeSetStartValueAC, resetAC } from './redux/counter-reducer';


function App() {

  const [switchToSettings, setSwitchToSettings] = useState<boolean>(false);
  const dispatch = useDispatch();
  
  useEffect(() => {
    let valueAsStringMax = localStorage.getItem('maxValue')
    let valueAsStringStart = localStorage.getItem('startValue')
    if (valueAsStringMax || valueAsStringStart) {
      let newMaxValue = valueAsStringMax && JSON.parse(valueAsStringMax)
      let newStartValue = valueAsStringStart && JSON.parse(valueAsStringStart)

      dispatch(onChangeSetStartValueAC(+newStartValue));
      dispatch(onChangeSetMaxValueAC(+newMaxValue));
    }
    dispatch(resetAC())
  }, [])

  return <div className="App">
    {switchToSettings
      ? <Settings
        setSwitchToSettings={setSwitchToSettings}
      />
      : <Counter
        setSwitchToSettings={setSwitchToSettings}
      />
    }
  </div>
}

export default App;
