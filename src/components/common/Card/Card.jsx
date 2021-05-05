/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Card extends Component {

	/**
	 * Card component instance
	 * @param {*} props 
	 */
	constructor(props){
		super(props)
	}
	
	render() {
		const { children, className, inlineStyle, width, height, minHeight, background, onClick } = this.props;

		return (
			<div 
				className={`${className}`}
				onClick={onClick}
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
	onClick : PropTypes.func
}

Card.defaultProps = {
	children: <></>,
	height: '',
	width: '',
	minHeight: '',
	className: '',
	inlineStyle: null,
	background: '',
	onClick: ()=>{}
}