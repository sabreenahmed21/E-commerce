import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./GlobalSlice.js";

export const store = configureStore({
  reducer :{
    global : globalReducer
  }
});