import { combineReducers } from "redux";
import newsFeedReducer from "./hackerNews.reducer";

const reducers = combineReducers({
	newsFeedReducer,
});

export default reducers;
