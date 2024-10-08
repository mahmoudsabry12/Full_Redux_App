import {createStore} from 'redux'

const initState = {value:0,showCounter:true};

const CounterReducer = (state=initState, action)=>{

if(action.type === 'increase'){
    return {...state,value :state.value + action.payload}
}

if(action.type === 'decrease'){
    return {...state,value :state.value - action.payload}
}

if(action.type === 'toggleCounter'){
    return {...state, showCounter : !state.showCounter}
}
    return state
}


const store = createStore(CounterReducer)

export default store