import React, { Component } from 'react'
import Card from 'components/common/Card'
import logoDark from 'assets/images/logo-dark.svg';
import { FooterWrapper, LogoDark } from './css/Footer.module.scss'

export default class Footer extends Component {
	render() {
		return (
			<Card className={`${FooterWrapper}`} width='100%' height='99px'>
				<img className={`${LogoDark}`} alt='logo-dark' src={logoDark} />
			</Card>
		)
	}
}
