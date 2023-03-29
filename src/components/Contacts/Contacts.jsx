import React from 'react'
import { Icon } from '@iconify/react'
import './Contacts.css'

const Contacts = () => {
	const contactList = [
		{
			icon: 'bxs:phone-call',
			value: '+1012 3456 789',
			href: 'tel:+10123456789',
		},
		{
			icon: 'ic:sharp-email',
			value: 'demo@gmail.com',
			href: 'mailto:demo@gmail.com',
		},
		{
			icon: 'carbon:location-filled',
			value: '132 Dartmouth Street Boston, Massachusetts 02156 United States',
			href: 'https://www.google.com/maps/place/132+Dartmouth+St,+Boston,+MA+02116,+%D0%A1%D0%A8%D0%90/@42.3467604,-71.0761182,17z/data=!3m1!4b1!4m6!3m5!1s0x89e37a0d715622b3:0x5b2af19970952585!8m2!3d42.3467604!4d-71.0761182!16s%2Fg%2F11c1zptc6r?hl=ru-UA',
		},
	]

	return (
		<ul className="Contacts">
			{contactList.map(({ icon, value, href }) => (
				<li key={icon}>
					<a href={href} target="_blank" rel="noreferrer noopener">
						<Icon icon={icon} />
						{value}
					</a>
				</li>
			))}
		</ul>
	)
}

export default Contacts
