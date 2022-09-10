import * as React from 'react';
import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import "./App.css";
import Root from "./main";
import combineReducers from './main/reducers';



export const store=configureStore({
reducer:combineReducers,
middleware:[thunk]
});

function App() {
  return (
    <Root store={store}/>
  );
}

export default App;
