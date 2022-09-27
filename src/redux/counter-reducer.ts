
const initialState = {
    value: 0,
    maxValue: 5,
    startValue: 0
}
type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case 'INC-VALUE':
            return { ...state, value: state.value + 1 }
        case 'RESET-VALUE':
            return { ...state, value: state.startValue }
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

type ActionTypes = any