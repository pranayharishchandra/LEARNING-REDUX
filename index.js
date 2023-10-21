import { createStore } from 'redux'

const store = createStore(reducer_)

// reducer_
function reducer_(state_ = {amount:1}, action_) {
    // action_ just a convention
     if (action_.type === 'increment') {
        return {amount:state_.amount+1}
     }
    return state_
}


// global state -- to check the state
console.log(store.getState())
console.log("store")

store.dispatch({type:'increment'})

console.log(store.getState())