import { TextField } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import s from './Settings.module.css';

export type valueType = {
  startValue: number
  maxValue: number
  setValue?: (value: number) => void
  setMaxValue: (maxValue: number) => void
  setStartValue: (startValue: number) => void
  setSwitchToSettings: (switchToSettings: boolean) => void
}

export const Settings = ({ startValue, maxValue, setMaxValue, setStartValue, setValue, setSwitchToSettings }: valueType) => {

  const onChangeSetMaxValue = (e: any) => {
    setMaxValue(+e.currentTarget.value)
  }
  const onChangeSetStartValue = (e: any) => setStartValue(+e.currentTarget.value)

  useEffect(() => {
    let valueAsStringMax = localStorage.getItem('maxValue')
    let valueAsStringStart = localStorage.getItem('startValue')
    if (valueAsStringMax || valueAsStringStart) {
      //@ts-ignore
      let newMaxValue = JSON.parse(valueAsStringMax)
      //@ts-ignore
      let newStartValue = JSON.parse(valueAsStringStart)
      setMaxValue(+newMaxValue)
      setStartValue(+newStartValue)
    }
  }, [])

  const setFromLocalStorage = () => {
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
    localStorage.setItem('startValue', JSON.stringify(startValue))
    // setValue(+startValue)
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

