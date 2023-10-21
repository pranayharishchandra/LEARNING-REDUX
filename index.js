import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; // npm i redux-logger

// Action name constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const INCREMENT_BY_AMOUNT = 'INCREMENT_BY_AMOUNT';

// Action creators
function increment() {
    return { type: INCREMENT };
}

function decrement() {
    return { type: DECREMENT };
}

function incrementByAmount(value) {
    return { type: INCREMENT_BY_AMOUNT, payload: value };
}

// Reducer - with initial state
function reducer(state = { amount: 1 }, action) {
    switch (action.type) {
        case INCREMENT:
            return { amount: state.amount + 1 };
        case DECREMENT:
            return { amount: state.amount - 1 };
        case INCREMENT_BY_AMOUNT:
            return { amount: state.amount + action.payload };
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(logger.default));

// Subscribe to state changes BEFORE dispatching any actions
store.subscribe(() => {
    console.log("sus : ", store.getState());
});

// Dispatch actions
setInterval(() => {
    store.dispatch(incrementByAmount(10));
}, 3000);
