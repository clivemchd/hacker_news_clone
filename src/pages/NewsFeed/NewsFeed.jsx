import React, { Component } from 'react'
import Card from 'components/common/Card'
import { NewsFeedWrapper, } from './css/NewsFeed.module.scss'
import { connect } from 'react-redux'
import NewsFeedAction from 'redux/actions/newsFeed.action'

class NewsFeed extends Component {

	componentDidMount(){
		this.props.getNewsStories()
	}

	render() {
		return (
			<Card classname={`${NewsFeedWrapper}`} height='100%'>
				Hey
			</Card>
		)
	}
}

const mapStateToProps = (state) => ({
	newsFeed : {
		...state.maxNewsCount,
		...state.newsStories
	}
});

const mapDispatchToProps = {
	getMaxNewsCount : NewsFeedAction.getMaxNewsCount,
	getNewsStories 	: NewsFeedAction.getNewsStories,
	getNewsItem			: NewsFeedAction.getNewsItem
}


export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
