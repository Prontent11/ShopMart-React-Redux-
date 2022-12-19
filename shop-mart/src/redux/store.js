import { createStore } from "redux";
import { reducers } from "./reducers";
import thunk from 'redux-thunk'
import { applyMiddleware,compose } from "redux";


// const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
const store=createStore(reducers,applyMiddleware(thunk));

export default store;