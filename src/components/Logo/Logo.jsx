import React from 'react'
import { Link } from 'react-router-dom'
import './Logo.css'

const Logo = ({ setIsBurgerMenuOpened }) => {
	return (
		<Link to="/" className="Logo" onClick={setIsBurgerMenuOpened && (() => setIsBurgerMenuOpened(false))}>
			Logo Here
		</Link>
	)
}

export default Logo
