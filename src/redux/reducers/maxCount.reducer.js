/* eslint-disable import/no-anonymous-default-export */
import { SET_NEWS_COUNT } from "redux/actionTypes/general.type";

const initialState = {
	maxitem : null
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_NEWS_COUNT:
			return { ...state, maxitem: payload };
		default:
			return state;
	}
};
