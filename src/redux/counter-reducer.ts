



const initialState = {
    value: 0,
    maxValue: 0,
    startValue: 0
}
type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case 'bla-bla':
            return
        default:
            return state
    }
}
type ActionTypes = any