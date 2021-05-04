/**
 *
 */
export default class ApiStore {
	
	static GET_MAX_NEWS_FEED_ID = {
		method: 'GET',
		url   : "/maxitem.json"
	};

	static GET_NEWS_ITEM = {
		method: 'GET',
		url   : (id) => `/item/${id}.json`
	}

	static GET_NEWS_STORIES = {
		method: 'GET',
		url		: `/newstories.json`
	}

}