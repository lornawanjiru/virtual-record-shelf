import { combineReducers } from "@reduxjs/toolkit";
import { albumReducer } from "./albumReducer";


const reducers = combineReducers({
    allalbums : albumReducer,
    
})
export default reducers;