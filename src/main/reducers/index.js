import { combineReducers } from "@reduxjs/toolkit";
import HomePageReducer from '../pages/homepage/duck/slice';
export default combineReducers({
    homepage:HomePageReducer
})