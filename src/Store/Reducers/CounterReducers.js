import { createSlice, createStore } from '@reduxjs/toolkit';


const initialState = {value:0}
const CounterSlice  = createSlice({
    name:"counter",
    initialState:initialState,
    reducers:{
        increase:(state,action)=>{  state.value += action.payload;},
        decrease:(state,action)=>{  state.value -= action.payload;}

    },
})


export default CounterSlice.reducer;
export const {increase,decrease} = CounterSlice.actions;
