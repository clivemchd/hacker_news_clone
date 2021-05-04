import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "redux/store";
import { NewsFeed } from 'pages';

export default class App extends Component {

	render() {
		return (
			<Provider store={store}>
				<NewsFeed />
			</Provider>
		)
	}
}

