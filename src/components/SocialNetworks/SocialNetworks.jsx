import React from 'react'
import { Icon } from '@iconify/react'
import './SocialNetworks.css'

const SocialNetworks = () => {
	const socialMediaList = [
		{
			icon: 'carbon:logo-twitter',
			link: 'https://twitter.com',
		},
		{
			icon: 'ri:instagram-line',
			link: 'https://instagram.com',
		},
		{
			icon: 'ic:baseline-discord',
			link: 'https://discord.com',
		},
	]

	return (
		<ul className="Social-networks-list">
			{socialMediaList.map(({ link, icon }) => (
				<li key={icon}>
					<a href={link} target="_blank" rel="noreferrer noopener">
						<Icon icon={icon} />
					</a>
				</li>
			))}
		</ul>
	)
}

export default SocialNetworks
