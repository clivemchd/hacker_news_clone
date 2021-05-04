/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ModuleCss from './css/Card.module.scss';

export default class Card extends Component {

	/**
	 * Card component instance
	 * @param {*} props 
	 */
	constructor(props){
		super(props)
	}
	
	render() {
		const { children, classname, inlineStyle, width, height, minHeight, background } = this.props;

		return (
			<div 
				className={`${ModuleCss.cardWrapper} ${classname}`}
				style={{
					width			: width, 
					height		: height,
					background:background,
					minHeight	: minHeight,
					...inlineStyle
				}}
			>
				{children}
			</div>
		)
	}
}

Card.propTypes = {
	children: PropTypes.node,
	width: PropTypes.string,
	height: PropTypes.string,
	minHeight: PropTypes.string,
	className: PropTypes.string,
	inlineStyle: PropTypes.object,
	background: PropTypes.string,
}

Card.defaultProps = {
	children: <></>,
	height: 'auto',
	width: 'auto',
	minHeight: 'auto',
	// className: '',
	inlineStyle: null,
	background: ''
}