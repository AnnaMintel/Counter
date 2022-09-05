import React, { useEffect, useState } from 'react';
import s from './Counter.module.css';

export type valueType = {
  value: number
  setValue: (value: number) => void
  maxValue: number
  startValue: number
  setSwitchToSettings: (switchToSettings: boolean) => void
}

export const Counter = ({ value, setValue, maxValue, startValue, setSwitchToSettings }: valueType) => {

  const incValue = () => setValue(+value + 1);
  const resetValue = () => setValue(startValue);

  const disabled = value == startValue;

  return (
    <div className={s.Counter}>
      <div className={s.section}>

        <div className={`${s.numberDisplay} ${value == maxValue ? s.redNum : ""} `}>{value}</div>
        <div className={s.buttoms}>

          <button
            className={value == maxValue ? `${s.buttonReset}` : `${s.buttonInc}`} onClick={incValue}
            disabled={disabled}>INC</button>

          <button
            className={value == maxValue ? s.buttonInc : s.buttonReset} onClick={resetValue}
            disabled={disabled}>RESET</button>

          <button onClick={() => setSwitchToSettings(true)}>SET</button>

        </div>
      </div>
    </div>
  );
}

