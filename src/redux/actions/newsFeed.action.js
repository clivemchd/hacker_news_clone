import {
	SET_NEWS_COUNT,
	SET_NEWS_STORIES,
	SET_NEWS_ITEMS,
	RESET
} from "redux/actionTypes/general.type";
import NewsFeedService from 'redux/service/NewsFeed.service'

/**
 * NewsFeedService class handles all the News feed related operations
 */
class NewsFeedAction {

	/**
	 * The total count of news items
	 * @returns {integer} - max count of the news
	 */
	static getMaxNewsCount = () => (dispatch, getState) => {
		return new NewsFeedService().getMaxNewsCount()
		.then(response => {
			dispatch({
				type : SET_NEWS_COUNT,
				payload : response
			})
			return response;
		})
	}

	/**
	 * Gets each news item using the id
	 * @param {number} id 
	 * @returns {object}
	 */
	static getNewsItem = (id) => (dispatch, getstate) => {
		return new NewsFeedService().getNewsItem(id)
		.then(response => {
			dispatch({
				type : SET_NEWS_ITEMS,
				payload : response
			})
			return response
		})
	}

	/**
	 * Gets new stories 
	 * @returns {array} - returns array of ids
	 */
	static getNewsStories = () => (dispatch, getState) => {
		return new NewsFeedService()
		.getNewsStories()
		.then(response => {
			dispatch({
				type : RESET
			})
			dispatch({
				type : SET_NEWS_STORIES,
				payload : response
			})
			return response;
		})
	}

}

export default NewsFeedAction;
