import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import itemReducer from "./items.js";

// const globalState = {
//   items: itemReducer
// };

const store = createStore(combineReducers({ items: itemReducer }), applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

export default store;