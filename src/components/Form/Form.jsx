import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
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

	const {
		register,
		handleSubmit,
		formState: { errors },
		// reset,
		// watch,
		// setValue,
		// clearErrors,
		// resetField,
		// getValues,
		// getFieldState,
		// control,
	} = useForm({
		// mode: 'onChange',
	})

	const [form, setForm] = useState(initialState)

	const localStorageName = 'mbunity-contact-form'

	useEffect(() => {
		const stringifiedForm = localStorage.getItem(localStorageName)

		stringifiedForm && setForm(JSON.parse(stringifiedForm))
	}, [])

	// useEffect(() => {
	// 	// заміна onInputChange
	// 	const subscription = watch(currentForm => {
	// 		setForm(currentForm)

	// 		console.log({ currentForm })

	// 		localStorage.setItem(localStorageName, JSON.stringify(currentForm))
	// 	})

	// 	return () => subscription.unsubscribe()
	// }, [watch])

	const onInputChange = evt => {
		setForm(prevForm => {
			const newForm = { ...prevForm, [evt.target.name]: evt.target.value }

			localStorage.setItem(localStorageName, JSON.stringify(newForm))

			return newForm
		})
	}

	const resetForm = () => {
		// reset()

		setForm(initialState)
		localStorage.setItem(localStorageName, JSON.stringify(initialState))
	}

	const onFormSubmit = evt => {
		let error = null

		if (!form.subject) {
			error = `⚠️ Warning! Subject is required field`
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
		<form className="Form" onSubmit={handleSubmit(onFormSubmit)}>
			<div className="main-info">
				<div className="first-name label-with-input">
					<p className="error-field">{errors.firstName?.message}</p>
					<input
						{...register('firstName', {
							required: 'First Name is required field',
							minLength: {
								value: 2,
								message: 'First Name must be greater than 1 character',
							},
							onChange: onInputChange,
						})}
						type="text"
						id="first-name"
						placeholder="Denys"
						value={form.firstName}
					/>
					<label htmlFor="first-name">First Name</label>
				</div>
				<div className="last-name label-with-input">
					<p className="error-field">{errors.lastName?.message}</p>
					<input
						{...register('lastName', {
							required: 'Last Name is required field',
							minLength: {
								value: 2,
								message: 'Last Name must be greater than 1 character',
							},
							onChange: onInputChange,
						})}
						type="text"
						id="last-name"
						placeholder="Kozubskyi"
						value={form.lastName}
					/>
					<label htmlFor="last-name">Last Name</label>
				</div>
				<div className="email label-with-input">
					<p className="error-field">{errors.email?.message}</p>
					<input
						{...register('email', {
							required: 'Email is required field',
							pattern: {
								value:
									/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
								message: 'Please enter valid email',
							},
							onChange: onInputChange,
						})}
						type="email"
						id="email"
						placeholder="denys.kozubskyi@gmail.com"
						value={form.email}
					/>
					<label htmlFor="email">Email</label>
				</div>
				<div className="phone-number label-with-input">
					<p className="error-field">{errors.phoneNumber?.message}</p>
					<input
						{...register('phoneNumber', {
							required: 'Phone number is required field',
							onChange: onInputChange,
						})}
						type="tel"
						id="phone-number"
						placeholder="+38 099 105 00 88"
						value={form.phoneNumber}
					/>
					<label htmlFor="phone-number">Phone Number</label>
				</div>
			</div>
			<div className="subject">
				<p className="title">Select Subject?</p>
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
