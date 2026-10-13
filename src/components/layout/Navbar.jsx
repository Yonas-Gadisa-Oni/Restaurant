import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "../style/Navbar.css";

const navLinks = [
	{ label: "HOME", to: "/" },
	{ label: "MENU", to: "/menu" },
	{ label: "ABOUT", to: "/about" },
	{ label: "GALLERY", to: "/gallery" },
	{ label: "CONTACT", to: "/contact" },
];

function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const location = useLocation();

	// Close mobile menu on route change
	useEffect(() => {
		setMenuOpen(false);
	}, [location.pathname]);

	// Add scrolled class for background
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 60);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Prevent body scroll when mobile menu is open
	useEffect(() => {
		if (menuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [menuOpen]);

	return (
		<header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
			<div className="navbar-container">
				<Link to="/" className="navbar-logo">
					Maison Élian
				</Link>

				<nav
					className={`navbar-menu ${menuOpen ? "navbar-menu-open" : ""}`}
					aria-label="Main navigation"
				>
					<div className="navbar-links">
						{navLinks.map((link) => (
							<NavLink
								key={link.label}
								to={link.to}
								className={({ isActive }) =>
									`navbar-link ${isActive ? "navbar-link-active" : ""}`
								}
								end={link.to === "/"}
							>
								{link.label}
							</NavLink>
						))}
					</div>
					<Link to="/reserve" className="navbar-reserve">
						RESERVE
					</Link>
				</nav>

				<button
					className={`navbar-toggle ${menuOpen ? "navbar-toggle-open" : ""}`}
					type="button"
					aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
					onClick={() => setMenuOpen((prev) => !prev)}
				>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>

			{/* Mobile overlay */}
			<div
				className={`navbar-overlay ${menuOpen ? "navbar-overlay-open" : ""}`}
				onClick={() => setMenuOpen(false)}
			/>
		</header>
	);
}

export default Navbar;