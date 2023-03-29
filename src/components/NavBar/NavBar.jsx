import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react'
import './NavBar.css'

const NavBar = ({ setIsBurgerMenuOpened }) => {
	const [areFeaturesOptionsShown, setAreFeaturesOptionsShown] = useState(false)

	const handleLinkClick = () => {
		setIsBurgerMenuOpened && setIsBurgerMenuOpened(false)
		setAreFeaturesOptionsShown(false)
	}

	return (
		<ul className="NavBar">
			<li className="item">
				<NavLink to="/" onClick={handleLinkClick}>
					Home
				</NavLink>
			</li>
			<li className="item select">
				<button type="button" onClick={() => setAreFeaturesOptionsShown(prevState => !prevState)}>
					Features
					<Icon icon="material-symbols:keyboard-arrow-down-rounded" fontSize={18} className="NavBar__select-icon" />
				</button>
				{areFeaturesOptionsShown && (
					<ul className="select-options">
						<li>
							<NavLink to="/features/first" onClick={handleLinkClick}>
								First
							</NavLink>
						</li>
						<li>
							<NavLink to="/features/second" onClick={handleLinkClick}>
								Second
							</NavLink>
						</li>
						<li>
							<NavLink to="/features/third" onClick={handleLinkClick}>
								Third
							</NavLink>
						</li>
					</ul>
				)}
			</li>
			<li className="item">
				<NavLink to="/blog" onClick={handleLinkClick}>
					Blog
				</NavLink>
			</li>
			<li className="item">
				<NavLink to="/shop" onClick={handleLinkClick}>
					Shop
				</NavLink>
			</li>
			<li className="item">
				<NavLink to="/about" onClick={handleLinkClick}>
					About
				</NavLink>
			</li>
			<li className="item">
				<NavLink to="/contact" onClick={handleLinkClick}>
					Contact
				</NavLink>
			</li>
		</ul>
	)
}

export default NavBar
