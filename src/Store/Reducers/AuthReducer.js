import { createSlice } from '@reduxjs/toolkit';


const initialState = {username:'mahmoud',password:'123456'}

const AuthSlice = createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        changeUsername:(state,action)=>{  state.username = action.payload;},
        changePassword:(state,action)=>{  state.password = action.payload;},
        
    },
})


export default AuthSlice.reducer;
export const {changeUsername,changePassword} = AuthSlice.actions; 