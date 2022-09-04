import React, { useState } from 'react';
import s from './Counter.module.css';

export type valueType = {
  value: number
  setValue: (value: number) => void
}

export const Counter = () => {

  const [value, setValue] = useState<number>(0);

  const incValue = () => setValue(value + 1);
  const resetValue = () => setValue(0);

  return (
    <div className={s.Counter}>
      <div className={s.section}>

        <div className={`${s.numberDisplay} ${value === 5 ? s.redNum : ""} `}>{value}</div>
        <div className={s.buttoms}>

          <button
            className={value === 5 ? `${s.buttonReset}` : `${s.buttonInc}` } onClick={incValue}
            disabled={value === 5 ? true : false }>INC</button>

          <button 
          className={value === 5 ? s.buttonInc : s.buttonReset } onClick={resetValue }
          disabled={value === 0 ? true : false }>RESET</button>

        </div>
      </div>
    </div>
  );
}

