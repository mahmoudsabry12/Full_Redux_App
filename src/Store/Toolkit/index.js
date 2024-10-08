import { createSlice, createStore } from '@reduxjs/toolkit';

const initState = {value:0};

const CounterSlice  = createSlice({
    name:'counter',
    initialState:initState,
    reducers:{
        increase:(state,action)=>{  state.value += action.payload;},
        decrease:(state,action)=>{  state.value -= action.payload;}

    },
})



const store = createStore(CounterSlice.reducer)
export const {increase,decrease} = CounterSlice.actions
export default store