import React, { useState } from 'react';
import s from './Settings.module.css';


type valueType = {
  value: number
  setValue: (value: number) => void
}

export const Settings = () => {

  const [value, setValue] = useState<number>(0);

  const incValue = () => {
    setValue(value+1)
  };
  const setFromLocalStorage = () => {
    localStorage.setItem('counterKey', JSON.stringify(value))
    localStorage.setItem('counterKey + 1', JSON.stringify(value + 1))
  };
  const getFromLocalStorage = () => { 
    let valueAsString = localStorage.getItem('counterKey')
    if (valueAsString) {
      let newValue = JSON.parse(valueAsString)
      setValue(newValue)
    }
  };
  const clearLocalStorage = () => {
    localStorage.clear()
    setValue(0)
  }
  const removeFromLocalStorage = () => {
    localStorage.removeItem('counterKey + 1')
    setValue(0)
  }

  return (
    <div className={s.Settings}>
      <div className={s.section}>

        <div className={` ${s.numberDisplay} ${value === 5 ? s.redNum : ""}`}>{value}</div>
        <div className={s.buttoms}>
          {/* 
          <button
            className={value === 5 ? s.buttonReset : s.buttonInc} onClick={setFromLocalStorage}
            disabled={value === 5 ? true : false}>SET</button> */}

          <button onClick={incValue}>inc</button>
          <button onClick={setFromLocalStorage}>SET</button>
          <button onClick={getFromLocalStorage}>get</button>
          <button onClick={clearLocalStorage}>clear</button>
          <button onClick={removeFromLocalStorage}>remove</button>
        </div>
      </div>
    </div>
  )
}

