// node.js syntax
const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}


// reducer
// the reducer gets 2 arguments, the first one is the currentState, the second is the action. 
// it then returns 1 thing which is the updatedState
// ** if state is undefined, the default value now is initialState
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
}

// store
const store = createStore(rootReducer);
console.log(store.getState());

// subscription
// this will inform me to get a new state if something has changed
// like a listener for change
// no arguments, but any code we want on stateupdate
store.subscribe(() => {
    console.log('[Subscription]', store.getState())
});

// dispatching action
// use uppercase string
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());
