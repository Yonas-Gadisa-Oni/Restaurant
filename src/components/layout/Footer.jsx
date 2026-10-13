import { Link } from "react-router-dom";
import "../style/Footer.css";

const quickLinks = [
	{ label: "Home", to: "/" },
	{ label: "Menu", to: "/menu" },
	{ label: "About", to: "/about" },
	{ label: "Gallery", to: "/gallery" },
	{ label: "Contact", to: "/contact" },
	{ label: "Reserve", to: "/reserve" },
];

function Footer() {
	return (
		<footer className="footer">
			<div className="footer-container">
				{/* Top section */}
				<div className="footer-top">
					{/* Brand */}
					<div className="footer-brand">
						<Link to="/" className="footer-logo">Maison Élian</Link>
						<p className="footer-tagline">
							Where classical French technique meets the quiet confidence of modern cuisine.
						</p>
						<div className="footer-social">
							<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-link">
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
									<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
									<circle cx="12" cy="12" r="5"/>
									<circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
								</svg>
							</a>
							<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-social-link">
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
									<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
								</svg>
							</a>
							<a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer" aria-label="TripAdvisor" className="footer-social-link">
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
									<circle cx="6.5" cy="13.5" r="3.5"/>
									<circle cx="17.5" cy="13.5" r="3.5"/>
									<path d="M3 13.5C3 9 7 5 12 5s9 4 9 8.5"/>
									<circle cx="6.5" cy="13.5" r="1" fill="currentColor" stroke="none"/>
									<circle cx="17.5" cy="13.5" r="1" fill="currentColor" stroke="none"/>
								</svg>
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div className="footer-section">
						<h4 className="footer-heading">Navigation</h4>
						<ul className="footer-links">
							{quickLinks.map((link) => (
								<li key={link.label}>
									<Link to={link.to} className="footer-link">{link.label}</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div className="footer-section">
						<h4 className="footer-heading">Contact</h4>
						<ul className="footer-info">
							<li>
								<span className="footer-info-label">Address</span>
								<span>14 Rue du Faubourg Saint-Honoré</span>
								<span>75008 Paris, France</span>
							</li>
							<li>
								<span className="footer-info-label">Phone</span>
								<a href="tel:+33142256800" className="footer-link">+33 1 42 25 68 00</a>
							</li>
							<li>
								<span className="footer-info-label">Email</span>
								<a href="mailto:hello@maisonelian.com" className="footer-link">hello@maisonelian.com</a>
							</li>
						</ul>
					</div>

					{/* Hours */}
					<div className="footer-section">
						<h4 className="footer-heading">Opening Hours</h4>
						<ul className="footer-info">
							<li>
								<span className="footer-info-label">Lunch</span>
								<span>Tue – Sat: 12:00 – 14:30</span>
							</li>
							<li>
								<span className="footer-info-label">Dinner</span>
								<span>Tue – Sat: 19:00 – 22:30</span>
							</li>
							<li>
								<span className="footer-info-label">Closed</span>
								<span>Sunday & Monday</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Divider */}
				<div className="footer-divider"></div>

				{/* Bottom */}
				<div className="footer-bottom">
					<p className="footer-copyright">
						&copy; {new Date().getFullYear()} Maison Élian. All rights reserved.
					</p>
					<div className="footer-bottom-links">
						<a href="#" className="footer-bottom-link">Privacy Policy</a>
						<a href="#" className="footer-bottom-link">Terms of Service</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;