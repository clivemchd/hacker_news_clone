import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import combinedReducers from "../reducers";

const INITIAL_STATE = {};

const store = createStore(
	combinedReducers,
	INITIAL_STATE,
	applyMiddleware(thunk)
);


export default store;
