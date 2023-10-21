import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; // npm i redux-logger

// .default to avoid error
const store = createStore(reducer, applyMiddleware(logger.default));

// reducer - with some inital state
function reducer(state = { amount: 1 }, action) {
    if (action.type === 'inc') {
        // NOTE 2 - wrong practice state's copy shoud me made
        // state.amount = state.amount + 1; 

        // it should bd immutable like below
        return { amount: state.amount + 1 };
    }
    else if (action.type === 'dec') {
        return { amount: state.amount - 1 };
    }
    else if (action.type === 'incByAmt') {
        return { amount: state.amount + action.payload };
    }

    return state;
}


const history = [];

// NOTE 1 - Subscribe to state changes BEFORE dispatching any actions
store.subscribe(() => {
    console.log("sus : ", store.getState());
    // console.log(history)
    
});


// Dispatch actions
setInterval(() => {
    store.dispatch({ type: 'incByAmt', payload:10 });
    history.push(store.getState())
}, 3000)



