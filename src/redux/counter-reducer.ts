
const initialState = {
    value: 0,
    maxValue: 0,
    startValue: 0
}
type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case 'INC-VALUE':
            return { ...state, value: state.value + 1 }
        case 'RESET-VALUE':
            return { ...state, value: state.startValue }
        case 'SET-START-VALUE':
            return { ...state, startValue: action.newValue }
        case 'SET-MAX-VALUE':
            return { ...state, maxValue: action.newValue }
        default:
            return state
    }
}

export const incrementAC = () => ({
    type: 'INC-VALUE'
})
export const resetAC = () => ({
    type: 'RESET-VALUE'
})
export const onChangeSetStartValueAC = (newValue: number) => ({
    type: 'SET-START-VALUE', newValue
})
export const onChangeSetMaxValueAC = (newValue: number) => ({
    type: 'SET-MAX-VALUE', newValue
})

type ActionTypes = any