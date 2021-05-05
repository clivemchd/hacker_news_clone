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
	NewsStoriesLoader,
} from './css/NewsFeed.module.scss'
import Loader from 'components/helpers/Loader'

class NewsFeed extends Component {

	constructor(){
		super()
		this.state = {
			isLoading					: true,
			firstStoryIndex		: 0,
			lastStoryIndex		: 5
		}
	}

	setFiveNewsStories = () => {
		const { newsFeed, getNewsItem } = this.props;
		const { firstStoryIndex, lastStoryIndex } = this.state;
		
		if(isDefined(newsFeed, 'newsStories')){
			const { newsStories } = newsFeed;
			let IdSet = [];
			for (let index = firstStoryIndex; index < lastStoryIndex; index++) {
				IdSet.push(newsStories[index]);
			}
			Promise.all([
				getNewsItem(IdSet[0]), 
				getNewsItem(IdSet[1]), 
				getNewsItem(IdSet[2]), 
				getNewsItem(IdSet[3]), 
				getNewsItem(IdSet[4]) 
			])
			.then(() => {
				this.setState({
					isLoading : false
				});
			});
		}
	}
	
	incrementFiveNewsStories = () => {
		this.setState({
			firstStoryIndex : this.state.firstStoryIndex + 5,
			lastStoryIndex	: this.state.lastStoryIndex + 5
		}, () => {
			this.setFiveNewsStories();
		});
	}

	reloadWithNewStories = () => {
		this.setState({
			firstStoryIndex : 0,
			lastStoryIndex	: 5
		}, () => {
			this.props.getNewsStories()
			.then(() =>{
				this.setFiveNewsStories();
			})
		});
	}

	msToTime(duration) {
		const seconds = Math.floor((duration / 1000) % 60);
		const minutes = Math.floor((duration / (1000 * 60)) % 60);
		const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
		
		return {
			hours : hours,
			minutes:minutes,
			seconds: seconds
		}
	}

	displayTimeText = (unixTime) => {
		const newsItemTime = new Date(unixTime * 1000).getTime();
		const currentTime = new Date().getTime();
		const diffirenceInTime = currentTime - newsItemTime
		const timeObject = this.msToTime(diffirenceInTime);

		if(timeObject.minutes === 0 && timeObject.hours === 0 && timeObject.seconds <= 59){
			if(timeObject.seconds === 1){
				return `${timeObject.seconds} second ago`
			}
			return `${timeObject.seconds} seconds ago`
		}

		if(timeObject.hours === 0 && timeObject.minutes <= 59){
			if(timeObject.minutes === 1){
				return `${timeObject.minutes} min ago`
			}	
			return `${timeObject.minutes} mins ago`
		}

		if(timeObject.hours <= 23){
			if(timeObject.hours === 1){
				return `${timeObject.hours} hour ago`
			}	
			return `${timeObject.hours} hours ago`
		}
	}

	componentDidMount(){
		this.reloadWithNewStories();
	}

	render() {
		const { newsFeed } = this.props;
		const { isLoading } = this.state;
		const { newsItems } = newsFeed;

		return (
			<Card className={`${NewsFeedWrapper}`}>
				<NavBar />
				<div className={`${ButtonWrapper}`}>
					<Button 
						disabled={isLoading}
						className={`${CurrentNewsButton} ${CommonButtonWrapperStyle} ${CommonFontAttribute}`} 
						onClick={() => { 
							this.setState({ isLoading : true })
							this.reloadWithNewStories()
						}} >
						New
					</Button>
					<Button 
						disabled={isLoading}
						className={`${PastNewsButton} ${CommonButtonWrapperStyle} ${CommonFontAttribute}`} 
						onClick={() => { alert(`Hi Team. I wasn't sure of the functionality required when clicking past.`) }}>
						Past
					</Button>
				</div>
				<div className={`${NewsStoryWrapper}`}>
					{ newsItems && newsItems.length === 5 && !isLoading ? (
						<> 
							<Card className={`${NewsStory}`} onClick={() => window.location = newsItems[0].url }>
								<p className={`${NewsItemTitle} ${CommonFontAttribute}`}>{newsItems[0].title}</p>
								<p className={`${NewsItemDescription}`}>
									I have added dummy text here as I found the hacker news api does not return any description of type story.
								</p>
								<p className={`${NewsItemFooter}`}>
									<img alt="clock" className={`${NewsItemClockIcon}`} src={clockIcon} />
									{this.displayTimeText(newsItems[0].time)} | 50 comments
								</p>
							</Card>
							<Card className={`${NewsStory}`} onClick={() => window.location = newsItems[1].url }>
								<p className={`${NewsItemTitle} ${CommonFontAttribute}`}>{newsItems[1].title}</p>
								<p className={`${NewsItemDescription}`}>
									Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, …when an unknown printer took a galley of type and scrambled
								</p>
								<p className={`${NewsItemFooter}`}>
									<img alt="clock" className={`${NewsItemClockIcon}`} src={clockIcon}/>
									{this.displayTimeText(newsItems[1].time)} | 50 comments
								</p>
							</Card>
							<Card className={`${NewsStory}`} onClick={() => window.location = newsItems[2].url }>
								<p className={`${NewsItemTitle} ${CommonFontAttribute}`}>{newsItems[2].title}</p>
								<p className={`${NewsItemDescription}`}>
									Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, …when an unknown printer took a galley of type and scrambled
								</p>
								<p className={`${NewsItemFooter}`}>
									<img alt="clock" className={`${NewsItemClockIcon}`} src={clockIcon}/>
									{this.displayTimeText(newsItems[2].time)} | 50 comments
								</p>
							</Card>
							<Card className={`${NewsStory}`} onClick={() => window.location = newsItems[3].url }>
								<p className={`${NewsItemTitle} ${CommonFontAttribute}`}>{newsItems[3].title}</p>
								<p className={`${NewsItemDescription}`}>
									Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, …when an unknown printer took a galley of type and scrambled
								</p>
								<p className={`${NewsItemFooter}`}>
									<img alt="clock" className={`${NewsItemClockIcon}`} src={clockIcon}/>
									{this.displayTimeText(newsItems[3].time)} | 50 comments
								</p>
							</Card>
							<Card className={`${NewsStory} ${LastNewsStoryNode}`} onClick={() => window.location = newsItems[4].url }>
							<p className={`${NewsItemTitle} ${CommonFontAttribute}`}>{newsItems[4].title}</p>
							<p className={`${NewsItemDescription}`}>
								Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, …when an unknown printer took a galley of type and scrambled
							</p>
							<p className={`${NewsItemFooter}`}>
								<img alt="clock" className={`${NewsItemClockIcon}`} src={clockIcon}/>
								{this.displayTimeText(newsItems[4].time)} | 50 comments
							</p>
						</Card>
						</>
					) : <div className={`${NewsStoriesLoader}`}><Loader /></div>}
				</div>
				<Button 
					disabled={this.state.isLoading}
					className={`${LoadMoreButton} ${CommonFontAttribute}`} 
					onClick={() => { 
						this.setState({
							isLoading : true
						})
						this.incrementFiveNewsStories() 
					}}>
					{isLoading ? '...' : 'Load More'}
				</Button>
				<Footer />
			</Card>
		)
	}
}

const mapStateToProps = (state) => ({
	newsFeed : {
		...state.maxNewsCount,
		...state.newsStories,
		...state.newsItems
	}
});

const mapDispatchToProps = {
	getMaxNewsCount : NewsFeedAction.getMaxNewsCount,
	getNewsStories 	: NewsFeedAction.getNewsStories,
	getNewsItem			: NewsFeedAction.getNewsItem
}


export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
