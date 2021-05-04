import HttpAdaptor from "../../components/helpers/http";
import ApiStore from "../api";
import { getBaseHttpUrl } from 'utilities';

class NewsFeedService extends HttpAdaptor{
	
	constructor(){
		super(getBaseHttpUrl());
	}

	getMaxNewsCount = () => {
		return super
		.setMethod(ApiStore.GET_MAX_NEWS_FEED_ID.method)
		.setHeaders()
		.setPath(ApiStore.GET_MAX_NEWS_FEED_ID.url)
		.setPayload()
		.makeCall();
	}

	getNewsItem = (id) => {
		return super
		.setMethod(ApiStore.GET_NEWS_ITEM.method)
		.setHeaders()
		.setPath(ApiStore.GET_NEWS_ITEM.url(id))
		.setPayload()
		.makeCall();
	}

	getNewsStories = () => {
		return super
		.setMethod(ApiStore.GET_NEWS_STORIES.method)
		.setHeaders()
		.setPath(ApiStore.GET_NEWS_STORIES.url)
		.setPayload()
		.makeCall();
	}
	

}

export default NewsFeedService;