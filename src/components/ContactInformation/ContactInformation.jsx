import React from 'react'
import './ContactInformation.css'
import Contacts from '../Contacts/Contacts'
import SocialNetworks from '../SocialNetworks/SocialNetworks'

const ContactInformation = () => {
	return (
		<div className="ContactInformation">
			<h3>Contact Information</h3>
			<p>Say something to start a live chat!</p>
			<Contacts />
			<SocialNetworks />
		</div>
	)
}

export default ContactInformation
