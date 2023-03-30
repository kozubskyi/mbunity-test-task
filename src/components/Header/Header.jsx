import React, { useEffect, useState } from 'react'
import { useBreakpoint } from 'react-use-size'
import './Header.css'
import Container from '../Container/Container'
import Logo from '../Logo/Logo'
import Burger from '../Burger/Burger'
import NavBar from '../NavBar/NavBar'
import HeaderIcons from '../HeaderIcons/HeaderIcons'
import BurgerMenu from '../BurgerMenu/BurgerMenu'

const Header = () => {
	const isNotDesktop = useBreakpoint(992)
	const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState(false)

	useEffect(() => {
		const body = document.querySelector('body')

		isBurgerMenuOpened ? body.classList.add('no-scroll') : body.classList.remove('no-scroll')
	}, [isBurgerMenuOpened])

	return (
		<header className="Header">
			<Container>
				<nav>
					<Logo />
					{isNotDesktop ? (
						<Burger setIsBurgerMenuOpened={setIsBurgerMenuOpened} />
					) : (
						<div className="navbar-and-icons">
							<NavBar />
							<HeaderIcons />
						</div>
					)}
				</nav>
			</Container>
			{isNotDesktop && isBurgerMenuOpened && <BurgerMenu setIsBurgerMenuOpened={setIsBurgerMenuOpened} />}
		</header>
	)
}

export default Header
