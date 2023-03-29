import React from 'react'
import { Icon } from '@iconify/react'
import './BurgerMenu.css'
import Container from '../Container/Container'
import Logo from '../Logo/Logo'
import NavBar from '../NavBar/NavBar'
import HeaderIcons from '../HeaderIcons/HeaderIcons'

const BurgerMenu = ({ setIsBurgerMenuOpened }) => {
	return (
		<div className="BurgerMenu">
			<Container>
				<Logo setIsBurgerMenuOpened={setIsBurgerMenuOpened} />
				<button type="button" className="close-button" onClick={() => setIsBurgerMenuOpened(false)}>
					<Icon icon="akar-icons:cross" />
				</button>
				<NavBar setIsBurgerMenuOpened={setIsBurgerMenuOpened} />
				<HeaderIcons setIsBurgerMenuOpened={setIsBurgerMenuOpened} />
			</Container>
		</div>
	)
}

export default BurgerMenu
