import React from 'react'
import './ContactPage.css'
import Container from '../../components/Container/Container'
import ContactInformation from '../../components/ContactInformation/ContactInformation'
import Form from '../../components/Form/Form'

const ContactPage = () => {
	return (
		<section className="section ContactPage">
			<Container>
				<h2>Contact Us</h2>
				<p>Any questions or remarks? Just write us a message!</p>
				<div className="contact-information-and-form">
					<ContactInformation />
					<Form />
				</div>
			</Container>
		</section>
	)
}

export default ContactPage
