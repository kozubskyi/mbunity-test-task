import React, { useState, useEffect } from 'react'
import './Newsletter.css'

const Newsletter = () => {
	const [email, setEmail] = useState('')

	const localStorageName = 'mbunity-subscribe-email'

	useEffect(() => {
		const localStorageEmail = localStorage.getItem(localStorageName)

		if (localStorageEmail) setEmail(localStorageEmail)
	}, [])

	const onInputChange = evt => {
		const { value } = evt.target

		setEmail(value)
		localStorage.setItem(localStorageName, value)
	}

	const resetForm = () => {
		setEmail('')
		localStorage.setItem(localStorageName, '')
	}

	const onFormSubmit = evt => {
		evt.preventDefault()

		// Send data to some server
		alert('✅ Fake request data sending success!')

		resetForm()
	}

	return (
		<div className="Newsletter">
			<p className="title">Join Our Newsletter</p>
			<form onSubmit={onFormSubmit}>
				<input type="email" placeholder="Your email address" onChange={onInputChange} value={email} required />
				<button type="submit">Subscribe</button>
			</form>
			<p className="info">* Will send you weekly updates for your better tool management.</p>
		</div>
	)
}

export default Newsletter
