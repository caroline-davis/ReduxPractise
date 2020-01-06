const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return {
            // could do the ...state but as there is only 1 property, we can just remake an instance of it.
            counter: state.counter + 1
        }
    }
    if (action.type === 'DECREMENT') {
        return {
            counter: state.counter - 1
        }
    }
    if (action.type === 'ADD') {
        return {
            counter: state.counter + 5
        }
    }
    if (action.type === 'SUBTRACT') {
        return {
            counter: state.counter - 5
        }
    }
    return state;
};

export default reducer;