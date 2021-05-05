import { combineReducers } from "redux";
import maxNewsCount from "./maxCount.reducer";
import newsStories from "./newsStories.reducer";

const reducers = combineReducers({
	maxNewsCount,
	newsStories,
});

export default reducers;
