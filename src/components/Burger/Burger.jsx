import React from 'react'
import { Icon } from '@iconify/react'
import './Burger.css'

const Burger = ({ setIsBurgerMenuOpened }) => {
	return (
		<button type="button" className="Burger" onClick={() => setIsBurgerMenuOpened(true)}>
			<Icon icon="ci:menu-alt-01" />
		</button>
	)
}

export default Burger
