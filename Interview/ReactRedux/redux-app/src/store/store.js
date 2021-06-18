import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const composeEnhancers = process.env.NODE_ENV !== 'production' ? composeWithDevTools : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

export default store;