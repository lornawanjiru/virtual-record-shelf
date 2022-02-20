import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import reducers from "./reducers/index";
import thunkMiddleware from 'redux-thunk';

const store = createStore(reducers,
  {},  
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware)
);

export default store; 