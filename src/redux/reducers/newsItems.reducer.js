/* eslint-disable import/no-anonymous-default-export */
import { SET_NEWS_ITEMS, RESET } from "redux/actionTypes/general.type";

const initialState = {
	newsItems : []
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_NEWS_ITEMS:
			if(!payload){
				return { ...state }
			}
			const tempNewsItems = [...state.newsItems];
			tempNewsItems.push(payload);
			if(tempNewsItems.length > 5){
				tempNewsItems.splice(0, 5);
			}
			return { ...state, newsItems: tempNewsItems };
		case RESET:
			return { ...initialState }
		default:
			return state;
	}
};
