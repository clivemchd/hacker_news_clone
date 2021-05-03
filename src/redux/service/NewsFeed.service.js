import HttpAdaptor from "../../components/helpers/http";
import ApiStore from "../api";

/**
 * ColorThemesService class handles all the Color Themes related operations
 */
class NewsFeedService extends HttpAdaptor {
	/**
	 * Constructs the class and accepts ths API configurations on class initiation.
	 */
	constructor(config, userState) {

	}

	/**
	 * Updates the list of the Color themes.
	 * @param {object} payload the payload object
	 * @returns {Promise} Admin color theme list and notice
	 */
	getNewsFeedLists() {

		return super
			.setMethod(ApiStore.GET_NEWS_FEED_LISTS.method)
			.setHeaders()
			.setPath(ApiStore.GET_NEWS_FEED_LISTS.url)
			.setPayload()
			.makeCall();
	}
}

export default NewsFeedService;
