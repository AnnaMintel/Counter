import { TextField } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onChangeSetMaxValueAC, onChangeSetStartValueAC, resetAC } from '../../redux/counter-reducer';
import { AppStateType } from '../../redux/store';
import s from './Settings.module.css';

export type valueType = {
  setSwitchToSettings: (switchToSettings: boolean) => void
}

export const Settings = ({ setSwitchToSettings }: valueType) => {

  const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue);
  const startValue = useSelector<AppStateType, number>(state => state.counter.startValue);

  const dispatch = useDispatch();

  const onChangeSetStartValue = (e: any) => {
    dispatch(onChangeSetStartValueAC(+e.currentTarget.value));
    dispatch(resetAC())
  };
  const onChangeSetMaxValue = (e: any) => dispatch(onChangeSetMaxValueAC(+e.currentTarget.value));

  const setFromLocalStorage = () => {
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
    localStorage.setItem('startValue', JSON.stringify(startValue))
    setSwitchToSettings(false)
  };

  return (
    <div className={s.Settings}>
      <div className={s.section}>
        <div className={s.numberDisplay}>
          max value: <TextField
            id="standard-number"
            type="number"
            size='small'
            InputLabelProps={{
              shrink: true,
            }}
            value={maxValue}
            onChange={onChangeSetMaxValue}
          />
          start value: <TextField
            id="standard-number"
            type="number"
            size='small'
            InputLabelProps={{
              shrink: true,
            }}
            value={startValue}
            onChange={onChangeSetStartValue}
          />
        </div>

        <div className={s.buttoms}>
          <button
            className={s.buttonSet}
            onClick={setFromLocalStorage}
            disabled={(maxValue === startValue) || (maxValue < startValue) || (maxValue <= 0)}
          >SET</button>
        </div>
      </div>
    </div>
  )
}

