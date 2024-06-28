import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/auth/AuthSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { apiSlice } from "../slices/api/ApiSlice";
console.log("apiSlice.reducerPath",apiSlice.reducerPath);
const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
