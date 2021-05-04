import { combineReducers } from "redux";
import maxNewsCount from "./maxCount.reducer";
import newsStories from "./maxCount.reducer";

const reducers = combineReducers({
	maxNewsCount,
	newsStories,
});

export default reducers;
