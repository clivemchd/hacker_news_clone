import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import combinedReducers from "../reducers";
import Storage from "../../helpers/storage";

const INITIAL_STATE = {};

	
const MIDDLEWARE = [
	thunk.withExtraArgument({ Storage })
];
const COMPOSE_ARG = [applyMiddleware(...MIDDLEWARE)];

const store = createStore(
	combinedReducers,
	["INITIAL_STATE", INITIAL_STATE],
	compose(...COMPOSE_ARG)
);


export default store;
