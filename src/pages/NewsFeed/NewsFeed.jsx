import React, { Component } from 'react'
import Card from 'components/common/Card'
import { connect } from 'react-redux'
import NewsFeedAction from 'redux/actions/newsFeed.action'
import NavBar from 'components/helpers/Navbar/Navbar'
import Footer from 'components/helpers/Footer/Footer'
import Button from 'components/common/Button'
import clockIcon from 'assets/images/clock-icon.svg'
import { isDefined } from 'utilities';
import { 
	NewsFeedWrapper, 
	NewsStory, 
	CurrentNewsButton, 
	PastNewsButton, 
	ButtonWrapper, 
	LoadMoreButton,
	CommonButtonWrapperStyle,
	CommonFontAttribute,
	NewsStoryWrapper,
	LastNewsStoryNode,
	NewsItemTitle,
	NewsItemDescription,
	NewsItemFooter,
	NewsItemClockIcon,
} from './css/NewsFeed.module.scss'

class NewsFeed extends Component {

	constructor(){
		super()
		this.state = {
			pageView: 1,
			lastStoryIndex: 4
		}
	}
	
	componentWillMount(){
		this.props.getNewsStories();
		this.props.getMaxNewsCount();
	}

	setFiveNewsStories = () => {
		console.log(isDefined(this.props.newsFeed, 'newsStories'));
	}

	componentDidMount(){
		this.setFiveNewsStories(this.props.newsFeed)
	}


	render() {

		return (
			<Card className={`${NewsFeedWrapper}`}>
				<NavBar />
				<div className={`${ButtonWrapper}`}>
					<Button 
						className={`${CurrentNewsButton} ${CommonButtonWrapperStyle} ${CommonFontAttribute}`} 
						onClick={() => {}}>
						New
					</Button>
					<Button 
						className={`${PastNewsButton} ${CommonButtonWrapperStyle} ${CommonFontAttribute}`} 
						onClick={() => {}}>
						Past
					</Button>
				</div>
				<div className={`${NewsStoryWrapper}`}>
					<Card className={`${NewsStory}`}>
						<p className={`${NewsItemTitle} ${CommonFontAttribute}`}>Title</p>
						<p className={`${NewsItemDescription}`}>
							I have added dummy text here as I found the hacker news api does not return any description of type story.
						</p>
						<p className={`${NewsItemFooter}`}>
							<img alt="clock" className={`${NewsItemClockIcon}`} src={clockIcon} />
							time ago | 50 comments
						</p>
					</Card>
					<Card className={`${NewsStory}`}>
						<p className={`${NewsItemTitle} ${CommonFontAttribute}`}>Title</p>
						<p className={`${NewsItemDescription}`}>
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, …when an unknown printer took a galley of type and scrambled
						</p>
						<p className={`${NewsItemFooter}`}>
							<img alt="clock" className={`${NewsItemClockIcon}`} src={clockIcon}/>
							time ago | 50 comments
						</p>
					</Card>
					<Card className={`${NewsStory}`}>
						<p className={`${NewsItemTitle} ${CommonFontAttribute}`}>Title</p>
						<p className={`${NewsItemDescription}`}>
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, …when an unknown printer took a galley of type and scrambled
						</p>
						<p className={`${NewsItemFooter}`}>
							<img alt="clock" className={`${NewsItemClockIcon}`} src={clockIcon}/>
							time ago | 50 comments
						</p>
					</Card>
					<Card className={`${NewsStory}`}>
						<p className={`${NewsItemTitle} ${CommonFontAttribute}`}>Title</p>
						<p className={`${NewsItemDescription}`}>
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, …when an unknown printer took a galley of type and scrambled
						</p>
						<p className={`${NewsItemFooter}`}>
							<img alt="clock" className={`${NewsItemClockIcon}`} src={clockIcon}/>
							time ago | 50 comments
						</p>
					</Card>
					<Card className={`${NewsStory} ${LastNewsStoryNode}`}>
						<p className={`${NewsItemTitle} ${CommonFontAttribute}`}>Title</p>
						<p className={`${NewsItemDescription}`}>
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, …when an unknown printer took a galley of type and scrambled
						</p>
						<p className={`${NewsItemFooter}`}>
							<img alt="clock" className={`${NewsItemClockIcon}`} src={clockIcon}/>
							time ago | 50 comments
						</p>
					</Card>
				</div>
				<Button className={`${LoadMoreButton} ${CommonFontAttribute}`} onClick={() => {}}>
					Load More
				</Button>
				<Footer />
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
