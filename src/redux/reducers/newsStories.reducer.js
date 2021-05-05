/* eslint-disable import/no-anonymous-default-export */
import { SET_NEWS_STORIES, RESET } from "redux/actionTypes/general.type";

const initialState = {
	newsStories : null
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_NEWS_STORIES:
			return { ...state, newsStories: payload };
		case RESET:
			return { ...initialState }
		default:
			return state;
	}
};
