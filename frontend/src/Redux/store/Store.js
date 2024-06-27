import {configureStore} from "@reduxjs/toolkit";
import authReducer from '../slices/AuthSlice';
import { combineReducers } from "@reduxjs/toolkit";
const store = configureStore({
    reducer:{
        auth:authReducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware(),
    devTools:true
});

export default store;