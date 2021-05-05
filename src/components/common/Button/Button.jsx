import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { GenericButton } from './css/Button.module.scss'

export default class Button extends Component {

	render() {
		const { type, children, onClick, name, className, title, value, inlineStyle, disabled } = this.props;

		return (
			<button 
				type={type} 
				className={`${GenericButton} ${className}`}
				name={name} 
				onClick={onClick}
				title={title}
				value={value}
				style={inlineStyle}
				disabled={disabled}
			>
				{children}
			</button>
		)
	}
}

Button.propTypes = {
	type 				: PropTypes.string,
	children 		: PropTypes.node.isRequired,
	onClick 		: PropTypes.func.isRequired,
	name 				: PropTypes.string,
	className		: PropTypes.string,
	title				: PropTypes.string,
	value				: PropTypes.string,
	inlineStyle	: PropTypes.object,
	disabled		: PropTypes.bool
}

Button.defaultProps = {
	type 				: 'button',
	name 				: '',
	className		: '',
	title				: '',
	value				: '',
	inlineStyle	: {},
	disabled		: false
}
