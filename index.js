import { createStore } from 'redux';

// reducer
function reducer(state = { amount: 1 }, action) {
    if (action.type === 'increment') {
        // NOTE 2 - wrong practice state's copy shoud me made
        // state.amount = state.amount + 1; 

        // it should bd immutable like below
        return { amount: state.amount + 1 };
    }
    return state;
}

const store = createStore(reducer);

const history = [];

// NOTE 1 - Subscribe to state changes BEFORE dispatching any actions
store.subscribe(() => {
    console.log("sus : ", store.getState());
    console.log(history)
    
});


// Dispatch actions
setInterval(() => {
    store.dispatch({ type: 'increment' });
    history.push(store.getState())
}, 1000)



