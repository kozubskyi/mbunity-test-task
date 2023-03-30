import React from 'react'
import ReactDOM from 'react-dom'
import { Icon } from '@iconify/react'
import './BurgerMenu.css'
import Container from '../Container/Container'
import Logo from '../Logo/Logo'
import NavBar from '../NavBar/NavBar'
import HeaderIcons from '../HeaderIcons/HeaderIcons'

const BurgerMenu = ({ setIsBurgerMenuOpened }) => {
	return ReactDOM.createPortal(
		<div className="BurgerMenu">
			<Container>
				<Logo setIsBurgerMenuOpened={setIsBurgerMenuOpened} />
				<button type="button" className="close-button" onClick={() => setIsBurgerMenuOpened(false)}>
					<Icon icon="akar-icons:cross" />
				</button>
				<NavBar setIsBurgerMenuOpened={setIsBurgerMenuOpened} />
				<HeaderIcons setIsBurgerMenuOpened={setIsBurgerMenuOpened} />
			</Container>
		</div>,
		document.getElementById('portal')
	)
}

export default BurgerMenu
