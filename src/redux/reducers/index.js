import { combineReducers } from "redux";
import maxNewsCount from "./maxCount.reducer";
import newsStories from "./newsStories.reducer";
import newsItems from "./newsItems.reducer";

const reducers = combineReducers({
	maxNewsCount,
	newsStories,
	newsItems
});

export default reducers;
