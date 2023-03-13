import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import Reducer from "./Reducers/Reducer";


const Store = createStore(Reducer, composeWithDevTools(applyMiddleware(logger)) )

export default Store;




