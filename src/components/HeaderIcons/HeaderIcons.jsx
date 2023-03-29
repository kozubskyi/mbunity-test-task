import React from 'react'
import './HeaderIcons.css'
import { Icon } from '@iconify/react'
import { NavLink } from 'react-router-dom'

const iconList = [
	{
		route: '/cabinet',
		icon: 'radix-icons:person',
	},
	{
		route: '/cart',
		icon: 'bi:cart',
	},
]

const HeaderIcons = ({ setIsBurgerMenuOpened }) => {
	return (
		<div className="HeaderIcons">
			{iconList.map(({ route, icon }) => (
				<NavLink to={route} key={route} onClick={setIsBurgerMenuOpened && (() => setIsBurgerMenuOpened(false))}>
					<Icon icon={icon} fontSize={18} />
				</NavLink>
			))}
		</div>
	)
}

export default HeaderIcons
