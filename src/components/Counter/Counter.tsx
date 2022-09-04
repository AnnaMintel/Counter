import React, { useState } from 'react';
import s from './Counter.module.css';

export type valueType = {
  value: number
  setValue: (value: number) => void
  maxValue: number
  startValue: number
}

export const Counter = ({ value, setValue, maxValue, startValue }: valueType) => {

  const incValue = () => setValue(+value + 1);
  const resetValue = () => setValue(startValue);
  console.log(maxValue);
  console.log(value)
  return (
    <div className={s.Counter}>
      <div className={s.section}>

        <div className={`${s.numberDisplay} ${value == maxValue ? s.redNum : ""} `}>{value}</div>
        <div className={s.buttoms}>

          <button
            className={value == maxValue ? `${s.buttonReset}` : `${s.buttonInc}`} onClick={incValue}
            disabled={value == maxValue ? true : false}>INC</button>

          <button
            className={value == maxValue ? s.buttonInc : s.buttonReset} onClick={resetValue}
            disabled={value == startValue ? true : false}>RESET</button>

        </div>
      </div>
    </div>
  );
}

