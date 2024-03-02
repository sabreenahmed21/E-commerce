import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./GlobalSlice.js";
import { setupListeners } from '@reduxjs/toolkit/query'
import {productApi} from '../services/Jsonserverapi.js'


export const store = configureStore({
  reducer :{
    global : globalReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

setupListeners(store.dispatch)




