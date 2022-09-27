import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { incrementAC, resetAC } from '../../redux/counter-reducer';
import { AppStateType } from '../../redux/store';
import s from './Counter.module.css';

export type valueType = {
  setSwitchToSettings: (switchToSettings: boolean) => void
}

export const Counter = ({ setSwitchToSettings }: valueType) => {

  const value = useSelector<AppStateType, number>(state => state.counter.value);
  const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue);

  const dispatch = useDispatch();

  const incValue = () => dispatch(incrementAC())
  const resetValue = () => dispatch(resetAC());

  const disabled = value == maxValue;

  return (
    <div className={s.Counter}>
      <div className={s.section}>
        <div className={`${s.numberDisplay} ${value == maxValue ? s.redNum : ""} `}>{value}</div>
        <div className={s.buttoms}>

          <button
            className={value == maxValue ? `${s.buttonReset}` : `${s.buttonInc}`} onClick={incValue}
            disabled={disabled}
          >INC</button>

          <button
            className={value == maxValue ? s.buttonInc : s.buttonReset} onClick={resetValue}
            disabled={disabled}>RESET</button>

          <button className={s.buttonSet} onClick={() => setSwitchToSettings(true)}>SET</button>

        </div>
      </div>
    </div>
  );
}
