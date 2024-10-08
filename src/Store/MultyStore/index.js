import { configureStore} from '@reduxjs/toolkit';
import CounterReducer from '../Reducers/CounterReducers'
import AuthReducer from '../Reducers/AuthReducer'

const store = configureStore({reducer:{
    counter:CounterReducer,
    auth:AuthReducer,
}})

export default store;