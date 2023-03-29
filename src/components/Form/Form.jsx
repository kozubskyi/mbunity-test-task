import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import './Form.css'

const Form = () => {
	const initialState = {
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: '',
		subject: '',
		message: '',
	}

	const [form, setForm] = useState(initialState)

	const localStorageName = 'mbunity-contact-form'

	useEffect(() => {
		const stringifiedForm = localStorage.getItem(localStorageName)

		if (stringifiedForm) setForm(JSON.parse(stringifiedForm))
	}, [])

	const onInputChange = evt => {
		setForm(prevForm => {
			const newForm = { ...prevForm, [evt.target.name]: evt.target.value }

			localStorage.setItem(localStorageName, JSON.stringify(newForm))

			return newForm
		})
	}

	const resetForm = () => {
		setForm(initialState)
		localStorage.setItem(localStorageName, JSON.stringify(initialState))
	}

	const onFormSubmit = evt => {
		evt.preventDefault()

		let error = null

		const keys = Object.keys(form).filter(key => key !== 'message')

		for (let i = 0; i < keys.length; i++) {
			const field = keys[i]
			const value = form[field]

			if (!value) {
				error = `⚠️ Warning! Field "${field}" is required.`
				break
			}

			if (value.length < 2) {
				error = `⚠️ Warning! Field "${field}" must be greater than 1 character.`
				break
			}
		}

		if (!/^(\+380|380|0)\d{9}$/.test(form.phoneNumber)) {
			error = `⚠️ Warning! Phone number must match one of the formats:
+380991050088
380991050088
0991050088`
		}

		if (error) return alert(error)

		// Send data to some server
		alert('✅ Fake request data sending success!')

		resetForm()
	}

	return (
		<form className="Form" onSubmit={onFormSubmit}>
			<div className="main-info">
				<div className="first-name label-with-input">
					<input
						type="text"
						id="first-name"
						name="firstName"
						placeholder="Denys"
						min="2"
						onChange={onInputChange}
						value={form.firstName}
						required
					/>
					<label htmlFor="first-name">First Name</label>
				</div>
				<div className="last-name label-with-input">
					<input
						type="text"
						id="last-name"
						name="lastName"
						placeholder="Kozubskyi"
						min="2"
						onChange={onInputChange}
						value={form.lastName}
						required
					/>
					<label htmlFor="last-name">Last Name</label>
				</div>
				<div className="email label-with-input">
					<input
						type="email"
						id="email"
						name="email"
						placeholder="denys.kozubskyi@gmail.com"
						onChange={onInputChange}
						value={form.email}
						required
					/>
					<label htmlFor="email">Email</label>
				</div>
				<div className="phone-number label-with-input">
					<input
						type="tel"
						id="phone-number"
						name="phoneNumber"
						placeholder="+38 099 105 00 88"
						// pattern={phoneNumberPattern}
						onChange={onInputChange}
						value={form.phoneNumber}
						required
					/>
					<label htmlFor="phone-number">Phone Number</label>
				</div>
			</div>
			<div className="subject">
				<p>Select Subject?</p>
				<div className="radio-inputs">
					<div className="radio-with-label">
						<input
							type="radio"
							name="subject"
							id="subject-1"
							value="General Inquiry 1"
							checked={form.subject === 'General Inquiry 1'}
							onChange={onInputChange}
						/>
						<div className="checkmark">
							<Icon icon="zondicons:checkmark" fontSize={7} />
						</div>
						<label htmlFor="subject-1">General Inquiry</label>
					</div>
					<div className="radio-with-label">
						<input
							type="radio"
							name="subject"
							id="subject-2"
							value="General Inquiry 2"
							checked={form.subject === 'General Inquiry 2'}
							onChange={onInputChange}
						/>
						<div className="checkmark">
							<Icon icon="zondicons:checkmark" fontSize={7} />
						</div>
						<label htmlFor="subject-2">General Inquiry</label>
					</div>
					<div className="radio-with-label">
						<input
							type="radio"
							name="subject"
							id="subject-3"
							value="General Inquiry 3"
							checked={form.subject === 'General Inquiry 3'}
							onChange={onInputChange}
						/>
						<div className="checkmark">
							<Icon icon="zondicons:checkmark" fontSize={7} />
						</div>
						<label htmlFor="subject-3">General Inquiry</label>
					</div>
					<div className="radio-with-label">
						<input
							type="radio"
							name="subject"
							id="subject-4"
							value="General Inquiry 4"
							checked={form.subject === 'General Inquiry 4'}
							onChange={onInputChange}
						/>
						<div className="checkmark">
							<Icon icon="zondicons:checkmark" fontSize={7} />
						</div>
						<label htmlFor="subject-4">General Inquiry</label>
					</div>
				</div>
			</div>
			<div className="message">
				<input
					type="text"
					id="message"
					name="message"
					placeholder="Write your message.."
					onChange={onInputChange}
					value={form.message}
				/>
				<label htmlFor="message">Message</label>
			</div>
			<button type="submit">Send Message</button>
		</form>
	)
}

export default Form
