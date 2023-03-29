import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react'
import './NavBar.css'

const navList = [
	{
		route: '/',
		value: 'Home',
		type: 'link',
	},
	{
		route: '/features',
		value: 'Features',
		type: 'list',
	},
	{
		route: '/blog',
		value: 'Blog',
		type: 'link',
	},
	{
		route: '/shop',
		value: 'Shop',
		type: 'link',
	},
	{
		route: '/about',
		value: 'About',
		type: 'link',
	},
	{
		route: '/contact',
		value: 'Contact',
		type: 'link',
	},
]

const NavBar = ({ setIsBurgerMenuOpened }) => {
	return (
		<ul className="NavBar">
			{navList.map(({ route, value, type }) => (
				<li key={route}>
					<NavLink to={route} onClick={setIsBurgerMenuOpened && (() => setIsBurgerMenuOpened(false))}>
						{value}
					</NavLink>
					{type === 'list' && <Icon icon="material-symbols:keyboard-arrow-down-rounded" fontSize={18} />}
				</li>
			))}
		</ul>
	)
}

export default NavBar
