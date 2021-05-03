/* eslint-disable import/no-anonymous-default-export */
import { SET_NEWS_FEED, RESET } from "redux/actionTypes/general.type";

const initialState = {
	newsfeed : {

	}
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_NEWS_FEED:
			return { ...state, newsfeed: payload };
		case RESET:
			return { ...initialState };
		default:
			return state;
	}
};
