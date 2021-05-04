/* eslint-disable import/no-anonymous-default-export */
import { SET_NEWS_STORIES } from "redux/actionTypes/general.type";

const initialState = {
	newStories : null
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_NEWS_STORIES:
			return { ...state, newStories: payload };
		default:
			return state;
	}
};
