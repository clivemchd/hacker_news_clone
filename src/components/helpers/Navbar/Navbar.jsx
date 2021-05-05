import React, { Component } from 'react'
import Card from 'components/common/Card'
import logoPrimary from 'assets/images/logo-primary.svg'
import { NavbarWrapper, LogoPrimary } from './css/Navbar.module.scss'

export default class NavBar extends Component {
	render() {
		return (
			<Card className={`${NavbarWrapper}`} width='100%' height='51px'>
				<img className={`${LogoPrimary}`} alt='logo-primary' src={logoPrimary} />
			</Card>
		)
	}
}
