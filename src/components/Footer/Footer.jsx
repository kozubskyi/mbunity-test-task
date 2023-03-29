import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import Container from '../Container/Container'
import Logo from '../Logo/Logo'
import Contacts from '../Contacts/Contacts'
import Newsletter from '../Newsletter/Newsletter'

const Footer = () => {
	return (
		<footer className="Footer">
			<Container>
				<div className="logo-wrapper">
					<Logo />
				</div>
				<div className="content-wrapper">
					<div className="contacts-and-links">
						<div>
							<h4>Reach us</h4>
							<Contacts />
						</div>
						<div>
							<h4>Company</h4>
							<ul>
								<li>
									<Link to="/about">About</Link>
								</li>
								<li>
									<Link to="/contact">Contact</Link>
								</li>
								<li>
									<Link to="/blog">Blog</Link>
								</li>
							</ul>
						</div>
						<div>
							<h4>Legal</h4>
							<ul>
								<li>Privacy Policy</li>
								<li>Terms & Services</li>
								<li>Terms of Use</li>
								<li>Refund Policy</li>
							</ul>
						</div>
						<div>
							<h4>Quick Links</h4>
							<ul>
								<li>Techlabz Keybox</li>
								<li>Downloads</li>
								<li>Forum</li>
							</ul>
						</div>
					</div>
					<Newsletter />
				</div>
			</Container>
		</footer>
	)
}

export default Footer
